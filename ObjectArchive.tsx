import React, { useState, useMemo } from 'react';
import { SpaceObject, CelestialBody, ObjectStatus, ObjectCategory } from '../types';
import { 
  Search, 
  Filter, 
  Rotate3d, 
  MapPin, 
  Calendar, 
  ArrowUpDown, 
  LayoutGrid, 
  List, 
  ExternalLink,
  Archive,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface ObjectArchiveProps {
  objects: SpaceObject[];
  onSelectObject: (obj: SpaceObject) => void;
}

export const ObjectArchive: React.FC<ObjectArchiveProps> = ({ objects, onSelectObject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bodyFilter, setBodyFilter] = useState<'all' | CelestialBody>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | ObjectStatus>('all');
  const [categoryFilter, setCategoryFilter] = useState<'all' | ObjectCategory>('all');
  const [sortBy, setSortBy] = useState<'year_asc' | 'year_desc' | 'name' | 'mass'>('year_asc');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Filtered and Sorted Objects
  const processedObjects = useMemo(() => {
    return objects
      .filter((obj) => {
        // Search term matches name, designation, mission, or description
        if (searchTerm.trim() !== '') {
          const q = searchTerm.toLowerCase();
          const matchText = `${obj.name} ${obj.designation} ${obj.mission} ${obj.originalPurpose} ${obj.currentLocation}`.toLowerCase();
          if (!matchText.includes(q)) return false;
        }

        // Body filter
        if (bodyFilter !== 'all' && obj.celestialBody !== bodyFilter) return false;

        // Status filter
        if (statusFilter !== 'all' && obj.status !== statusFilter) return false;

        // Category filter
        if (categoryFilter !== 'all' && obj.category !== categoryFilter) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'year_asc') return a.arrivalYear - b.arrivalYear;
        if (sortBy === 'year_desc') return b.arrivalYear - a.arrivalYear;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'mass') return Number(b.massKg || 0) - Number(a.massKg || 0);
        return 0;
      });
  }, [objects, searchTerm, bodyFilter, statusFilter, categoryFilter, sortBy]);

  const getStatusBadge = (status: ObjectStatus) => {
    switch (status) {
      case 'operational':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-code bg-emerald-950 text-emerald-300 border border-emerald-700/50">
            Active
          </span>
        );
      case 'inactive':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-code bg-amber-950 text-amber-300 border border-amber-700/50">
            Inactive
          </span>
        );
      case 'discarded_hardware':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-code bg-slate-900 text-slate-300 border border-slate-700">
            Discarded
          </span>
        );
    }
  };

  return (
    <section id="archive" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-code uppercase tracking-wider bg-slate-900 text-cyan-300 border border-cyan-700/60 mb-3">
          <Archive className="w-3.5 h-3.5 text-cyan-400" />
          The Extraterrestrial Artifact Repository
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-space text-white tracking-tight">
          THE COMPLETE OBJECT ARCHIVE
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2">
          Search and cross-reference all human artifacts left behind on the Moon and Mars. Filter by mission, object class, operational status, or mass.
        </p>
      </div>

      {/* Search & Filter Bar Controls */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#090b18] border border-slate-800 shadow-xl space-y-4 mb-8">
        {/* Top Search Input & View Toggles */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by object name, mission (e.g. Apollo 15, Perseverance), instruments..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-code text-slate-300 w-full sm:w-auto">
              <ArrowUpDown className="w-3.5 h-3.5 text-blue-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-transparent focus:outline-none cursor-pointer text-white"
              >
                <option value="year_asc" className="bg-slate-900">Year: Oldest First</option>
                <option value="year_desc" className="bg-slate-900">Year: Newest First</option>
                <option value="name" className="bg-slate-900">Name (A-Z)</option>
                <option value="mass" className="bg-slate-900">Mass (Heaviest First)</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'table' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Table view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs font-code">
          {/* Celestial Body */}
          <div className="flex items-center gap-1 mr-3">
            <span className="text-slate-500">World:</span>
            {(['all', 'Moon', 'Mars'] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBodyFilter(b)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  bodyFilter === b
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {b === 'all' ? 'All' : b}
              </button>
            ))}
          </div>

          {/* Operational Status */}
          <div className="flex items-center gap-1 mr-3">
            <span className="text-slate-500">Status:</span>
            {(['all', 'operational', 'inactive', 'discarded_hardware'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  statusFilter === s
                    ? 'bg-purple-600 text-white font-medium'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {s === 'all' ? 'All' : s.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* Object Category */}
          <div className="flex items-center gap-1">
            <span className="text-slate-500">Type:</span>
            {(['all', 'rover', 'lander_descent', 'scientific_instrument', 'aerial_vehicle'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-2.5 py-1 rounded-lg transition-colors ${
                  categoryFilter === c
                    ? 'bg-cyan-600 text-white font-medium'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c === 'all' ? 'All' : c.replace('_', ' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count Readout */}
      <div className="flex items-center justify-between text-xs font-code text-slate-400 mb-4 px-1">
        <span>Showing {processedObjects.length} of {objects.length} archived artifacts</span>
        {(searchTerm || bodyFilter !== 'all' || statusFilter !== 'all' || categoryFilter !== 'all') && (
          <button
            onClick={() => {
              setSearchTerm('');
              setBodyFilter('all');
              setStatusFilter('all');
              setCategoryFilter('all');
            }}
            className="text-blue-400 hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processedObjects.map((obj) => (
            <div
              key={obj.id}
              onClick={() => {
                onSelectObject(obj);
                spaceAudio.playTelemetryChirp();
              }}
              className="p-5 rounded-2xl bg-[#090b17] border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between text-left cursor-pointer group shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-code font-semibold uppercase ${
                    obj.celestialBody === 'Moon' ? 'text-blue-300 bg-blue-950 border border-blue-800' : 'text-amber-300 bg-amber-950 border border-amber-800'
                  }`}>
                    {obj.celestialBody}
                  </span>
                  {getStatusBadge(obj.status)}
                </div>

                <h4 className="text-lg font-bold font-space text-white group-hover:text-blue-300 transition-colors line-clamp-1">
                  {obj.name}
                </h4>
                <div className="text-xs font-code text-slate-400 mt-0.5 mb-3">
                  {obj.mission} • {obj.arrivalYear}
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {obj.originalPurpose}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-code text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  {obj.coordinates.craterOrRegion}
                </span>

                {obj.has3DModel ? (
                  <span className="text-cyan-400 flex items-center gap-1 font-medium">
                    <Rotate3d className="w-3.5 h-3.5" />
                    3D View
                  </span>
                ) : (
                  <span className="text-blue-400 flex items-center gap-1 font-medium group-hover:translate-x-0.5 transition-transform">
                    View <ChevronRight className="w-3 h-3" />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="rounded-2xl border border-slate-800 bg-[#090b17] overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs font-code">
            <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="py-3.5 px-4">Artifact Name</th>
                <th className="py-3.5 px-4">World</th>
                <th className="py-3.5 px-4">Mission</th>
                <th className="py-3.5 px-4">Year</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Mass</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {processedObjects.map((obj) => (
                <tr
                  key={obj.id}
                  onClick={() => {
                    onSelectObject(obj);
                    spaceAudio.playTelemetryChirp();
                  }}
                  className="hover:bg-slate-900/60 transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 px-4 font-space font-bold text-white group-hover:text-blue-300">
                    {obj.name}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] ${
                      obj.celestialBody === 'Moon' ? 'text-blue-300 bg-blue-950' : 'text-amber-300 bg-amber-950'
                    }`}>
                      {obj.celestialBody}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">{obj.mission}</td>
                  <td className="py-3.5 px-4 text-slate-300">{obj.arrivalYear}</td>
                  <td className="py-3.5 px-4">{getStatusBadge(obj.status)}</td>
                  <td className="py-3.5 px-4 text-slate-400 max-w-xs truncate">{obj.currentLocation}</td>
                  <td className="py-3.5 px-4 text-slate-400">{obj.massKg} kg</td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="px-3 py-1 rounded bg-blue-600/20 text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Inspect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {processedObjects.length === 0 && (
        <div className="text-center py-20 text-slate-400 text-sm">
          No artifacts found matching &quot;{searchTerm}&quot;. Try adjusting your search query or filters.
        </div>
      )}
    </section>
  );
};
