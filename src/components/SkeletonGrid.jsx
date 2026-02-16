export default function SkeletonGrid({ count = 6 }) {
  return (
    <div className="row g-3 g-md-4">
      {Array.from({ length: count }).map((_, i) => (
        <div className="col-12 col-sm-6 col-lg-4" key={i}>
          <div className="country-card glass rounded-4 h-100 skeleton-card">
            
            {/* Flag Skeleton */}
            <div className="skeleton skeleton-flag" />

            <div className="p-3 p-md-4">
              
              {/* Title */}
              <div className="skeleton skeleton-title mb-2" />

              {/* Region */}
              <div className="skeleton skeleton-text mb-2" />

              {/* Population */}
              <div className="skeleton skeleton-text short" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
