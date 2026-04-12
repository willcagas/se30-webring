import { useState } from 'react';

export function WebringExpandable() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="hover:text-candlelight transition-colors underline text-left underline-offset-4"
        aria-expanded={isExpanded}
      >
        What's a webring?
      </button>
      {isExpanded && (
        <div className="mt-3 pl-0 text-white/80 leading-relaxed space-y-2">
          <p className="text-sm">
            A webring is a collection of websites linked together in a circular structure. Each
            site in the ring contains links to the previous and next sites, creating a loop that
            allows visitors to navigate through all member sites!
          </p>
        </div>
      )}
    </div>
  );
}
