import React, { useState } from 'react';
import { CelestialBody, LandingSite, SpaceObject } from '../types';
import { LUNAR_LANDING_SITES, MARS_LANDING_SITES } from '../data/landingSites';
import { SPACE_OBJECTS } from '../data/spaceObjects';
import { 
  Globe, 
  MapPin, 
  Compass, 
  Info, 
  Rotate3d, 
  Sparkles, 
  Crosshair, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface MissionMapProps {
  onSelectObject: (obj: SpaceObject) => void;
}

export const MissionMap: React.FC<MissionMapProps> = ({ onSelectObject }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<CelestialBody>('Moon');
  const [selectedSite, setSelectedSite] = useState<LandingSite | null>(LUNAR_LANDING_SITES[0]);
  const [statusFilter, setStatusFilter] = useState<'all' | 'operational' | 'inactive'>('all');

  const sites = selectedPlanet === 'Moon' ? LUNAR_LANDING_SITES : MARS_LANDING_SITES;

  const filteredSites = sites.filter((site) => {
    if (statusFilter === 'all') return true;
    return site.status === statusFilter;
  });

  // Convert lat/lng to percentage coordinates on projection
  // Lat: -90 to +90 -> maps to 10% to 90% Y
  // Lng: -180 to +180 -> maps to 5% to 95% X
  const projectCoordinates = (lat: number, lng: number) => {
    // Mercator-like normalized mapping bounded
    const x = ((lng + 180) / 360) * 88 + 6;
    const y = ((90 - lat) / 180) * 78 + 11;
    return { left: `${x}%`, top: `${y}%` };
  };

  const handlePlanetChange = (planet: CelestialBody) => {
    setSelectedPlanet(planet);
    const newSites = planet === 'Moon' ? LUNAR_LANDING_SITES : MARS_LANDING_SITES;
    setSelectedSite(newSites[0]);
    spaceAudio.playTelemetryChirp();
  };

  const handleSiteClick = (site: LandingSite) => {
    setSelectedSite(site);
    spaceAudio.playBeep(1100);
  };

  // Find corresponding space object if available
  const matchedObject = selectedSite
    ? SPACE_OBJECTS.find(o => 
        o.celestialBody === selectedPlanet && 
        (o.mission.includes(selectedSite.mission) || selectedSite.name.toLowerCase().includes(o.name.toLowerCase().slice(0, 8)))
      ) || SPACE_OBJECTS.find(o => o.celestialBody === selectedPlanet)
    : null;

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-code uppercase tracking-wider bg-purple-950/70 text-purple-300 border border-purple-800/80 mb-3">
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          Interactive Planetary Telemetry Map
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-space text-white tracking-tight">
          FOOTPRINTS ACROSS TWO WORLDS
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Explore the exact coordinates of human-made machines resting on the lunar regolith and Martian sands.
          Select either planet to track historical landing zones and resting artifacts.
        </p>
      </div>

      {/* Planet Toggle & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Planet Switcher Buttons */}
        <div className="flex items-center p-1.5 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
          <button
            onClick={() => handlePlanetChange('Moon')}
            className={`px-5 py-2.5 rounded-lg text-sm font-space font-medium transition-all flex items-center gap-2 ${
              selectedPlanet === 'Moon'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-slate-300" />
            The Moon (6 Sites)
          </button>
          <button
            onClick={() => handlePlanetChange('Mars')}
            className={`px-5 py-2.5 rounded-lg text-sm font-space font-medium transition-all flex items-center gap-2 ${
              selectedPlanet === 'Mars'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="w-3 h-3 rounded-full bg-orange-500" />
            Mars (7 Sites)
          </button>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 text-xs font-code">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400">Status:</span>
          {(['all', 'operational', 'inactive'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`px-3 py-1 rounded-md transition-colors ${
                statusFilter === filter
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800'
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Map Interactive Canvas & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Map Display (2 Cols) */}
        <div className="lg:col-span-2 relative rounded-2xl bg-[#070914] border border-slate-800 overflow-hidden shadow-2xl p-6 min-h-[460px] flex flex-col justify-between">
          
          {/* Surface texture background stylized representation */}
          <div 
            className={`absolute inset-0 transition-opacity duration-700 pointer-events-none opacity-40 ${
              selectedPlanet === 'Moon' ? 'lunar-radial-glow' : 'mars-radial-glow'
            }`}
          />

          {/* Coordinate Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Parallels (Latitude lines) */}
            <div className="absolute top-[25%] left-0 right-0 border-b border-slate-800/60" />
            <div className="absolute top-[50%] left-0 right-0 border-b border-slate-700/60 flex justify-between px-3 text-[10px] font-code text-slate-500">
              <span>EQUATOR 0°</span>
              <span>EQUATOR 0°</span>
            </div>
            <div className="absolute top-[75%] left-0 right-0 border-b border-slate-800/60" />

            {/* Meridians (Longitude lines) */}
            <div className="absolute left-[25%] top-0 bottom-0 border-r border-slate-800/60" />
            <div className="absolute left-[50%] top-0 bottom-0 border-r border-slate-700/60 flex flex-col justify-between py-2 text-[10px] font-code text-slate-500 items-center">
              <span>PRIME MERIDIAN 0°</span>
              <span>PRIME MERIDIAN 0°</span>
            </div>
            <div className="absolute left-[75%] top-0 bottom-0 border-r border-slate-800/60" />
          </div>

          {/* Top Map HUD readout */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Crosshair className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-code uppercase text-cyan-300 tracking-wider">
                {selectedPlanet} Cylindrical Surface Projection
              </span>
            </div>
            <div className="text-xs font-code text-slate-400">
              {filteredSites.length} Verified Landing Zones
            </div>
          </div>

          {/* Planet Surface Craters / Basin Visual Markings */}
          <div className="relative w-full h-[340px] my-4 select-none">
            {selectedPlanet === 'Moon' ? (
              // Stylized Lunar Maria Basins
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[35%] left-[54%] w-32 h-24 rounded-full bg-slate-800/30 blur-md border border-slate-700/20" />
                <span className="absolute top-[40%] left-[56%] text-[10px] font-code text-slate-500">Mare Tranquillitatis</span>
                <div className="absolute top-[25%] left-[45%] w-36 h-28 rounded-full bg-slate-800/30 blur-md border border-slate-700/20" />
                <span className="absolute top-[22%] left-[44%] text-[10px] font-code text-slate-500">Mare Imbrium</span>
                <div className="absolute top-[45%] left-[20%] w-48 h-36 rounded-full bg-slate-800/30 blur-md border border-slate-700/20" />
                <span className="absolute top-[52%] left-[25%] text-[10px] font-code text-slate-500">Oceanus Procellarum</span>
              </div>
            ) : (
              // Stylized Mars Regions
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[36%] left-[65%] w-36 h-28 rounded-full bg-amber-950/30 blur-md border border-amber-800/20" />
                <span className="absolute top-[38%] left-[67%] text-[10px] font-code text-amber-500/70">Jezero / Isidis Planitia</span>
                <div className="absolute top-[52%] left-[82%] w-32 h-24 rounded-full bg-amber-950/30 blur-md border border-amber-800/20" />
                <span className="absolute top-[55%] left-[83%] text-[10px] font-code text-amber-500/70">Gale Crater</span>
                <div className="absolute top-[50%] left-[44%] w-40 h-28 rounded-full bg-amber-950/30 blur-md border border-amber-800/20" />
                <span className="absolute top-[52%] left-[46%] text-[10px] font-code text-amber-500/70">Meridiani Planum</span>
                <div className="absolute top-[35%] left-[36%] w-36 h-28 rounded-full bg-amber-950/30 blur-md border border-amber-800/20" />
                <span className="absolute top-[30%] left-[37%] text-[10px] font-code text-amber-500/70">Ares Vallis</span>
              </div>
            )}

            {/* Render Landing Site Markers */}
            {filteredSites.map((site) => {
              const pos = projectCoordinates(site.lat, site.lng);
              const isSelected = selectedSite?.id === site.id;

              return (
                <div
                  key={site.id}
                  style={{ left: pos.left, top: pos.top }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                  onClick={() => handleSiteClick(site)}
                >
                  {/* Pin Circle */}
                  <div className={`relative flex items-center justify-center transition-all ${
                    isSelected ? 'scale-125' : 'hover:scale-110'
                  }`}>
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full border border-cyan-400/60 animate-ping opacity-75" />
                    )}
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-lg border transition-colors ${
                      isSelected
                        ? 'bg-cyan-500 border-white text-slate-950'
                        : site.status === 'operational'
                        ? 'bg-emerald-600 border-emerald-300 text-white'
                        : 'bg-indigo-900 border-indigo-400 text-indigo-200'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Marker Tooltip on Hover */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-slate-950/95 border border-slate-700 text-white text-[11px] whitespace-nowrap shadow-xl pointer-events-none transition-all ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <span className="font-bold font-space">{site.mission}</span>
                    <span className="text-slate-400 ml-1.5 font-code">({site.year})</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Coordinates Telemetry Bar */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-code text-slate-400 border-t border-slate-800/80 pt-3">
            <span>Projection: Equirectangular WGS84-Extrapolated</span>
            <span>Target: {selectedSite ? selectedSite.name : 'Select a landing point'}</span>
          </div>
        </div>

        {/* Site Details Inspector Card (1 Col) */}
        <div className="p-6 rounded-2xl bg-[#090b17] border border-slate-800 shadow-2xl flex flex-col justify-between text-left">
          {selectedSite ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 text-xs font-code rounded bg-blue-950 text-blue-300 border border-blue-800">
                  {selectedSite.mission} • {selectedSite.year}
                </span>
                <span className={`px-2 py-0.5 text-[11px] font-code rounded border ${
                  selectedSite.status === 'operational'
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}>
                  {selectedSite.status.toUpperCase()}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-space text-white">
                  {selectedSite.name}
                </h3>
                <div className="flex items-center gap-2 text-xs font-code text-cyan-400 mt-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{selectedSite.latFormatted}, {selectedSite.lngFormatted}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <span className="block font-semibold text-slate-200 mb-1 font-space">Mission Summary:</span>
                {selectedSite.description}
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-900/30 text-xs text-slate-300">
                <span className="block font-semibold text-purple-300 mb-1 font-space">Primary Artifacts Remaining:</span>
                <span className="text-white font-medium">{selectedSite.primaryObject}</span>
              </div>

              {matchedObject && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onSelectObject(matchedObject);
                      spaceAudio.playTelemetryChirp();
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-space font-medium transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    {matchedObject.has3DModel ? (
                      <>
                        <Rotate3d className="w-4 h-4 text-cyan-300" />
                        <span>Inspect Artifact in 3D</span>
                      </>
                    ) : (
                      <>
                        <Info className="w-4 h-4" />
                        <span>Read Full Scientific Story</span>
                      </>
                    )}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16 text-slate-400 text-sm">
              Select any landing pin on the map to view mission details.
            </div>
          )}

          <div className="text-[11px] font-code text-slate-500 border-t border-slate-800/80 pt-3 mt-4">
            Source: NASA Planetary Data System (PDS) & USGS Astrogeology Science Center
          </div>
        </div>

      </div>
    </div>
  );
};
