import React, { useState } from 'react';
import { SpaceObject, Hotspot } from '../types';
import { ThreeViewer } from './Viewer3D/ThreeViewer';
import { 
  X, 
  MapPin, 
  Calendar, 
  Rocket, 
  Activity, 
  Scale, 
  ExternalLink, 
  ShieldCheck, 
  Rotate3d, 
  Image as ImageIcon,
  Share2,
  Check
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';

interface ObjectModalProps {
  object: SpaceObject | null;
  onClose: () => void;
}

export const ObjectModal: React.FC<ObjectModalProps> = ({ object, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | '3d' | 'photo'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  if (!object) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    spaceAudio.playTelemetryChirp();
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getStatusBadge = (status: SpaceObject['status']) => {
    switch (status) {
      case 'operational':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Active / Operational
          </span>
        );
      case 'inactive':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950 text-amber-300 border border-amber-500/40">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Inactive / Historic Monument
          </span>
        );
      case 'discarded_hardware':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            Discarded Descent / Landing Hardware
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#090b16] border border-slate-700/80 shadow-2xl text-left z-10 flex flex-col my-auto">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#090b16]/95 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-code rounded bg-purple-950/80 text-purple-300 border border-purple-800">
              {object.celestialBody.toUpperCase()} ARTIFACT
            </span>
            <span className="text-xs font-code text-slate-400">
              ID: {object.designation}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="Copy share link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Hero Header */}
        <div className="px-6 pt-6 pb-2">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            {getStatusBadge(object.status)}
            <span className="text-xs font-code text-blue-400 flex items-center gap-1">
              <Rocket className="w-3.5 h-3.5" />
              {object.mission} ({object.arrivalYear})
            </span>
            <span className="text-xs font-code text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              {object.coordinates.craterOrRegion}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-space text-white">
            {object.name}
          </h2>
          <p className="text-sm text-slate-300 mt-1">
            {object.subtitle}
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 mt-5 border-b border-slate-800">
            <button
              onClick={() => {
                setActiveTab('overview');
                spaceAudio.playBeep(900);
              }}
              className={`pb-3 px-3 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-400 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Mission Dossier
            </button>

            {object.has3DModel && object.modelKey && (
              <button
                onClick={() => {
                  setActiveTab('3d');
                  spaceAudio.playTelemetryChirp();
                }}
                className={`pb-3 px-3 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5 ${
                  activeTab === '3d'
                    ? 'border-cyan-400 text-cyan-300 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Rotate3d className="w-4 h-4 text-cyan-400" />
                Interactive 3D Model
              </button>
            )}

            <button
              onClick={() => {
                setActiveTab('photo');
                spaceAudio.playBeep(950);
              }}
              className={`pb-3 px-3 text-sm font-medium transition-all border-b-2 flex items-center gap-1.5 ${
                activeTab === 'photo'
                  ? 'border-purple-500 text-purple-300 font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-purple-400" />
              NASA Photography
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 pt-4 flex-1">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Top Banner Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 font-code flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    Timeline & Lifespan
                  </span>
                  <div className="text-sm font-medium text-white">
                    Launched: {object.launchYear} • Arrived: {object.arrivalYear}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Duration: {typeof object.missionDurationDays === 'number' ? `${object.missionDurationDays} Earth Days` : object.missionDurationDays || 'Stationary'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 font-code flex items-center gap-1.5 mb-1">
                    <Scale className="w-3.5 h-3.5 text-purple-400" />
                    Physical Dimensions
                  </span>
                  <div className="text-sm font-medium text-white">
                    Mass: {object.massKg} kg ({Math.round(Number(object.massKg) * 2.20462 || 0)} lbs)
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Size: {object.dimensions || 'Modular Subsystem'}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400 font-code flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    Surface Coordinates
                  </span>
                  <div className="text-sm font-medium text-white font-code">
                    {object.coordinates.latFormatted}, {object.coordinates.lngFormatted}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Site: {object.currentLocation}
                  </div>
                </div>
              </div>

              {/* Core Story Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                    <h4 className="text-sm font-bold font-space uppercase tracking-wider text-blue-300 flex items-center gap-2 mb-2">
                      <Rocket className="w-4 h-4 text-blue-400" />
                      1. Original Purpose & Mission
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {object.originalPurpose}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-red-950/20 border border-red-900/30">
                    <h4 className="text-sm font-bold font-space uppercase tracking-wider text-red-300 flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-red-400" />
                      2. Why Was It Left Behind?
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {object.whyLeftBehind}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                    <h4 className="text-sm font-bold font-space uppercase tracking-wider text-amber-300 flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      3. Historical Significance
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {object.historicalSignificance}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-900/30">
                    <h4 className="text-sm font-bold font-space uppercase tracking-wider text-purple-300 flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-purple-400" />
                      4. Scientific Impact
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {object.scientificImpact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Structural Highlights */}
              {object.structuralHighlights && object.structuralHighlights.length > 0 && (
                <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800">
                  <h4 className="text-sm font-bold font-space uppercase tracking-wider text-cyan-300 mb-3">
                    Key Structural & Engineering Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {object.structuralHighlights.map((feat, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60">
                        <div className="font-semibold text-white text-xs mb-1 font-space">{feat.feature}</div>
                        <div className="text-xs text-slate-300 leading-relaxed">{feat.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* NASA Source References */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  <span className="font-bold text-slate-300 block mb-0.5 font-code">Official NASA Data & Primary Research:</span>
                  Verified through NASA Science, JPL, and Smithsonian National Air and Space Museum records.
                </div>
                <div className="flex flex-wrap gap-2">
                  {object.sources.map((src, idx) => (
                    <a
                      key={idx}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-code bg-slate-900 hover:bg-slate-800 text-blue-300 border border-slate-700 transition-colors"
                    >
                      <span>{src.org}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE 3D MODEL */}
          {activeTab === '3d' && object.has3DModel && object.modelKey && (
            <div className="h-[520px] w-full">
              <ThreeViewer
                modelKey={object.modelKey}
                objectName={object.name}
                missionName={object.mission}
                hotspots={object.hotspots}
                onSelectHotspot={(hs) => setSelectedHotspot(hs)}
                selectedHotspotId={selectedHotspot?.id}
              />
            </div>
          )}

          {/* TAB 3: NASA PHOTOGRAPHY */}
          {activeTab === 'photo' && (
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black aspect-video max-h-[500px] flex items-center justify-center">
                <img
                  src={object.imageUrl}
                  alt={object.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs md:text-sm text-slate-200 font-mono bg-black/60 px-3 py-2 rounded-lg backdrop-blur-sm border border-slate-800">
                    {object.imageCaption}
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-400 flex items-center justify-between px-1">
                <span>Credit: NASA / JPL-Caltech / Public Domain Archives</span>
                <span>Verified Coordinates: {object.coordinates.latFormatted}, {object.coordinates.lngFormatted}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#080914] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>NASA Space Apps Challenge Project — Beyond the Mission</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
