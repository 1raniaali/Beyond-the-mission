import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Compass, 
  FlaskConical, 
  BookOpen, 
  Award,
  Globe2
} from 'lucide-react';

export const PreservationEthics: React.FC = () => {
  return (
    <section id="preservation" className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-code uppercase tracking-wider bg-purple-950/70 text-purple-300 border border-purple-800/80 mb-3">
          <BookOpen className="w-3.5 h-3.5 text-purple-400" />
          Space Archaeology & Science Principles
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-space text-white tracking-tight uppercase">
          WHY WE LEAVE THINGS BEHIND
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
          The objects resting on the Moon and Mars were not discarded out of negligence. 
          They are the deliberate outcome of celestial mechanics, scientific prioritisation, and the boundaries of human engineering.
        </p>
      </div>

      {/* 4 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        
        {/* Pillar 1: Rocket Equation */}
        <div className="p-6 rounded-2xl bg-[#090b17] border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800 flex items-center justify-center text-blue-400">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-space text-white">
            1. The Tyranny of the Rocket Equation
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every kilogram brought into space requires dozens of kilograms of rocket fuel at launch. 
            On Apollo missions, the Lunar Module was split in two: the Descent Stage stayed behind to serve as the launchpad for the lightweight Ascent Stage. 
            Astronauts jettisoned cameras, boots, and backpacks because <strong>every pound left on the Moon allowed one pound of irreplaceable lunar rock samples to return to Earth</strong>.
          </p>
        </div>

        {/* Pillar 2: Space Archaeology */}
        <div className="p-6 rounded-2xl bg-[#090b17] border border-slate-800 hover:border-purple-500/40 transition-all shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-800 flex items-center justify-center text-purple-400">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-space text-white">
            2. The Emergence of Space Archaeology
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Historians and archaeologists now recognize Tranquility Base, Hadley Rille, and Jezero Crater as profound historical heritage sites. 
            Under the <strong>NASA Lunar Heritage Guidelines</strong> and Section 9 of the <strong>Artemis Accords</strong>, spacefaring nations have committed to establishing buffer preservation zones so future robotic landers do not sandblast Neil Armstrong’s bootprints or the Apollo 15 rover with rocket exhaust.
          </p>
        </div>

        {/* Pillar 3: Accidental Long-Duration Science */}
        <div className="p-6 rounded-2xl bg-[#090b17] border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400">
            <FlaskConical className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-space text-white">
            3. 50-Year Unintentional Material Science
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            By leaving aluminum, optical quartz prisms, Teflon seals, and fiberglass on the surface for over half a century, NASA inadvertently created the longest material science experiment in history. 
            The Laser Ranging Retroreflectors have absorbed billions of laser pulses through 500-degree thermal swings, providing critical empirical data for building future permanent lunar bases.
          </p>
        </div>

        {/* Pillar 4: Planetary Protection Protocols */}
        <div className="p-6 rounded-2xl bg-[#090b17] border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold font-space text-white">
            4. Planetary Protection & Forward Contamination
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Under international COSPAR rules, every spacecraft sent to Mars must be meticulously baked in dry-heat ovens and assembled in ISO-class cleanrooms to destroy Earth spores. 
            When hardware like Perseverance or InSight reaches the end of its life, it remains parked in strict planetary protection zones to prevent introducing terrestrial microbes into potential subsurface Martian aquifers.
          </p>
        </div>

      </div>
    </section>
  );
};
