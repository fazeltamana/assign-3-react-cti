How to run: npm run dev

// Base URL for the REST Countries API
const BASE_URL = "https://restcountries.com/v3.1";

// Fields to include in the API response (to reduce payload size)
const FIELDS = "name,flags,region,population,capital,cca3";

// Endpoint to get all countries with specified fields
url = `${BASE_URL}/all?fields=${FIELDS}`; 
// Example: Fetches all countries, including name, flag, region, population, capital, and country code (cca3)

// Endpoint to search for a country by name with specified fields
url = `${BASE_URL}/name/${debouncedSearch}?fields=${FIELDS}`; 
// Example: Fetches countries that match the search term in 'debouncedSearch', returning only the specified fields

// Endpoint to get all countries in a specific region with specified fields
url = `${BASE_URL}/region/${region}?fields=${FIELDS}`; 
// Example: Fetches countries in a given region (e.g., Asia, Europe), returning only the specified fields

 
HOME + RESULTS
<img width="1886" height="1079" alt="Screenshot 2026-02-16 173421" src="https://github.com/user-attachments/assets/d19717e1-e726-4d19-8e38-2dd9b5fbc470" />
<img width="1905" height="1079" alt="image" src="https://github.com/user-attachments/assets/a8fffde7-2ef3-4af8-9b48-c237b060ca36" />

