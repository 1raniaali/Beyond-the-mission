import React, { useState } from 'react';
import { ModelKey, SpaceObject } from '../types';
import { SPACE_OBJECTS } from '../data/spaceObjects';
import { ThreeViewer } from './Viewer3D/ThreeViewer';
import { 
  Rotate3d, 
  Sparkles, 
  Shield, 
  Info, 
  ExternalLink,
  ChevronRight,
  Sliders,
  Compass
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface Interactive3DLabProps {
  onOpenObjectDossier: (obj: SpaceObject) => void;
  activeModelKeyOverride?: ModelKey | null;
}

export const Interactive3DLab: React.FC<Interactive3DLabProps> = ({ 
  onOpenObjectDossier,
  activeModelKeyOverride
}) => {
  const [activeKey, setActiveKey] = useState<ModelKey>(activeModelKeyOverride || 'lrv');

  // React to prop updates if user triggered from Hero
  React.useEffect(() => {
    if (activeModelKeyOverride) {
      setActiveKey(activeModelKeyOverride);
    }
  }, [activeModelKeyOverride]);

  // Model catalog with metadata
  const modelsCatalog: Array<{
    key: ModelKey;
    name: string;
    mission: string;
    world: 'Moon' | 'Mars';
    priorityBadge: string;
    shortDesc: string;
    associatedObjectId: string;
  }> = [
    {
      key: 'lrv',
      name: 'Apollo Lunar Roving Vehicle',
      mission: 'Apollo 15, 16, 17',
      world: 'Moon',
      priorityBadge: 'Priority #1 Model',
      shortDesc: 'Foldable aluminum chassis with wire-mesh tires and high-gain antenna for live lunar liftoff television broadcast.',
      associatedObjectId: 'lrv-apollo-15',
    },
    {
      key: 'sojourner',
      name: 'Sojourner Mars Rover',
      mission: 'Mars Pathfinder (1997)',
      world: 'Mars',
      priorityBadge: 'Priority #2 Model',
      shortDesc: 'The pioneering 6-wheel Rocker-Bogie microrover with GaAs solar panel and rear Alpha Particle X-Ray Spectrometer.',
      associatedObjectId: 'sojourner-rover',
    },
    {
      key: 'ingenuity',
      name: 'Ingenuity Mars Helicopter',
      mission: 'Mars 2020 / Perseverance',
      world: 'Mars',
      priorityBadge: 'Priority #3 Model',
      shortDesc: 'Coaxial counter-rotating carbon fiber blades spinning at 2,400 RPM in the razor-thin Martian atmosphere.',
      associatedObjectId: 'ingenuity-helicopter',
    },
    {
      key: 'lunar_module',
      name: 'Apollo 11 LM Descent Stage',
      mission: 'Apollo 11 Eagle (1969)',
      world: 'Moon',
      priorityBadge: 'Featured Artifact',
      shortDesc: 'Octagonal Kapton-gold foil stage with throttleable rocket engine bell, landing pads, and the historic peace plaque.',
      associatedObjectId: 'apollo-11-descent-stage',
    },
    {
      key: 'retroreflector',
      name: 'Laser Retroreflector (LRRR)',
      mission: 'Apollo 11, 14, 15',
      world: 'Moon',
      priorityBadge: 'Still Operational',
      shortDesc: 'Passive fused-silica corner cube array continuously measured with Earth lasers to millimeter precision for 55+ years.',
      associatedObjectId: 'lrrr-apollo-11',
    },
  ];

  const currentModelMeta = modelsCatalog.find(m => m.key === activeKey) || modelsCatalog[0];
  const currentObject = SPACE_OBJECTS.find(o => o.id === currentModelMeta.associatedObjectId) || SPACE_OBJECTS[0];

  return (
    <section id="interactive-3d-lab" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-code uppercase tracking-wider bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 mb-3">
          <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
          Three.js Interactive CAD & Telemetry Lab
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-space text-white tracking-tight uppercase">
          EXPLORE IN 360° 3D
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Real interactive 3D models engineered to accurate NASA physical dimensions and materials.
          Rotate in every direction, zoom in/out, switch camera angles, and inspect critical structural components.
        </p>
      </div>

      {/* Model Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {modelsCatalog.map((item) => {
          const isSelected = activeKey === item.key;
          return (
            <button
              key={item.key}
              onClick={() => {
                setActiveKey(item.key);
                spaceAudio.playTelemetryChirp();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-space transition-all border flex items-center gap-2 ${
                isSelected
                  ? 'bg-blue-600 border-blue-400 text-white font-semibold shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-[#090b17] border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              <Rotate3d className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-cyan-400'}`} />
              <span>{item.name}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-code hidden sm:inline ${
                isSelected ? 'bg-blue-800 text-blue-100' : 'bg-slate-900 text-slate-400'
              }`}>
                {item.world}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3D Lab Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* 3D Canvas Viewport (8 Cols) */}
        <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#060710] min-h-[520px] flex flex-col">
          <ThreeViewer
            modelKey={activeKey}
            objectName={currentModelMeta.name}
            missionName={currentModelMeta.mission}
            hotspots={currentObject.hotspots}
            className="w-full flex-1 min-h-[520px]"
          />
        </div>

        {/* Specifications & Structural Features Panel (4 Cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-[#090b18] border border-slate-800 p-6 shadow-2xl flex flex-col justify-between text-left">
          <div className="space-y-4">
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 text-xs font-code rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                {currentModelMeta.priorityBadge}
              </span>
              <span className="text-xs font-code text-slate-400">
                {currentModelMeta.world.toUpperCase()}
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-space text-white">
                {currentModelMeta.name}
              </h3>
              <p className="text-xs text-slate-400 font-code mt-0.5">
                Mission: {currentModelMeta.mission}
              </p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {currentModelMeta.shortDesc}
            </p>

            {/* Quick Specs List */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2 font-code">
              <div className="flex justify-between text-slate-400">
                <span>Total Mass:</span>
                <span className="text-white">{currentObject.massKg} kg</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Arrival Date:</span>
                <span className="text-white">{currentObject.arrivalYear}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Current Status:</span>
                <span className="text-amber-300 capitalize">{currentObject.status.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Landing Region:</span>
                <span className="text-cyan-300 truncate max-w-[150px]">{currentObject.coordinates.craterOrRegion}</span>
              </div>
            </div>

            {/* Structural Highlights */}
            {currentObject.structuralHighlights && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-space block">
                  Structural Highlights:
                </span>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {currentObject.structuralHighlights.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs">
                      <div className="font-semibold text-cyan-300 font-space text-[11px] mb-0.5">{feat.feature}</div>
                      <div className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">{feat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action to View Full Story */}
          <div className="pt-5 border-t border-slate-800 mt-5">
            <button
              onClick={() => {
                onOpenObjectDossier(currentObject);
                spaceAudio.playTelemetryChirp();
              }}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-space font-medium text-xs transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Open Complete Mission Dossier</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
