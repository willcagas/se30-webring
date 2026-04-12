import type { Student } from '../../types';
import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';
import { WebringExpandable } from '../WebringExpandable';
import { JoinExpandable } from '../JoinExpandable';
import { WebRingWidget } from '../WebRingWidget';
import { UI_TEXT, EXTERNAL_URLS } from '../../constants';

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  students: Student[];
}

function getWebsiteUrls(students: Student[]): string[] {
  return students.map((s) => s.website).filter((url): url is string => url !== undefined);
}

export function Sidebar({ searchQuery, onSearchChange, students }: SidebarProps) {
  return (
    <aside className="hidden sm:flex fixed left-0 top-0 h-full w-[500px] flex-col border-r border-white/10 bg-black/35 backdrop-blur-sm p-6 overflow-y-auto z-20">
      <div className="mb-8">
        <a
          href={EXTERNAL_URLS.WEBRING_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition-opacity mb-6"
          aria-label="View repository on GitHub"
        >
          <Logo className="h-12 w-12" />
        </a>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">{UI_TEXT.APP_TITLE}</h1>

        <div className="mb-6">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>

        <p className="text-sm text-white/80 leading-relaxed mb-4">
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
        <p className="text-sm text-white/80 leading-relaxed">{UI_TEXT.ABOUT_DESCRIPTION_2}</p>
      </div>

      <div className="pt-6 border-t border-white/10 text-sm text-white/60 mt-auto">
        <div className="flex flex-col gap-3 mb-4">
          <WebringExpandable />
          <JoinExpandable />
        </div>

        <div className="mb-0 flex justify-center">
          <WebRingWidget sites={getWebsiteUrls(students)} />
        </div>
      </div>
    </aside>
  );
}
