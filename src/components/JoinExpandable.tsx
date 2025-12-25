import { useState } from 'react';
import { EXTERNAL_URLS } from '../constants';

export function JoinExpandable() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="hover:text-candlelight transition-colors underline text-left"
        aria-expanded={isExpanded}
      >
        Can I join?
      </button>
      {isExpanded && (
        <div className="mt-3 pl-0 text-white/80 leading-relaxed space-y-2">
          <p className="text-sm">
            We welcome all students of our cohort to join! If you're not part of our cohort, you
            might be interested in other UW webrings including the general{' '}
            <a
              href={EXTERNAL_URLS.SE_WEBRING}
              className="text-candlelight hover:text-old-gold underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              SE webring
            </a>{' '}
            or the{' '}
            <a
              href={EXTERNAL_URLS.CS_WEBRING}
              className="text-candlelight hover:text-old-gold underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              CS webring
            </a>
            .
          </p>
          <p className="text-sm">
            Please visit and follow the instructions on the README.md file at{' '}
            <a
              href={EXTERNAL_URLS.WEBRING_REPO}
              className="text-candlelight hover:text-old-gold underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              this repo
            </a>{' '}
            to join the webring and add the webring widget to your website.
          </p>
        </div>
      )}
    </div>
  );
}
