import CountriesCard from "./CountriesCard";
import SkeletonGrid from "./SkeletonGrid";

export default function CountriesList({ countries, loading }) {

  if (loading) return <SkeletonGrid />;

  if (!countries?.length) {
    return (
      <p className="text-center mt-4">
        No countries found.
      </p>
    );
  }

  return (
    <div className="row g-3 g-md-4">
      {countries.map((country) => (
        <div
          className="col-12 col-sm-6 col-lg-4"
          key={country.cca3}  
        >
          <CountriesCard country={country} />
        </div>
      ))}
    </div>
  );
}
