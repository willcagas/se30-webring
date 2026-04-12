import { useEffect, useRef } from 'react';
import type { Student } from '../types';
import { getProfileImageUrl } from '../lib/profileImage';
import { ProfileImage } from './ProfileImage';
import {
  createEscapeHandler,
  createTabKeyHandler,
  getFocusableElements,
} from '../lib/modalHelpers';

interface StudentModalProps {
  student: Student | null;
  onClose: () => void;
}

export function StudentModal({ student, onClose }: StudentModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!student) return;

    const handleEscape = createEscapeHandler(onClose);
    document.addEventListener('keydown', handleEscape);
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [student, onClose]);

  // Focus trap - keep focus within modal
  useEffect(() => {
    if (!student || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = getFocusableElements(modal);
    const firstElement = focusableElements[0] || null;
    const lastElement = focusableElements[focusableElements.length - 1] || null;

    const handleTabKey = createTabKeyHandler(firstElement, lastElement);
    modal.addEventListener('keydown', handleTabKey);

    return () => modal.removeEventListener('keydown', handleTabKey);
  }, [student]);

  if (!student) return null;

  const profileImageSrc = getProfileImageUrl(student);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-[#181818] border border-white/20 rounded-xl max-w-md w-full p-4 sm:p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-2 sm:mb-4">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-candlelight focus:ring-offset-2 focus:ring-offset-[#181818] rounded p-1"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mb-3 sm:mb-6">
          <ProfileImage
            src={profileImageSrc}
            alt={`${student.name}'s profile`}
            className="w-24 h-24 sm:w-48 sm:h-48 rounded-full border-2 sm:border-4 border-white/20 object-cover"
          />
        </div>

        <div className="text-center mb-3 sm:mb-6">
          <h2 id="modal-title" className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">
            {student.name}
          </h2>

          {student.website ? (
            <a
              href={student.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-candlelight hover:text-old-gold transition-colors text-sm sm:text-lg underline break-all focus:outline-none focus:ring-2 focus:ring-candlelight focus:ring-offset-2 focus:ring-offset-[#181818] rounded px-2 py-1"
            >
              {student.website}
            </a>
          ) : (
            <p className="text-white/60 text-xs sm:text-sm mt-2">No website provided</p>
          )}
        </div>
      </div>
    </div>
  );
}
