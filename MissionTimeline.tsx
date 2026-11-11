import React, { useState } from 'react';
import { MISSION_TIMELINE } from '../data/missionsTimeline';
import { SPACE_OBJECTS } from '../data/spaceObjects';
import { SpaceObject, CelestialBody } from '../types';
import { 
  Milestone, 
  Clock, 
  MapPin, 
  Rocket, 
  User, 
  ChevronRight, 
  Rotate3d, 
  Sparkles,
  Layers
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface MissionTimelineProps {
  onSelectObject: (obj: SpaceObject) => void;
}

export const MissionTimeline: React.FC<MissionTimelineProps> = ({ onSelectObject }) => {
  const [filter, setFilter] = useState<'All' | CelestialBody>('All');
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(MISSION_TIMELINE[0].id);

  const filteredMilestones = MISSION_TIMELINE.filter((m) => {
    if (filter === 'All') return true;
    return m.celestialBody === filter;
  });

  const selectedMilestone = MISSION_TIMELINE.find(m => m.id === selectedMilestoneId) || MISSION_TIMELINE[0];

  // Match corresponding object in database
  const matchingObject = SPACE_OBJECTS.find(o => 
    o.mission.toLowerCase().includes(selectedMilestone.mission.toLowerCase().slice(0, 7)) ||
    selectedMilestone.brief.toLowerCase().includes(o.name.toLowerCase().slice(0, 8))
  ) || SPACE_OBJECTS[0];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-code uppercase tracking-wider bg-blue-950/70 text-blue-300 border border-blue-800/80 mb-3">
          <Clock className="w-3.5 h-3.5 text-blue-400" />
          Chronological Exploration Journey
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-space text-white tracking-tight">
          THE MISSION TIMELINE: 1969 TO TODAY
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          From the first bootprints at Tranquility Base to autonomous flights across Martian river deltas.
          Follow the milestones of NASA robotic and crewed exploration.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
          {(['All', 'Moon', 'Mars'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setFilter(tab);
                spaceAudio.playBeep(880);
              }}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-space font-medium transition-all ${
                filter === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'All' ? 'All Expeditions' : tab === 'Moon' ? 'Lunar Missions' : 'Martian Missions'}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Horizontal / Vertical Interactive Milestones Track (5 Cols) */}
        <div className="lg:col-span-5 space-y-3 max-h-[620px] overflow-y-auto pr-2">
          {filteredMilestones.map((m) => {
            const isSelected = selectedMilestone.id === m.id;
            return (
              <div
                key={m.id}
                onClick={() => {
                  setSelectedMilestoneId(m.id);
                  spaceAudio.playBeep(1020);
                }}
                className={`p-4 rounded-xl cursor-pointer transition-all border text-left ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500/80 shadow-lg scale-[1.01]'
                    : 'bg-[#090b17] border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-code font-bold text-blue-400">
                    {m.year} • {m.date}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-code uppercase tracking-wider ${
                    m.celestialBody === 'Moon'
                      ? 'bg-blue-950 text-blue-300 border border-blue-800'
                      : 'bg-amber-950 text-amber-300 border border-amber-800'
                  }`}>
                    {m.celestialBody}
                  </span>
                </div>
                <h4 className="text-base font-bold font-space text-white mb-1">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {m.brief}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Milestone Deep-Dive Showcase (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#090b18] border border-slate-800 p-6 shadow-2xl flex flex-col justify-between text-left">
          <div className="space-y-5">
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-code text-cyan-400 block mb-0.5">
                  MISSION ARCHIVE // {selectedMilestone.date.toUpperCase()}
                </span>
                <h3 className="text-2xl font-bold font-space text-white">
                  {selectedMilestone.title}
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-code text-slate-300">
                {selectedMilestone.mission}
              </div>
            </div>

            {/* Photo / Visual Banner */}
            <div className="relative rounded-xl overflow-hidden aspect-video max-h-56 border border-slate-800">
              <img
                src={selectedMilestone.imageUrl}
                alt={selectedMilestone.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200 font-code">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  {selectedMilestone.coordinates}
                </span>
                {selectedMilestone.crewOrPrincipal && (
                  <span className="flex items-center gap-1.5 hidden sm:flex">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    {selectedMilestone.crewOrPrincipal}
                  </span>
                )}
              </div>
            </div>

            {/* Narrative Summary */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1 font-code">
                Mission Execution & Historical Impact
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedMilestone.historicalAchievement}
              </p>
            </div>

            {/* Key Artifacts Left Behind Box */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/30">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 block mb-2 font-code flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Artifacts Permanently Left on the Surface
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedMilestone.keyArtifactsLeft.map((art, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span>{art}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button to Open Associated Artifact */}
          <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between">
            <span className="text-xs font-code text-slate-400">
              Correlated Artifact: <strong className="text-white">{matchingObject.name}</strong>
            </span>
            <button
              onClick={() => {
                onSelectObject(matchingObject);
                spaceAudio.playTelemetryChirp();
              }}
              className="py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-space font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-500/25"
            >
              {matchingObject.has3DModel ? (
                <>
                  <Rotate3d className="w-4 h-4 text-cyan-300" />
                  <span>Launch 3D Explorer</span>
                </>
              ) : (
                <>
                  <span>Open Full Artifact Dossier</span>
                </>
              )}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
