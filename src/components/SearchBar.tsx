import { SEARCH_CONFIG } from '../constants';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = SEARCH_CONFIG.DEFAULT_PLACEHOLDER,
}: SearchBarProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-white/15 rounded-lg bg-black/35 text-white placeholder-white/40 focus:outline-none focus:border-candlelight focus:ring-2 focus:ring-candlelight/20 transition-all"
    />
  );
}
