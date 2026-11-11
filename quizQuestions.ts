export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: 'Moon' | 'Mars' | 'Engineering' | 'Ethics';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  relatedObjectId?: string;
  relatedObjectName?: string;
  funFact: string;
}

export interface QuizRank {
  minScore: number;
  title: string;
  badge: string;
  description: string;
  callsign: string;
}

export const QUIZ_RANKS: QuizRank[] = [
  {
    minScore: 90,
    title: 'Chief Planetary Conservator',
    badge: '🏆 Golden Record & Laurels',
    description: 'Supreme mastery of space archaeology, orbital mechanics, and interplanetary preservation treaties.',
    callsign: 'CURATOR-1'
  },
  {
    minScore: 70,
    title: 'Senior Field Archaeologist',
    badge: '🛰️ Deep Space Surveyor',
    description: 'Distinguished knowledge of lunar sites, Martian landings, and historical equipment design.',
    callsign: 'SURVEYOR-7'
  },
  {
    minScore: 50,
    title: 'Orbital Mission Specialist',
    badge: '🔭 Surface Explorer',
    description: 'Solid command of the fundamental artifacts and why they remained on other worlds.',
    callsign: 'PATHFINDER'
  },
  {
    minScore: 0,
    title: 'Cadet Stargazer',
    badge: '🚀 Launch Trainee',
    description: 'A great beginning! Review the museum dossiers and timeline to uncover the full history.',
    callsign: 'NOVICE-ALPHA'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1-lrv-mass',
    question: 'Why were the Apollo Lunar Roving Vehicles (LRVs) left permanently on the Moon instead of returning to Earth?',
    options: [
      'The rovers suffered catastrophic battery explosions before departure',
      'Mass and fuel constraints: every pound of the Lunar Module Ascent Stage required critical rocket propellant',
      'NASA intended Soviet cosmonauts to refuel and salvage the rovers',
      'The lunar vacuum welded their titanium axels to the regolith'
    ],
    correctIndex: 1,
    explanation: 'The Tsiolkovsky rocket equation imposed merciless weight limits. The Apollo Lunar Module Ascent Stage had just enough hypergolic fuel to lift the astronauts, life support, and lunar samples into orbit to dock with the Command Module. Leaving the 210 kg (462 lb) LRVs behind was an intentional engineering requirement.',
    category: 'Moon',
    difficulty: 'Beginner',
    relatedObjectId: 'lrv-apollo-15',
    relatedObjectName: 'Apollo 15 Lunar Roving Vehicle',
    funFact: 'The rovers were parked roughly 300 feet away from the lander so their TV cameras could be operated remotely from Houston to film the dramatic lunar liftoff!'
  },
  {
    id: 'q2-laser-retroreflector',
    question: 'Which Apollo equipment left on the Moon is still actively functioning and in scientific use today?',
    options: [
      'Apollo 12 RTG nuclear power generator',
      'Lunar Laser Ranging Retroreflector Arrays (LRRR)',
      'Solar Wind Composition aluminum foil collectors',
      'The Apollo 11 Hasselblad camera bodies'
    ],
    correctIndex: 1,
    explanation: 'The corner-cube prism retroreflectors deployed by Apollo 11, 14, and 15 (and Soviet Lunokhods) require zero electrical power. Observatories in New Mexico and France still fire laser pulses at them today, proving the Moon is drifting away from Earth at 3.8 cm per year.',
    category: 'Moon',
    difficulty: 'Beginner',
    relatedObjectId: 'apollo-retroreflector',
    relatedObjectName: 'Apollo 11 & 14 Laser Retroreflectors',
    funFact: 'Retroreflectors test Einstein\'s theory of General Relativity by checking whether the gravitational acceleration of the Earth and Moon towards the Sun is identical.'
  },
  {
    id: 'q3-sojourner-mars',
    question: 'What was the name of humanity\'s very first wheeled rover to drive on Mars in July 1997?',
    options: [
      'Opportunity',
      'Curiosity',
      'Sojourner (Mars Pathfinder)',
      'Spirit'
    ],
    correctIndex: 2,
    explanation: 'Sojourner, weighing just 10.6 kg (23 lbs) and roughly the size of a microwave oven, landed aboard the Mars Pathfinder lander on July 4, 1997. It proved that mobile planetary exploration was feasible, paving the way for Spirit, Opportunity, Curiosity, and Perseverance.',
    category: 'Mars',
    difficulty: 'Beginner',
    relatedObjectId: 'sojourner-rover',
    relatedObjectName: 'Sojourner Rover (Mars Pathfinder)',
    funFact: 'Sojourner was named after abolitionist and women\'s rights activist Sojourner Truth through a worldwide student essay competition won by 12-year-old Valerie Ambroise.'
  },
  {
    id: 'q4-lrv-wheels',
    question: 'What unique engineering material was used for the wheels of the Apollo Lunar Roving Vehicle?',
    options: [
      'Pressurized vulcanized rubber tires filled with pure nitrogen',
      'Woven zinc-coated steel wire mesh with titanium chevron treads',
      'Solid carved blocks of aerospace-grade Teflon',
      'Inflatable Kevlar airbags with studded studs'
    ],
    correctIndex: 1,
    explanation: 'Conventional rubber tires would either burst in the vacuum of space or shatter due to lunar temperature extremes ranging from -173°C (-280°F) to +127°C (+260°F). Engineers at Delco/General Motors crafted compliant tires out of woven zinc-coated steel piano wire with titanium chevrons for traction.',
    category: 'Engineering',
    difficulty: 'Intermediate',
    relatedObjectId: 'lrv-apollo-15',
    relatedObjectName: 'Apollo 15 Lunar Roving Vehicle',
    funFact: 'Inside the woven wire mesh was a secondary 20-ply titanium bump frame to prevent the wheel from bottoming out if it struck sharp lunar rocks!'
  },
  {
    id: 'q5-ingenuity-flights',
    question: 'The Ingenuity Mars Helicopter was originally designed for 5 technology demo flights. How many flights did it ultimately achieve before retirement in 2024?',
    options: [
      '12 flights',
      '34 flights',
      '72 flights',
      '105 flights'
    ],
    correctIndex: 2,
    explanation: 'Ingenuity exceeded all expectations by flying 72 times across nearly 3 Earth years, accumulating over 128 minutes of flight time and covering 17.0 km (10.5 miles) in the razor-thin Martian atmosphere (less than 1% of Earth\'s density) before rotor blade damage on Flight 72 ended its flying career.',
    category: 'Mars',
    difficulty: 'Intermediate',
    relatedObjectId: 'ingenuity-helicopter',
    relatedObjectName: 'Ingenuity Mars Helicopter',
    funFact: 'Ingenuity carried a small swatch of unbleached muslin fabric from the left wing of the Wright Brothers\' 1903 Wright Flyer beneath its solar panel, honoring the history of aviation.'
  },
  {
    id: 'q6-apollo11-plaque',
    question: 'What famous phrase is inscribed on the stainless steel plaque attached to the Apollo 11 Descent Stage left at Tranquility Base?',
    options: [
      '"One small step for man, one giant leap for mankind"',
      '"Here men from the planet Earth first set foot upon the Moon. We came in peace for all mankind."',
      '"Dedicated to the exploration of the cosmos by the United States of America"',
      '"Ad Astra Per Aspera — Through hardship to the stars"'
    ],
    correctIndex: 1,
    explanation: 'The plaque, fixed to the ladder of the Lunar Module "Eagle" descent stage, displays drawings of Earth\'s Eastern and Western hemispheres, the lunar landing date of July 1969, and signatures of Neil A. Armstrong, Michael Collins, Edwin E. Aldrin, Jr., and President Richard Nixon.',
    category: 'Moon',
    difficulty: 'Beginner',
    relatedObjectId: 'apollo-11-descent-stage',
    relatedObjectName: 'Apollo 11 Lunar Module Descent Stage "Eagle"',
    funFact: 'Because it was mounted to the descent stage landing gear, the plaque remains permanently standing at Tranquility Base on the lunar surface.'
  },
  {
    id: 'q7-outer-space-treaty',
    question: 'Under international space law (1967 Outer Space Treaty, Article VIII), who maintains ownership of Apollo hardware left on the Moon?',
    options: [
      'It automatically became international public domain property upon astronaut departure',
      'The United States retains permanent ownership and jurisdiction over all its launched hardware',
      'The United Nations Committee on the Peaceful Uses of Outer Space (COPUOS)',
      'Any future lunar commercial prospector that physically retrieves it'
    ],
    correctIndex: 1,
    explanation: 'Article VIII of the 1967 Outer Space Treaty clearly states that ownership of objects launched into outer space, and of their component parts, is NOT affected by their presence in outer space or on a celestial body. NASA and the US government retain full legal ownership.',
    category: 'Ethics',
    difficulty: 'Intermediate',
    relatedObjectId: 'apollo-11-descent-stage',
    relatedObjectName: 'Space Heritage & Preservation Laws',
    funFact: 'The US enacted the "One Small Step to Protect Human Heritage in Space Act" in 2020, requiring NASA contractor partners to adhere to keep-out zones around Apollo landing sites.'
  },
  {
    id: 'q8-galileo-experiment',
    question: 'During Apollo 15, astronaut David Scott demonstrated a famous physics experiment in the lunar vacuum. What two objects did he drop simultaneously?',
    options: [
      'A titanium screw and a gold medal',
      'A 1.32 kg geological hammer and a 0.03 kg falcon feather',
      'A golf ball and a moon rock',
      'A lead compass and an astronaut glove'
    ],
    correctIndex: 1,
    explanation: 'Because the Moon has no atmosphere to cause aerodynamic drag, Galileo Galilei\'s hypothesis that all objects in a vacuum accelerate at the same rate regardless of mass was proven true when Scott dropped a heavy aluminum hammer and a peregrine falcon feather; both hit the dust at the exact same instant.',
    category: 'Engineering',
    difficulty: 'Intermediate',
    relatedObjectId: 'lrv-apollo-15',
    relatedObjectName: 'Apollo 15 Hadley Rille Site',
    funFact: 'David Scott chose a falcon feather in tribute to the Apollo 15 Lunar Module named "Falcon" and the US Air Force Academy whose mascot is the falcon!'
  },
  {
    id: 'q9-mars-debris',
    question: 'What happens to the discarded supersonic parachutes, backshells, and heat shields during Mars rover landings?',
    options: [
      'They incinerate completely into ash during atmospheric entry',
      'They impact the Martian surface kilometers away from the rover and remain preserved in the cold, dry desert',
      'They are collected and recycled into solar arrays by subsequent rover missions',
      'Martian dust storms disintegrate all plastics within 48 hours'
    ],
    correctIndex: 1,
    explanation: 'Mars\' atmosphere is too thin to burn up heat shields completely, but thick enough to slow them down. Discarded descent stages, supersonic parachutes, and backshells crash onto the plains kilometers away and remain largely intact for decades in the arid, freeze-dried Martian conditions.',
    category: 'Mars',
    difficulty: 'Intermediate',
    relatedObjectId: 'sojourner-rover',
    relatedObjectName: 'Martian Entry, Descent & Landing Relics',
    funFact: 'In 2022, the Ingenuity helicopter flew over and took aerial color photographs of Perseverance\'s shattered backshell and supersonic parachute, aiding engineers designing Mars Sample Return!'
  },
  {
    id: 'q10-apollo14-golf',
    question: 'What sporting equipment was used on the Moon during Apollo 14 and left behind on the Fra Mauro highlands?',
    options: [
      'A baseball and wooden bat',
      'Two golf balls struck with a makeshift 6-iron club',
      'A frisbee thrown into the Fra Mauro crater',
      'A soccer ball kicked across the regolith'
    ],
    correctIndex: 1,
    explanation: 'Astronaut Alan Shepard attached an authentic Wilson 6-iron club head to the handle of a lunar excavation tool and hit two golf balls. In the Moon\'s 1/6th gravity, he famously reported that the second ball flew "miles and miles and miles" (estimated around 200–400 yards).',
    category: 'Moon',
    difficulty: 'Beginner',
    relatedObjectId: 'apollo-retroreflector',
    relatedObjectName: 'Apollo 14 Fra Mauro Site',
    funFact: 'Modern digital image reconstruction by imaging specialist Andy Saunders in 2021 located both golf balls: ball one traveled 24 yards, and ball two flew 40 yards!'
  }
];
