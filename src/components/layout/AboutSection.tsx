import { SearchBar } from '../SearchBar';
import { UI_TEXT, EXTERNAL_URLS } from '../../constants';

interface AboutSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function AboutSection({ searchQuery, onSearchChange }: AboutSectionProps) {
  return (
    <div className="sm:hidden text-white/90">
      <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">{UI_TEXT.APP_TITLE}</h1>

      <p className="text-base leading-relaxed mb-4">
        {UI_TEXT.ABOUT_DESCRIPTION}{' '}
        <a
          className="text-candlelight hover:text-old-gold underline transition-colors"
          href={EXTERNAL_URLS.UNIVERSITY_OF_WATERLOO}
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Waterloo
        </a>
        .
      </p>
      <p className="text-base leading-relaxed mb-6">{UI_TEXT.ABOUT_DESCRIPTION_2}</p>

      <div className="mb-2">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>
    </div>
  );
}
