import React, { useState } from 'react';
import { 
  Rocket, 
  Rotate3d, 
  Map, 
  Clock, 
  Archive, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenDreamweaverGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenDreamweaverGuide }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const newState = spaceAudio.toggleSound();
    setIsPlayingAudio(newState);
  };

  const navLinks = [
    { label: 'The Moon', id: 'explore-moon' },
    { label: 'Mars', id: 'explore-mars' },
    { label: '3D Lab', id: 'interactive-3d-lab' },
    { label: 'Mission Map', id: 'mission-map' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Archive', id: 'archive' },
    { label: 'Science & Ethics', id: 'preservation' },
    { label: 'Quiz', id: 'space-quiz', highlight: true },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    spaceAudio.playTelemetryChirp();
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-40 bg-[#060710]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
            <Rocket className="w-4 h-4 text-cyan-300" />
          </div>
          <div className="text-left">
            <span className="font-space font-bold tracking-wider text-sm sm:text-base text-white block group-hover:text-blue-300 transition-colors">
              BEYOND THE MISSION
            </span>
            <span className="text-[10px] font-code text-slate-400 block -mt-1 tracking-widest uppercase">
              The Things We Left Behind
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs font-space font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                link.highlight
                  ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/40 hover:bg-blue-600 hover:text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Action Icons (Dreamweaver guide, Sound toggle & Mobile menu) */}
        <div className="flex items-center gap-2">
          {/* Dreamweaver Guide Trigger */}
          {onOpenDreamweaverGuide && (
            <button
              onClick={onOpenDreamweaverGuide}
              title="How to Open in Adobe Dreamweaver"
              className="px-2.5 py-1.5 rounded-xl text-xs font-space flex items-center gap-1.5 transition-all bg-slate-900/90 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-950/60 hover:text-white"
            >
              <span className="w-4 h-4 rounded bg-cyan-600/30 text-[10px] font-bold flex items-center justify-center font-code">Dw</span>
              <span className="hidden sm:inline">Dreamweaver</span>
            </button>
          )}

          {/* Ambient Cosmic Sound Toggle */}
          <button
            onClick={toggleSound}
            title={isPlayingAudio ? "Mute Cosmic Ambiance" : "Enable Cosmic Ambiance"}
            className={`p-2 rounded-xl text-xs font-code flex items-center gap-1.5 transition-all border ${
              isPlayingAudio
                ? 'bg-purple-950 text-purple-300 border-purple-500/50 shadow-sm'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-purple-400" />
                <span className="hidden sm:inline">Audio On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-500" />
                <span className="hidden sm:inline">Audio Off</span>
              </>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#080916] border-b border-slate-800 space-y-2 text-left">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-space ${
                link.highlight
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-slate-200 hover:bg-slate-850'
              }`}
            >
              {link.label}
            </button>
          ))}

          {onOpenDreamweaverGuide && (
            <button
              onClick={() => {
                onOpenDreamweaverGuide();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-space bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 flex items-center gap-2"
            >
              <span className="w-5 h-5 rounded bg-cyan-600/30 text-xs font-bold flex items-center justify-center font-code">Dw</span>
              <span>How to Open in Dreamweaver</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
