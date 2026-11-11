import React, { useEffect, useRef } from 'react';
import { 
  Rocket, 
  Rotate3d, 
  Globe, 
  Compass, 
  ArrowDown, 
  Sparkles, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { spaceAudio } from '../utils/audio';
import { SpaceObject } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onLaunchFeatured3D: (modelKey: 'lrv' | 'sojourner' | 'ingenuity') => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onLaunchFeatured3D }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle Stars
    const starCount = 200;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.05 + 0.02,
      deltaAlpha: (Math.random() - 0.5) * 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render cosmic background stars
      stars.forEach((star) => {
        star.alpha += star.deltaAlpha;
        if (star.alpha <= 0.1 || star.alpha >= 0.95) {
          star.deltaAlpha = -star.deltaAlpha;
        }

        ctx.fillStyle = `rgba(226, 232, 240, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Slow parallax drift
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-[95vh] flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden bg-[#05060f]">
      {/* Dynamic Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* Deep Space Nebulae & Planetary Glow Radiants */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Space Apps Challenge Tag */}
      <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-code text-slate-300 shadow-xl backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-500">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-300 font-semibold">NASA Space Apps Challenge</span>
        <span className="text-slate-500">•</span>
        <span>Digital Planetary Museum</span>
      </div>

      {/* Main Cinematic Headings */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto py-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-space tracking-tight text-white uppercase drop-shadow-2xl">
          BEYOND THE MISSION
        </h1>

        <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-cinzel tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 font-semibold">
          The things we left behind.
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-sans font-light">
          Humanity has travelled beyond Earth in search of knowledge, discovery and exploration. 
          But not everything that made the journey came back. Across the Moon and Mars, traces of our missions remain. 
          Every object has a story. It&apos;s time to discover them.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              onExploreClick();
              spaceAudio.playTelemetryChirp();
            }}
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-space font-semibold text-sm sm:text-base transition-all shadow-xl hover:shadow-blue-500/30 flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore The Artifacts</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <a
            href="#interactive-3d-lab"
            onClick={() => spaceAudio.playBeep(920)}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-slate-700/80 font-space font-medium text-sm sm:text-base transition-all flex items-center gap-2 shadow-lg"
          >
            <Rotate3d className="w-4 h-4 text-cyan-400" />
            <span>Interactive 3D Lab</span>
          </a>
        </div>

        {/* Quick Launch Hotspots for Prioritized 3D Models */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-xs font-code text-slate-400">
          <span className="text-slate-500 mr-1">Prioritized 3D Models:</span>
          <button
            onClick={() => onLaunchFeatured3D('lrv')}
            className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-blue-950 text-blue-300 border border-slate-800 hover:border-blue-700 transition-colors flex items-center gap-1.5"
          >
            <Rotate3d className="w-3.5 h-3.5" />
            Apollo Lunar Rover
          </button>
          <button
            onClick={() => onLaunchFeatured3D('sojourner')}
            className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-amber-950 text-amber-300 border border-slate-800 hover:border-amber-700 transition-colors flex items-center gap-1.5"
          >
            <Rotate3d className="w-3.5 h-3.5" />
            Sojourner Rover
          </button>
          <button
            onClick={() => onLaunchFeatured3D('ingenuity')}
            className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-purple-950 text-purple-300 border border-slate-800 hover:border-purple-700 transition-colors flex items-center gap-1.5"
          >
            <Rotate3d className="w-3.5 h-3.5" />
            Ingenuity Helicopter
          </button>
        </div>
      </div>

      {/* Visual Introduction to The Moon & Mars (Bottom Cards) */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-left">
        {/* The Moon Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0c1024]/90 to-[#070914]/90 border border-blue-900/40 hover:border-blue-500/40 transition-all shadow-xl group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-code text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-200" />
              Celestial Body: The Moon
            </span>
            <span className="text-xs font-code text-slate-500">Distance: 384,400 km</span>
          </div>
          <h3 className="text-lg font-bold font-space text-white group-hover:text-blue-300 transition-colors">
            Preserved in Airless Silence
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Over 200 tons of human material rest on the Moon. With no atmosphere, rain, or wind, every rover wheel track, descent stage, and discarded Hasselblad camera remains untouched as an extraterrestrial time capsule.
          </p>
        </div>

        {/* Mars Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1b0e12]/90 to-[#0c080d]/90 border border-amber-900/40 hover:border-amber-500/40 transition-all shadow-xl group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-code text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Celestial Body: Mars
            </span>
            <span className="text-xs font-code text-slate-500">Distance: ~225 Million km</span>
          </div>
          <h3 className="text-lg font-bold font-space text-white group-hover:text-amber-300 transition-colors">
            Sculpted by Alien Winds
          </h3>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            From the pioneering Sojourner microrover to the nuclear-powered Curiosity and Perseverance labs, robotic explorers brave severe global dust storms and freezing subzero nights to decode the history of water and life.
          </p>
        </div>
      </div>
    </div>
  );
};
