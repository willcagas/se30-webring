import { useState, useMemo, useEffect } from 'react';
import type { Student } from './types';
import { students } from './data/students';
import { filterStudents } from './lib/search';
import { calculateWebRingNavigation } from './lib/webRingNavigation';
import { Sidebar } from './components/layout/Sidebar';
import { MobileHeader } from './components/layout/MobileHeader';
import { AboutSection } from './components/layout/AboutSection';
import { NetworkOverlay } from './components/layout/NetworkOverlay';
import { StudentList } from './components/StudentList';
import { NetworkDiagram } from './components/NetworkDiagram';
import { StudentModal } from './components/StudentModal';
import { WebRingWidget } from './components/WebRingWidget';
import { WebringExpandable } from './components/WebringExpandable';
import { JoinExpandable } from './components/JoinExpandable';
import { RedirectingPage } from './components/RedirectingPage';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNetwork, setShowNetwork] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [redirectState, setRedirectState] = useState<{
    targetSite: string;
    direction: 'prev' | 'next';
  } | null>(null);

  const filteredStudents = useMemo(
    () => filterStudents(students, searchQuery),
    [searchQuery]
  );

  // Handle webring navigation redirects
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromSite = params.get('from');
    const direction = params.get('dir');

    if (fromSite && direction && (direction === 'prev' || direction === 'next')) {
      const allSites = students
        .map((s) => s.website)
        .filter((url): url is string => url !== undefined);

      if (allSites.length > 0) {
        const navigation = calculateWebRingNavigation(allSites, fromSite);
        const targetSite = direction === 'prev' ? navigation.prev : navigation.next;

        if (targetSite) {
          // Show redirecting page first
          setRedirectState({
            targetSite,
            direction: direction as 'prev' | 'next',
          });

          // Redirect after a brief delay to show the redirecting page
          const redirectTimer = setTimeout(() => {
            window.location.href = targetSite;
          }, 1000); // 1000ms delay to show the redirecting page

          return () => clearTimeout(redirectTimer);
        }
      }
    }
  }, []);

  const handleNodeClick = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  const handleToggleNetwork = () => {
    setShowNetwork(!showNetwork);
  };

  // Show redirecting page if we're redirecting
  if (redirectState) {
    return <RedirectingPage targetSite={redirectState.targetSite} direction={redirectState.direction} />;
  }

  return (
    <div className="app-shell min-h-screen w-full flex flex-col sm:flex-row">
      <div className="bg-gradient-soft" aria-hidden="true" />

      <Sidebar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        students={students}
      />

      <MobileHeader showNetwork={showNetwork} onToggleNetwork={handleToggleNetwork} />

      <main className="flex-1 sm:ml-[500px] overflow-y-auto relative z-10">
        <div className="p-4 sm:p-6 pt-24 sm:pt-6">
          <AboutSection
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <div className="hidden sm:block mb-8">
            <div className="h-[400px] panel-soft">
              <NetworkDiagram students={filteredStudents} onNodeClick={handleNodeClick} />
            </div>
          </div>

          <div className="panel-soft p-1 sm:p-2">
            <StudentList students={filteredStudents} onProfileClick={handleNodeClick} />
          </div>

          {/* Mobile Information Sections and Widget */}
          <div className="sm:hidden mt-8 pb-4">
            <div className="panel-soft p-4 text-sm text-white/60 mb-6">
              <div className="flex flex-col gap-3 mb-6">
                <WebringExpandable />
                <JoinExpandable />
              </div>
              <div className="flex justify-center">
                <WebRingWidget
                  sites={students.map((s) => s.website).filter((url): url is string => url !== undefined)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <NetworkOverlay
        isOpen={showNetwork}
        onClose={() => setShowNetwork(false)}
        students={filteredStudents}
        onNodeClick={handleNodeClick}
      />

      <StudentModal student={selectedStudent} onClose={handleCloseModal} />
    </div>
  );
}
