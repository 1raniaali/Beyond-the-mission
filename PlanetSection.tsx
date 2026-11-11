import React, { useState } from 'react';
import { SpaceObject, CelestialBody, ObjectStatus, ObjectCategory } from '../types';
import { 
  Rocket, 
  MapPin, 
  Rotate3d, 
  Eye, 
  Calendar, 
  Activity, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Filter,
  Layers
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface PlanetSectionProps {
  celestialBody: CelestialBody;
  objects: SpaceObject[];
  onSelectObject: (obj: SpaceObject) => void;
}

export const PlanetSection: React.FC<PlanetSectionProps> = ({
  celestialBody,
  objects,
  onSelectObject,
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | ObjectStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | ObjectCategory>('all');

  const planetObjects = objects.filter(o => o.celestialBody === celestialBody);

  const filteredObjects = planetObjects.filter((obj) => {
    if (statusFilter !== 'all' && obj.status !== statusFilter) return false;
    if (categoryFilter !== 'all' && obj.category !== categoryFilter) return false;
    return true;
  });

  const getStatusBadge = (status: ObjectStatus) => {
    switch (status) {
      case 'operational':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Operational
          </span>
        );
      case 'inactive':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-950/90 text-amber-300 border border-amber-500/50">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Historic / Inactive
          </span>
        );
      case 'discarded_hardware':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900/90 text-slate-300 border border-slate-700">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            Discarded Hardware
          </span>
        );
    }
  };

  const isMoon = celestialBody === 'Moon';

  return (
    <section 
      id={isMoon ? "explore-moon" : "explore-mars"} 
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative ${
        isMoon ? 'bg-[#060814]' : 'bg-[#0b080f]'
      }`}
    >
      {/* Planetary Ambient Glow */}
      <div 
        className={`absolute top-0 inset-x-0 h-96 pointer-events-none opacity-25 ${
          isMoon ? 'lunar-radial-glow' : 'mars-radial-glow'
        }`} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title & Narrative Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl text-left">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-code uppercase tracking-wider mb-3 border ${
              isMoon
                ? 'bg-blue-950/80 text-blue-300 border-blue-800'
                : 'bg-amber-950/80 text-amber-300 border-amber-800'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isMoon ? 'bg-blue-400' : 'bg-orange-500'}`} />
              {isMoon ? 'Lunar Surface Heritage' : 'Martian Surface Heritage'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-space text-white tracking-tight">
              {isMoon ? 'EXPLORE THE MOON' : 'EXPLORE MARS'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              {isMoon
                ? 'On the airless, silent plains of the Moon, humanity\'s earliest exploratory footprints remain frozen in time. From the gold-foiled descent stages that served as launch pads to the laser reflectors still pinged from Earth today, each artifact tells the sacrifice and triumph of Apollo.'
                : 'Across the freezing red deserts and ancient dried lakebeds of Mars, our robotic pioneers rolled into the unknown. Explore the rovers, the historic first aerial helicopter, and the discarded parachutes that bore the brutal "Seven Minutes of Terror".'}
            </p>
          </div>

          {/* Quick Planet Statistics Pill */}
          <div className="flex items-center gap-4 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-xs font-code text-slate-300">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Artifacts Featured</span>
              <span className="text-base font-bold text-white font-space">{planetObjects.length} Objects</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">3D Visualizers</span>
              <span className="text-base font-bold text-cyan-400 font-space">
                {planetObjects.filter(o => o.has3DModel).length} Models
              </span>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-8">
          {/* Status Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-code text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" />
              Status:
            </span>
            {(['all', 'operational', 'inactive', 'discarded_hardware'] as const).map((st) => (
              <button
                key={st}
                onClick={() => {
                  setStatusFilter(st);
                  spaceAudio.playBeep(900);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-code capitalize transition-all ${
                  statusFilter === st
                    ? 'bg-blue-600 text-white font-medium shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {st === 'all' ? 'All Statuses' : st.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-code text-slate-400 flex items-center gap-1 mr-1">
              <Layers className="w-3.5 h-3.5" />
              Category:
            </span>
            {(['all', 'rover', 'lander_descent', 'scientific_instrument', 'aerial_vehicle', 'discarded_equipment'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategoryFilter(cat);
                  spaceAudio.playBeep(940);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-code capitalize transition-all ${
                  categoryFilter === cat
                    ? 'bg-purple-600 text-white font-medium shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Types' : cat.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Artifacts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredObjects.map((obj) => (
            <div
              key={obj.id}
              onClick={() => {
                onSelectObject(obj);
                spaceAudio.playTelemetryChirp();
              }}
              className="group relative rounded-2xl bg-[#090b17] border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between text-left cursor-pointer shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/20"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={obj.imageUrl}
                    alt={obj.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b17] via-transparent to-black/30 pointer-events-none" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {getStatusBadge(obj.status)}

                    {obj.has3DModel && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-code font-medium bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 flex items-center gap-1 shadow-lg">
                        <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
                        3D Model
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 text-xs font-code text-slate-300 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Rocket className="w-3.5 h-3.5 text-blue-400" />
                      {obj.mission}
                    </span>
                    <span>{obj.arrivalYear}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-xl font-bold font-space text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                    {obj.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                    {obj.subtitle}
                  </p>

                  <div className="mt-4 space-y-2.5 text-xs">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 line-clamp-1">{obj.currentLocation}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                      <span className="text-[11px] font-semibold uppercase text-slate-400 block mb-0.5 font-code">
                        Why It Remains:
                      </span>
                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {obj.whyLeftBehind}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-4 px-5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs font-space font-medium text-blue-400 group-hover:text-blue-300">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  Explore Object Dossier
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {filteredObjects.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No objects match the selected filter criteria.
          </div>
        )}
      </div>
    </section>
  );
};
