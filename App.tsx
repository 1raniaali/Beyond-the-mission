import React, { useState } from 'react';
import { SPACE_OBJECTS } from './data/spaceObjects';
import { SpaceObject, ModelKey } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlanetSection } from './components/PlanetSection';
import { Interactive3DLab } from './components/Interactive3DLab';
import { MissionMap } from './components/MissionMap';
import { MissionTimeline } from './components/MissionTimeline';
import { ObjectArchive } from './components/ObjectArchive';
import { PreservationEthics } from './components/PreservationEthics';
import { SpaceQuiz } from './components/SpaceQuiz';
import { DreamweaverGuideModal } from './components/DreamweaverGuideModal';
import { Footer } from './components/Footer';
import { ObjectModal } from './components/ObjectModal';

export default function App() {
  const [selectedObject, setSelectedObject] = useState<SpaceObject | null>(null);
  const [modelKeyOverride, setModelKeyOverride] = useState<ModelKey | null>(null);
  const [isDreamweaverModalOpen, setIsDreamweaverModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLaunchFeatured3D = (modelKey: 'lrv' | 'sojourner' | 'ingenuity') => {
    setModelKeyOverride(modelKey);
    const element = document.getElementById('interactive-3d-lab');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05060d] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar 
        onNavigate={scrollToSection} 
        onOpenDreamweaverGuide={() => setIsDreamweaverModalOpen(true)}
      />

      <main className="flex-1 w-full">
        {/* 1. Cinematic Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('explore-moon')}
          onLaunchFeatured3D={handleLaunchFeatured3D}
        />

        {/* 2. Explore the Moon Section */}
        <PlanetSection
          celestialBody="Moon"
          objects={SPACE_OBJECTS}
          onSelectObject={(obj) => setSelectedObject(obj)}
        />

        {/* 3. Explore Mars Section */}
        <PlanetSection
          celestialBody="Mars"
          objects={SPACE_OBJECTS}
          onSelectObject={(obj) => setSelectedObject(obj)}
        />

        {/* 4. Interactive 3D Models Lab */}
        <Interactive3DLab
          onOpenObjectDossier={(obj) => setSelectedObject(obj)}
          activeModelKeyOverride={modelKeyOverride}
        />

        {/* 5. Interactive Mission Telemetry Map (Moon & Mars) */}
        <div id="mission-map">
          <MissionMap
            onSelectObject={(obj) => setSelectedObject(obj)}
          />
        </div>

        {/* 6. Chronological Exploration Timeline */}
        <div id="timeline">
          <MissionTimeline
            onSelectObject={(obj) => setSelectedObject(obj)}
          />
        </div>

        {/* 7. Searchable & Filterable Object Archive */}
        <ObjectArchive
          objects={SPACE_OBJECTS}
          onSelectObject={(obj) => setSelectedObject(obj)}
        />

        {/* 8. Interactive Space Archaeology Quiz */}
        <SpaceQuiz
          onSelectObject={(obj) => setSelectedObject(obj)}
          onOpenDreamweaverGuide={() => setIsDreamweaverModalOpen(true)}
        />

        {/* 9. Space Archaeology & Ethics */}
        <PreservationEthics />
      </main>

      {/* Footer & NASA Credits */}
      <Footer onOpenDreamweaverGuide={() => setIsDreamweaverModalOpen(true)} />

      {/* Interactive Detail & 3D Dossier Modal */}
      {selectedObject && (
        <ObjectModal
          object={selectedObject}
          onClose={() => setSelectedObject(null)}
        />
      )}

      {/* Adobe Dreamweaver Guide Modal */}
      <DreamweaverGuideModal
        isOpen={isDreamweaverModalOpen}
        onClose={() => setIsDreamweaverModalOpen(false)}
      />
    </div>
  );
}
