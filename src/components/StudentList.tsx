import type { Student } from '../types';
import { getProfileImageUrl } from '../lib/profileImage';
import { ProfileImage } from './ProfileImage';
import { UI_TEXT } from '../constants';

interface StudentListProps {
  students: Student[];
  onProfileClick?: (student: Student) => void;
}

function ExternalLinkIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function StudentList({ students, onProfileClick }: StudentListProps) {
  if (students.length === 0) {
    return (
      <div className="text-center py-16 text-white/60">
        <p className="text-lg">{UI_TEXT.NO_STUDENTS_FOUND}</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-1 sm:space-y-2">
      {/* Header Row */}
      <div className="py-2 px-3 sm:py-3 sm:px-4 border-b border-white/20 mb-1 sm:mb-2">
        <div className="flex items-center justify-between sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
          <span className="text-white/60 font-semibold text-xs sm:text-sm uppercase tracking-wide">
            Name
          </span>
          <span className="text-white/60 font-semibold text-xs sm:text-sm uppercase tracking-wide sm:ml-4">
            Website
          </span>
        </div>
      </div>

      {/* Student Rows */}
      {students.map((student, index) => (
        <div
          key={index}
          className="py-1.5 px-3 sm:py-2 sm:px-4 hover:bg-white/5 transition-colors rounded-sm group border-b border-white/5"
        >
          {/* Mobile Layout: [PFP][Name] ................ [Icon] */}
          <div className="flex sm:hidden items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <button
                onClick={() => onProfileClick?.(student)}
                className="focus:outline-none focus:ring-2 focus:ring-candlelight focus:ring-offset-2 focus:ring-offset-[#181818] rounded-full transition-transform hover:scale-105 flex-shrink-0"
                aria-label={`View ${student.name}'s profile`}
              >
                <ProfileImage
                  src={getProfileImageUrl(student)}
                  alt={`${student.name}'s profile`}
                  className="w-10 h-10 rounded-full border-2 border-white/20 object-cover cursor-pointer"
                />
              </button>
              <span className="text-white font-semibold text-sm truncate">{student.name}</span>
            </div>
            {student.website ? (
              <a
                href={student.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-candlelight hover:text-old-gold transition-colors flex-shrink-0 p-1.5 touch-manipulation"
                aria-label={`Visit ${student.name}'s website`}
              >
                <ExternalLinkIcon className="w-5 h-5" />
              </a>
            ) : (
              <div className="w-5 h-5 flex-shrink-0" />
            )}
          </div>

          {/* Desktop Layout: [PFP][Name] | [Website URL] */}
          <div className="hidden sm:flex sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onProfileClick?.(student)}
                className="focus:outline-none focus:ring-2 focus:ring-candlelight focus:ring-offset-2 focus:ring-offset-[#181818] rounded-full transition-transform hover:scale-105"
                aria-label={`View ${student.name}'s profile`}
              >
                <ProfileImage
                  src={getProfileImageUrl(student)}
                  alt={`${student.name}'s profile`}
                  className="w-14 h-14 rounded-full flex-shrink-0 border-2 border-white/20 object-cover cursor-pointer"
                />
              </button>
              <span className="text-white font-semibold text-lg">{student.name}</span>
            </div>
            {student.website ? (
            <a
              href={student.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-candlelight hover:text-old-gold transition-colors text-base underline break-all sm:break-normal sm:truncate sm:ml-4 sm:max-w-[60%] inline-flex items-center gap-1.5"
            >
              <span className="break-all sm:break-normal sm:truncate">{student.website.replace(/^https?:\/\//, '')}</span>
                <ExternalLinkIcon />
              </a>
            ) : (
              <span className="text-white/40 text-base sm:ml-4">No website</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
