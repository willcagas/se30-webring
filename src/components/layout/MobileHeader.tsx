import { Logo } from '../Logo';
import { EXTERNAL_URLS } from '../../constants';

interface MobileHeaderProps {
  showNetwork: boolean;
  onToggleNetwork: () => void;
}

function NetworkIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <line x1="12" y1="10" x2="7" y2="7" />
      <line x1="12" y1="10" x2="17" y2="7" />
      <line x1="12" y1="14" x2="7" y2="17" />
      <line x1="12" y1="14" x2="17" y2="17" />
      <line x1="5" y1="7" x2="5" y2="17" />
      <line x1="19" y1="7" x2="19" y2="17" />
    </svg>
  );
}

function CloseIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function MobileHeader({ showNetwork, onToggleNetwork }: MobileHeaderProps) {
  return (
    <>
      <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-[#151515]/95 backdrop-blur-sm border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <a
          href={EXTERNAL_URLS.WEBRING_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="View repository on GitHub"
        >
          <Logo className="h-8 w-8" />
        </a>
        <button
          onClick={onToggleNetwork}
          className="text-white/80 hover:text-candlelight transition-colors p-1"
          aria-label={showNetwork ? 'Close network view' : 'Open network view'}
        >
          {showNetwork ? <CloseIcon className="w-5 h-5" /> : <NetworkIcon className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
}
