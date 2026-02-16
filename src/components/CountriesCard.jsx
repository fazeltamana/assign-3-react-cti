import { Users, Globe } from "lucide-react";

export default function CountriesCard({ country }) {

  const flag =
    country?.flags?.png ||
    "https://png.pngtree.com/png-vector/20221125/ourlarge/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg";

  const name = country?.name || "Unknown Country";
  const code = country?.cca3 || "N/A";
  const region = country?.region || "Unknown";
  const population = country?.population
    ? country.population.toLocaleString()
    : "N/A";

  return (
    <article className="country-card glass rounded-4 h-100">
      
      {/* Flag */}
      <div className="flag-wrap">
        <img
          src={flag}
          alt={name}
          className="flag"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3 p-md-4">
        <h3 className="h5 mb-2">{name}</h3>
        <div className="muted small mb-2">Code: {code}</div>
        <div className="muted small">
          Region: {region}
        </div>

        <div className="muted small mb-4">
          Population: {population}
        </div>
        {/* Badges */}
        <div className="poster-badges">
          <span className="badge badge-soft rounded-pill mt-5 px-3 py-2 d-inline-flex align-items-center gap-2">
            <Globe size={14} />
            {region}
          </span>

          <span className="badge badge-soft rounded-pill mt-5 px-3 py-2 d-inline-flex align-items-center gap-2">
            <Users size={14} />
            {population}
          </span>
        </div>
      </div>
    </article>
  );
}
