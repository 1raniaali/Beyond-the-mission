import React from 'react';
import { 
  Rocket, 
  ExternalLink, 
  ShieldCheck, 
  Globe, 
  Code2, 
  Cpu, 
  Sparkles 
} from 'lucide-react';

interface FooterProps {
  onOpenDreamweaverGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDreamweaverGuide }) => {
  return (
    <footer className="w-full bg-[#05060d] border-t border-slate-900 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: About the Project */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-cyan-300">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="font-space font-bold text-white text-lg tracking-wider">
                BEYOND THE MISSION
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              A curated digital museum and scientific archive built for the <strong>NASA Space Apps Challenge</strong>. 
              Dedicated to celebrating, documenting, and advocating for the preservation of humanity&apos;s pioneering artifacts left on the Moon and Mars.
            </p>
            <div className="text-xs font-code text-slate-500">
              Project Concept: <span className="text-slate-300">The Things We Left Behind</span>
            </div>
          </div>

          {/* Col 2: Official NASA Primary Sources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-space">
              Official NASA Sources
            </h4>
            <ul className="space-y-2 text-xs font-code">
              <li>
                <a 
                  href="https://science.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>NASA Science Directorate</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>NASA Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://nasa3d.arc.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>NASA 3D Resources</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://pds.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>Planetary Data System (PDS)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://history.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>NASA History Division</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Technology & Frameworks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-space">
              Technology & Acknowledgement
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>React 19 & TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Three.js 3D WebGL Rendering</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Tailwind CSS & Web Audio Synthesis</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero External Audio / 404 Guard</span>
              </li>
              {onOpenDreamweaverGuide && (
                <li className="pt-2">
                  <button
                    onClick={onOpenDreamweaverGuide}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors text-xs font-code underline underline-offset-4"
                  >
                    <span>Open in Adobe Dreamweaver Guide</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-slate-500">
          <div>
            Beyond the Mission — The Things We Left Behind • NASA Space Apps Challenge Showcase
          </div>
          <div className="flex items-center gap-4">
            {onOpenDreamweaverGuide && (
              <button 
                onClick={onOpenDreamweaverGuide}
                className="hover:text-cyan-400 transition-colors"
              >
                Dreamweaver Guide
              </button>
            )}
            <span>All imagery and telemetry data courtesy NASA / JPL-Caltech</span>
            <span>Public Domain Space Heritage</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
