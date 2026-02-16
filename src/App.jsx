import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import SearchBar from "./components/SearchBar";
import { Map } from "lucide-react";

const BASE_URL = "https://restcountries.com/v3.1";
const FIELDS = "name,flags,region,population,capital,cca3";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [region, setRegion] = useState("all");

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch countries whenever debouncedSearch or region changes
  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries() {
      try {
        setLoading(true);
        setError(null);

        let url = `${BASE_URL}/all?fields=${FIELDS}`;

        if (debouncedSearch.length >= 2) {
          url = `${BASE_URL}/name/${debouncedSearch}?fields=${FIELDS}`;
        } else if (region !== "all") {
          url = `${BASE_URL}/region/${region}?fields=${FIELDS}`;
        }
        console.log("Fetching URL:", url);
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error("Failed to fetch countries.");
        }
        const data = await res.json();
       
        const formatted = data.map((c) => ({
          cca3: c.cca3, 
          name: c.name?.common || "Unknown Country",
          flags: c.flags,
          region: c.region || "N/A",
          population: c.population || 0,
          capital: c.capital || [],
        }));

        setCountries(formatted);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch countries.");
          setCountries([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();

    return () => controller.abort();
  }, [debouncedSearch, region]);

  function retry() {
    setDebouncedSearch(search.trim());
  }

  return (
    <div className="container py-4">
      <div className="glass rounded-4 p-3 p-sm-4 mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="brand-badge glass">
            <Map size={40} />
          </div>
          <div>
            <h1 className="h3 mb-0">Countries Explorer</h1>
            <div className="muted small"> 🌍search with Bootstrap UI</div>
          </div>
        </div>

        <SearchBar
          searchTerm={search}
          setSearchTerm={setSearch}
          region={region}
          setRegion={setRegion}
        />
      </div>

      {loading && (
        <p className="text-center muted">Loading countries...</p>
      )}

      {error && (
        <div className="text-center mb-4">
          <p className="text-danger">Error: {error}</p>
          <button className="btn btn-soft" onClick={retry}>
            Retry
          </button>
        </div>
      )}

      {!error && (
        <CountriesList countries={countries} loading={loading} />
      )}
    </div>
  );
}
