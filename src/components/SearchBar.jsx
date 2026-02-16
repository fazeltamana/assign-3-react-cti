import { Search, X } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm, region, setRegion }) {
  const hasText = searchTerm.trim().length > 0;
  const hasFilter = region && region !== "all";

  return (
    <div className="glass rounded-4 p-3">

      {/* Search input + clear */}
      <div className="input-group mb-3">
        <span className="input-group-text bg-transparent text-light border-0">
          <Search size={18} />
        </span>
        <input
          className="form-control bg-transparent text-light rounded-3 border-1"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search a country... (Germany, Canada, etc.)"
        />
        {hasText && (
          <button
            className="btn btn-sm btn-soft rounded-2"
            type="button"
            onClick={() => setSearchTerm("")}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Region filter + clear */}
      <div className="d-flex align-items-center gap-2 w-100 mb-3">
        <select
          className="form-select w-auto flex-grow-1"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="all">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        {hasFilter && (
          <button
            className="btn btn-sm btn-soft rounded-2"
            type="button"
            onClick={() => setRegion("all")}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Quick search chips */}
      <div className="d-flex flex-wrap gap-2">
        {["Germany", "Canada", "Australia", "Netherlands", "United Kingdom"].map((chip) => (
          <button
            key={chip}
            type="button"
            className="btn btn-sm btn-soft rounded-pill"
            onClick={() => setSearchTerm(chip)}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
