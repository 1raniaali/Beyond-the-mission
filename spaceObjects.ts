import { SpaceObject } from '../types';

export const SPACE_OBJECTS: SpaceObject[] = [
  // =================== MOON OBJECTS ===================
  {
    id: 'lrv-apollo-15',
    name: 'Apollo Lunar Roving Vehicle (LRV-001)',
    subtitle: 'The First Manned Vehicle Driven on Another World',
    designation: 'NASA LRV-001 / Apollo 15 LRV',
    celestialBody: 'Moon',
    mission: 'Apollo 15',
    launchYear: 1971,
    arrivalYear: 1971,
    missionDurationDays: 3,
    originalPurpose: 'To vastly expand astronaut exploration radius across the rugged Apennine mountains and Hadley Rille, carrying scientific drills, communications gear, and hundreds of pounds of lunar rock samples.',
    whyLeftBehind: 'The LRV had a total mass of 210 kg (462 lbs) on Earth. Because every single pound of the Apollo Lunar Module Ascent Stage required immense rocket fuel to lift off from the lunar surface and rendezvous with the Command Module in orbit, the rover was parked 300 feet away to film liftoff with its remote TV camera and left permanently behind.',
    currentLocation: 'Hadley-Apennine, Mare Imbrium (Station 9/10 parking site)',
    coordinates: {
      lat: 26.1322,
      lng: 3.6339,
      latFormatted: '26°07\'56" N',
      lngFormatted: '3°38\'02" E',
      craterOrRegion: 'Hadley-Apennine / Mare Imbrium'
    },
    status: 'inactive',
    category: 'rover',
    massKg: 210,
    dimensions: '3.1 m long × 2.3 m wide × 1.1 m high',
    historicalSignificance: 'Driven by astronauts David Scott and James Irwin for 27.9 km (17.3 miles), this vehicle transformed lunar exploration from short foot traverses into wide-scale scientific field geology. Its color TV camera transmitted the first live lunar liftoff to Earth.',
    scientificImpact: 'Allowed collection of the famous "Genesis Rock" (anorthosite sample 15415, dating back 4.5 billion years to the Moon\'s primordial crust), proving the magma ocean hypothesis.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Apollo 15 Lunar Roving Vehicle parked near Hadley Rille with Mount Hadley in the background. (NASA photo AS15-88-11901)',
    has3DModel: true,
    modelKey: 'lrv',
    structuralHighlights: [
      {
        feature: 'Woven Zinc-Coated Steel Wire Mesh Tires',
        description: 'Tires were made of woven wire mesh with chevron-shaped titanium cleats for traction on abrasive lunar dust, filled with an inner titanium bump frame instead of air.'
      },
      {
        feature: 'High-Gain Dish Antenna & Color TV Camera',
        description: 'Manually pointed towards Earth by astronauts; the RCA color camera could be remotely controlled by flight controllers in Houston, capturing the first live lunar ascent.'
      },
      {
        feature: 'Foldable Aluminum Chassis & T-Handle Controller',
        description: 'Fitted into a tight triangular bay on the Lunar Module descent stage. Driven with a simple joystick T-handle operable with thick pressurized spacesuit gloves.'
      },
      {
        feature: 'Independent DC Traction Motors',
        description: 'Each wheel possessed an individual 0.25-horsepower Delco electric motor with harmonic 80:1 drive gears, powered by dual 36-volt silver-zinc batteries.'
      }
    ],
    hotspots: [
      {
        id: 'hs-lrv-antenna',
        name: 'High-Gain Parabolic Antenna',
        description: 'Beamed video, telemetry, and voice directly back to NASA Deep Space Network antennas on Earth.',
        position: [0.3, 1.2, 0.6]
      },
      {
        id: 'hs-lrv-wheels',
        name: 'Wire-Mesh Resilient Wheel',
        description: 'Could not pop because it had no rubber tubes. Provided compliant suspension in 1/6th gravity.',
        position: [0.9, -0.2, 0.8]
      },
      {
        id: 'hs-lrv-joystick',
        name: 'T-Handle Hand Controller',
        description: 'Allowed four-wheel drive and dual-axle steering with a single hand from either astronaut seat.',
        position: [0.0, 0.4, 0.0]
      },
      {
        id: 'hs-lrv-camera',
        name: 'Remote Controlled Ground TV Camera',
        description: 'Allowed mission control scientist Edward Fendell in Houston to pan and zoom on geological sites.',
        position: [0.5, 0.8, 0.8]
      }
    ],
    sources: [
      {
        title: 'NASA Lunar Roving Vehicle Documentation & SP-4214',
        url: 'https://history.nasa.gov/SP-4214/ch8-4.html',
        org: 'NASA History Division'
      },
      {
        title: 'NSSDC Master Catalog: Apollo 15 LRV',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
        org: 'NASA Goddard Space Flight Center'
      }
    ]
  },
  {
    id: 'apollo-11-descent-stage',
    name: 'Apollo 11 Lunar Module Descent Stage "Eagle"',
    subtitle: 'The Historic Foundation of Tranquility Base',
    designation: 'LM-5 Descent Stage',
    celestialBody: 'Moon',
    mission: 'Apollo 11',
    launchYear: 1969,
    arrivalYear: 1969,
    missionDurationDays: 1,
    originalPurpose: 'Housed the hypergolic throttleable descent engine, landing gear, propellant tanks, water tanks, landing radar, and the Modular Equipment Stowage Assembly (MESA) containing the television camera that beamed Neil Armstrong\'s first step to Earth.',
    whyLeftBehind: 'Designed specifically to serve as a launch pad for the Apollo Ascent Stage. Once the crew completed surface EVAs, the Ascent Stage fired its separate ascent engine, severing umbilical cables and leaving the descent stage behind forever on the lunar soil.',
    currentLocation: 'Mare Tranquillitatis (Tranquility Base)',
    coordinates: {
      lat: 0.67408,
      lng: 23.47297,
      latFormatted: '0°40\'26.69" N',
      lngFormatted: '23°28\'22.69" E',
      craterOrRegion: 'Mare Tranquillitatis (Sea of Tranquility)'
    },
    status: 'inactive',
    category: 'lander_descent',
    massKg: 2034,
    dimensions: '4.22 m high × 9.4 m wide across landing gear pads',
    historicalSignificance: 'The very first human-made vehicle to touch down on another celestial body with humans inside. Mounted to its forward strut is the famous plaque inscribed: "Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind."',
    scientificImpact: 'Demonstrated controlled powered descent and precision landing on an extraterrestrial surface, paving the way for planetary exploration.',
    imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The Apollo 11 Lunar Module Eagle descent stage standing alone on the lunar surface. (NASA photo AS11-40-5922)',
    has3DModel: true,
    modelKey: 'lunar_module',
    structuralHighlights: [
      {
        feature: 'Octagonal Aluminum Truss with Kapton Foil',
        description: 'Covered with 25 layers of aluminized Mylar and nickel-alloy foil to deflect harsh unfiltered solar radiation and micrometeoroid strikes.'
      },
      {
        feature: 'Deployable Quad Landing Gear with Crushable Honeycomb',
        description: 'Each footpad contained crushable aluminum honeycomb cartridges to absorb the vertical energy of touchdown.'
      },
      {
        feature: 'Lunar Descent Engine (DPS)',
        description: 'A revolutionary throttleable rocket engine designed by TRW using aerozine 50 and nitrogen tetroxide hypergolic propellants.'
      },
      {
        feature: 'Apollo 11 Commemorative Plaque',
        description: 'Bolted to the forward landing strut ladder rungs, signed by Neil Armstrong, Michael Collins, Buzz Aldrin, and President Richard Nixon.'
      }
    ],
    hotspots: [
      {
        id: 'hs-lm-plaque',
        name: 'Historic Apollo 11 Plaque',
        description: 'Stainless steel plaque bearing the eastern and western hemispheres of Earth and the signature of the crew.',
        position: [0.0, 0.4, 1.1]
      },
      {
        id: 'hs-lm-engine',
        name: 'Descent Propulsion Engine Bell',
        description: 'Columbium and titanium gimballed engine bell used to decelerate from orbital velocity to touchdown.',
        position: [0.0, -0.6, 0.0]
      },
      {
        id: 'hs-lm-footpad',
        name: 'Footpad & Lunar Surface Contact Probe',
        description: 'Dish-shaped pad spread the landing load. Probes extended 1.7 meters downward to trigger the contact light on the instrument panel.',
        position: [1.8, -1.0, 1.8]
      }
    ],
    sources: [
      {
        title: 'NASA Apollo 11 Lunar Module Documentation',
        url: 'https://www.nasa.gov/mission_pages/apollo/missions/apollo11.html',
        org: 'NASA'
      },
      {
        title: 'Smithsonian National Air and Space Museum: Lunar Module',
        url: 'https://airandspace.si.edu/collection-objects/lunar-module-2/nasm_A19711598000',
        org: 'Smithsonian NASM'
      }
    ]
  },
  {
    id: 'lrrr-apollo-11',
    name: 'Apollo 11 Laser Ranging Retroreflector (LRRR)',
    subtitle: 'The Only Apollo Experiment Still Continuously Active Today',
    designation: 'Apollo 11 EASEP Retroreflector Array',
    celestialBody: 'Moon',
    mission: 'Apollo 11',
    launchYear: 1969,
    arrivalYear: 1969,
    missionDurationDays: 'Ongoing (55+ Years)',
    originalPurpose: 'To reflect high-intensity laser pulses fired from Earth-based observatories back to their exact origin, enabling millimeter-precision measurement of the Earth-Moon distance.',
    whyLeftBehind: 'An entirely passive optical array requiring zero electrical power, batteries, or moving parts. Designed to sit permanently on the lunar regolith and withstand billions of laser pulses and 500°F temperature swings.',
    currentLocation: 'Mare Tranquillitatis, ~14 meters south of the Eagle LM',
    coordinates: {
      lat: 0.67337,
      lng: 23.47306,
      latFormatted: '0°40\'24.13" N',
      lngFormatted: '23°28\'23.02" E',
      craterOrRegion: 'Tranquility Base'
    },
    status: 'operational',
    category: 'scientific_instrument',
    massKg: 29.5,
    dimensions: '0.46 m × 0.46 m aluminum pallet',
    historicalSignificance: 'Deployed by Buzz Aldrin on July 21, 1969. It was the first Apollo scientific experiment to return data to Earth and continues functioning over 55 years later without a single degradation of its optical cube corners.',
    scientificImpact: 'Proved that the Moon is spiraling away from Earth at 3.8 cm (1.5 inches) per year due to tidal friction; verified Einstein\'s General Theory of Relativity (equivalence principle) to one part in 10^14.',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The Apollo 11 Laser Ranging Retroreflector deployed on the lunar regolith. (NASA photo AS11-40-5952)',
    has3DModel: true,
    modelKey: 'retroreflector',
    structuralHighlights: [
      {
        feature: '100 Fused-Silica Corner Cube Prisms',
        description: 'Corner cubes with internal 90-degree orthogonal mirrors that reflect incident light precisely back in the 180° reverse direction regardless of angle.'
      },
      {
        feature: 'Teflon-Insulated Invar Cavity Mounts',
        description: 'Maintains alignment and optical geometry despite the brutal swing from -170°C (-274°F) during lunar night to +120°C (+248°F) in lunar day.'
      },
      {
        feature: 'Sun Shadow Compass / Gnomon',
        description: 'Allowed the astronaut to align the array accurately toward Earth using the sun\'s shadow.'
      }
    ],
    hotspots: [
      {
        id: 'hs-lrrr-cubes',
        name: 'Corner-Cube Retroreflectors',
        description: 'Precision-polished Suprasil quartz cubes with high thermal tolerance.',
        position: [0.0, 0.2, 0.0]
      },
      {
        id: 'hs-lrrr-gnomon',
        name: 'Sun Angle Gnomon',
        description: 'Cast a shadow against tick marks so astronauts could aim the panel towards Earth.',
        position: [0.35, 0.3, -0.35]
      }
    ],
    sources: [
      {
        title: 'NASA Science: Apollo Laser Ranging Experiment',
        url: 'https://science.nasa.gov/resource/apollo-laser-ranging-experiment/',
        org: 'NASA Science'
      },
      {
        title: 'McDonald Observatory Lunar Laser Ranging Program',
        url: 'https://mcdonaldobservatory.org/research/programs/lunar-laser-ranging',
        org: 'McDonald Observatory / NASA'
      }
    ]
  },
  {
    id: 'apollo-alsep-instruments',
    name: 'Apollo Lunar Surface Experiments Package (ALSEP)',
    subtitle: 'Nuclear-Powered Geophysics Station Left to Monitor Moonquakes',
    designation: 'ALSEP Arrays (Apollo 12, 14, 15, 16, 17)',
    celestialBody: 'Moon',
    mission: 'Apollo 12–17',
    launchYear: 1969,
    arrivalYear: 1969,
    missionDurationDays: 2894,
    originalPurpose: 'To continuously measure lunar interior heat flow, deep and shallow moonquakes, solar wind composition, magnetic fields, and atmospheric pressure over multi-year cycles.',
    whyLeftBehind: 'Designed specifically as automated permanent surface observatories. Powered by Radioisotope Thermoelectric Generators (SNAP-27 RTGs) containing plutonium-238, they transmitted continuous scientific telemetry until NASA officially turned off the receivers on September 30, 1977 due to budget constraints.',
    currentLocation: 'Multiple landing sites across Mare Cognitum, Fra Mauro, Hadley-Apennine, Descartes Highlands, and Taurus-Littrow',
    coordinates: {
      lat: 20.1908,
      lng: 30.7717,
      latFormatted: '20°11\'27" N',
      lngFormatted: '30°46\'18" E',
      craterOrRegion: 'Taurus-Littrow (Apollo 17 Site)'
    },
    status: 'inactive',
    category: 'scientific_instrument',
    massKg: 135,
    historicalSignificance: 'Formed a planetological seismic network that recorded over 12,000 seismic events, including meteoroid impacts, thermal creaks, and deep moonquakes caused by tidal tugs from Earth.',
    scientificImpact: 'Revealed that the Moon has a layered internal structure: a 60 km crust, a mantle, and a partially molten iron-rich metallic core roughly 330 km in radius.',
    imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Apollo 12 astronaut Alan Bean carrying the ALSEP package across Oceanus Procellarum. (NASA photo AS12-46-6813)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'SNAP-27 Radioisotope Thermoelectric Generator',
        description: 'Decaying plutonium-238 heat source generated 73 watts of continuous electrical power without solar panels.'
      },
      {
        feature: 'Helical Telemetry Transmitter Antenna',
        description: 'Sent 1060 bps S-band telemetry stream directly to Earth ground stations.'
      },
      {
        feature: 'Passive Seismic Experiment (PSE)',
        description: 'Ultra-sensitive triaxial seismometers capable of detecting ground motions as small as a nanometer.'
      }
    ],
    sources: [
      {
        title: 'NSSDC ALSEP Experiments Overview',
        url: 'https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_alsep.html',
        org: 'NASA Goddard'
      }
    ]
  },
  {
    id: 'fallen-astronaut-memorial',
    name: 'The "Fallen Astronaut" Memorial & Plaque',
    subtitle: 'The Sole Work of Art and Solemn Tribute on Another Celestial Body',
    designation: 'Apollo 15 Fallen Astronaut Memorial',
    celestialBody: 'Moon',
    mission: 'Apollo 15',
    launchYear: 1971,
    arrivalYear: 1971,
    originalPurpose: 'A quiet, solemn memorial commemorating all 14 American astronauts and Soviet cosmonauts who had given their lives in the pursuit of human space exploration up to that date.',
    whyLeftBehind: 'Intentionally sculpted and placed on the lunar soil to remain in pristine perpetuity, free from wind, water, or terrestrial erosion.',
    currentLocation: 'Hadley-Apennine, near the rim of Hadley Rille',
    coordinates: {
      lat: 26.13,
      lng: 3.63,
      latFormatted: '26°07\'48" N',
      lngFormatted: '3°38\'00" E',
      craterOrRegion: 'Hadley Rille'
    },
    status: 'inactive',
    category: 'commemorative',
    massKg: 0.15,
    dimensions: '8.5 cm (3.3 in) tall statuette',
    historicalSignificance: 'Created by Belgian artist Paul Van Hoeydonck and quietly placed in the regolith by Apollo 15 Commander David Scott on August 1, 1971. Scott laid down a small aluminum plaque listing the names of Yuri Gagarin, Gus Grissom, Vladimir Komarov, Ed White, and 10 others.',
    scientificImpact: 'Represents humanity\'s cultural, artistic, and philosophical expansion into space, transcending Cold War rivalries.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The Fallen Astronaut aluminum figurine placed in the lunar regolith at Hadley Rille. (NASA photo AS15-88-11893)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'Solid Cast Aluminum Figurine',
        description: 'Depicts an abstract astronaut in a spacesuit; lightweight and immune to solar ultraviolet fading.'
      },
      {
        feature: 'Engraved Aluminum Plaque',
        description: 'Contains 14 names in alphabetical order, deliberately honoring both Soviet and American space pioneers equally.'
      }
    ],
    sources: [
      {
        title: 'NASA History: The Fallen Astronaut Monument',
        url: 'https://www.nasa.gov/feature/the-fallen-astronaut',
        org: 'NASA'
      }
    ]
  },
  {
    id: 'jettisoned-cameras-backpacks',
    name: 'Jettisoned Hasselblad Cameras & PLSS Backpacks',
    subtitle: 'The Calculated Weight-Sacrifice for Bringing Moon Rocks Home',
    designation: 'Apollo 11–17 Jettisoned Gear',
    celestialBody: 'Moon',
    mission: 'Apollo 11–17',
    launchYear: 1969,
    arrivalYear: 1969,
    originalPurpose: 'Hasselblad 500EL cameras with ultra-sharp Zeiss Biogon lenses took the most iconic photographs in human history. Portable Life Support Systems (PLSS) supplied oxygen, cooling water, and radio comms during moonwalks.',
    whyLeftBehind: 'Mass margins for the Apollo Lunar Module Ascent Stage were razor thin. To bring back 382 kilograms of irreplaceable lunar core samples and boulders, NASA flight director rule mandated dumping all unnecessary mass before ignition: astronauts tossed camera bodies (keeping only the exposed film magazines), PLSS backpacks, lunar overshoes, waste bags, and food containers straight out the hatch onto the soil.',
    currentLocation: 'Immediate perimeter around Apollo 11, 12, 14, 15, 16, 17 landing sites',
    coordinates: {
      lat: 0.674,
      lng: 23.473,
      latFormatted: '0°40\'26" N',
      lngFormatted: '23°28\'22" E',
      craterOrRegion: 'Tranquility Base & Subsequent Sites'
    },
    status: 'discarded_hardware',
    category: 'discarded_equipment',
    massKg: 180,
    historicalSignificance: 'Approximately 12 Hasselblad camera bodies and dozens of PLSS backpacks remain resting at Apollo landing sites today. They represent the stark physics of space exploration, where scientific samples were valued more than state-of-the-art terrestrial engineering hardware.',
    scientificImpact: 'These artifacts now serve as unintentional 50+ year experiments on how plastics, optical coatings, lubricants, and metal alloys survive uninterrupted solar ionizing radiation and extreme vacuum thermal cycling.',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'PLSS backpacks and trash tossed onto the regolith beneath the Lunar Module ladder. (NASA photo)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'Modified Hasselblad 500EL Data Camera',
        description: 'Equipped with a Reseau plate that imprinted reference crosshairs on every exposure for optical photogrammetry.'
      },
      {
        feature: 'Hamilton Standard PLSS Fiberglass Shell',
        description: 'Contained liquid cooling sublimator, oxygen canisters, and lithium hydroxide canisters.'
      }
    ],
    sources: [
      {
        title: 'NASA Apollo Lunar Surface Journal: Jettisoning Equipment',
        url: 'https://www.hq.nasa.gov/alsj/a11/a11.jettison.html',
        org: 'NASA ALSJ'
      }
    ]
  },
  {
    id: 'surveyor-3-hardware',
    name: 'Surveyor 3 Robotic Lander Hardware',
    subtitle: 'The Only Extraterrestrial Probe Visited and Examined by Later Humans',
    designation: 'Surveyor III Spacecraft',
    celestialBody: 'Moon',
    mission: 'Surveyor 3 / Apollo 12',
    launchYear: 1967,
    arrivalYear: 1967,
    missionDurationDays: 14,
    originalPurpose: 'An uncrewed robotic lander sent to prove that the lunar surface could support the weight of a manned Apollo lander without sinking into deep dust, and to dig trenches with a robotic scoop.',
    whyLeftBehind: 'Stationary probe that completed its mission in May 1967 when the lunar night set in. In November 1969, Apollo 12 Commander Pete Conrad and Alan Bean executed a pinpoint landing just 160 meters away and walked over to inspect it.',
    currentLocation: 'Oceanus Procellarum (Ocean of Storms)',
    coordinates: {
      lat: -3.015,
      lng: -23.418,
      latFormatted: '3°00\'54" S',
      lngFormatted: '23°25\'05" W',
      craterOrRegion: 'Surveyor Crater, Oceanus Procellarum'
    },
    status: 'inactive',
    category: 'lander_descent',
    massKg: 297,
    historicalSignificance: 'The astronauts unbolted Surveyor 3\'s TV camera, robotic scoop, and tubing, packing them back to Earth. This provided NASA and aerospace engineers with the world\'s first empirical data on how artificial hardware ages in space over two years.',
    scientificImpact: 'Showed that spacecraft surfaces are sandblasted by lunar dust kicked up during nearby rocket landings, and verified that microbial Streptococcus mitis might have survived inside the camera housing (sparking intense planetary protection protocols).',
    imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Apollo 12 astronaut Pete Conrad examining the Surveyor 3 robotic lander. (NASA photo AS12-48-7134)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'Surface Sampler Robotic Scoop',
        description: 'Motor-driven pantograph arm that excavated 4 trenches up to 18 cm deep in the regolith.'
      },
      {
        feature: 'Solar Panel & Planar Array Antenna',
        description: 'Single solar array generating 85 watts during the two-week lunar daylight.'
      }
    ],
    sources: [
      {
        title: 'NASA Analysis of Surveyor 3 Samples Returned by Apollo 12',
        url: 'https://curator.jsc.nasa.gov/lunar/surveyor.cfm',
        org: 'NASA Johnson Space Center'
      }
    ]
  },

  // =================== MARS OBJECTS ===================
  {
    id: 'sojourner-rover',
    name: 'Sojourner Mars Rover',
    subtitle: 'Humanity\'s First Robotic Wheels on the Red Planet',
    designation: 'Mars Pathfinder Microrover / MESUR Pathfinder',
    celestialBody: 'Mars',
    mission: 'Mars Pathfinder',
    launchYear: 1996,
    arrivalYear: 1997,
    missionDurationDays: 83,
    originalPurpose: 'A technology demonstration mission to prove that low-cost mobile robotic exploration of Mars was feasible and to analyze Martian rock chemistry with an onboard spectrometer.',
    whyLeftBehind: 'Pathfinder and Sojourner were solar-powered and had no return propulsion. On September 27, 1997, the Pathfinder base station battery failed due to extreme thermal cycling and repeated charge cycles, permanently silencing communications with Earth.',
    currentLocation: 'Ares Vallis (Chryse Planitia flood plain)',
    coordinates: {
      lat: 19.33,
      lng: -33.55,
      latFormatted: '19°20\' N',
      lngFormatted: '33°33\' W',
      craterOrRegion: 'Carl Sagan Memorial Station / Ares Vallis'
    },
    status: 'inactive',
    category: 'rover',
    massKg: 11.5,
    dimensions: '65 cm long × 48 cm wide × 30 cm high (microwave oven size)',
    historicalSignificance: 'The very first robotic rover to successfully operate on Mars. Named after civil rights abolitionist Sojourner Truth. It captured global imagination and proved the Rocker-Bogie mobility system now used on Spirit, Opportunity, Curiosity, and Perseverance.',
    scientificImpact: 'Traveled 100 meters, took 550 photographs, and performed 15 chemical analyses of rocks like "Barnacle Bill" and "Yogi", proving that Ares Vallis had been shaped by catastrophic ancient megafloods of liquid water.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Sojourner rover examining the rock named Yogi on the Martian surface. (NASA/JPL-Caltech photo)',
    has3DModel: true,
    modelKey: 'sojourner',
    structuralHighlights: [
      {
        feature: '6-Wheel Rocker-Bogie Suspension',
        description: 'Patented kinematic linkage that allows the rover to climb over obstacles larger than its wheel diameter without tipping over, keeping all six wheels in contact with the ground.'
      },
      {
        feature: 'Alpha Particle X-Ray Spectrometer (APXS)',
        description: 'Mounted on a deployment mechanism at the rear; bombarded rock surfaces with alpha particles and X-rays to detect elemental composition.'
      },
      {
        feature: 'GaAs Solar Cell Top Panel',
        description: 'High-efficiency Gallium Arsenide solar array generating approximately 16 watts peak power at midday.'
      },
      {
        feature: 'Stereoscopic Forward Cameras',
        description: 'Dual black-and-white cameras at the front for autonomous obstacle avoidance and 3D terrain mapping.'
      }
    ],
    hotspots: [
      {
        id: 'hs-sojourner-apxs',
        name: 'APXS Sensor Head',
        description: 'Contact sensor placed against rocks to read elemental signatures.',
        position: [0.0, 0.2, -0.45]
      },
      {
        id: 'hs-sojourner-rocker',
        name: 'Rocker-Bogie Differential',
        description: 'Mechanical linkage that distributes vehicle weight evenly over irregular rocky terrain.',
        position: [0.35, 0.1, 0.0]
      },
      {
        id: 'hs-sojourner-solar',
        name: 'Gallium Arsenide Solar Array',
        description: 'Clean-room assembled solar panel that powered the 8-bit Intel 80C85 CPU.',
        position: [0.0, 0.32, 0.0]
      }
    ],
    sources: [
      {
        title: 'NASA JPL Mars Pathfinder & Sojourner Mission Archive',
        url: 'https://mars.nasa.gov/mars-pathfinder/',
        org: 'NASA / Jet Propulsion Laboratory'
      },
      {
        title: 'NASA 3D Resources: Sojourner Rover Model',
        url: 'https://nasa3d.arc.nasa.gov/detail/sojourner',
        org: 'NASA Ames Research Center'
      }
    ]
  },
  {
    id: 'ingenuity-helicopter',
    name: 'Ingenuity Mars Helicopter',
    subtitle: 'The Wright Brothers Moment on an Alien Atmosphere',
    designation: 'Mars 2020 Scout / Ingenuity',
    celestialBody: 'Mars',
    mission: 'Mars 2020 / Perseverance',
    launchYear: 2020,
    arrivalYear: 2021,
    missionDurationDays: 1042,
    originalPurpose: 'A pure high-risk, high-reward technology demonstrator to answer: Can powered, controlled flight take place in the razor-thin Martian atmosphere (less than 1% of Earth\'s atmospheric density)?',
    whyLeftBehind: 'After achieving a legendary 72 flights (designed for just 5), the helicopter suffered rotor blade tip damage during a landing in harsh, featureless sandy terrain on Flight 72 (January 18, 2024). It can no longer fly, but remains upright at "Valinor Hills", serving as a stationary weather station and testbed.',
    currentLocation: 'Jezero Crater ("Valinor Hills" landing site)',
    coordinates: {
      lat: 18.4447,
      lng: 77.4508,
      latFormatted: '18°26\'41" N',
      lngFormatted: '77°27\'03" E',
      craterOrRegion: 'Valinor Hills, Jezero Crater'
    },
    status: 'inactive',
    category: 'aerial_vehicle',
    massKg: 1.8,
    dimensions: '0.49 m high × 1.2 m rotor span',
    historicalSignificance: 'Carried a postage-stamp-sized piece of fabric from the wing of the 1903 Wright Flyer beneath its solar panel. The first human aircraft to achieve powered, controlled aerodynamic flight on another planet. It completed 128.8 minutes of flight, covered 17.0 km (10.6 miles), and reached altitudes of 24 meters.',
    scientificImpact: 'Scouted forward pathways for the Perseverance rover, photographed steep crater walls and delta cliffs inaccessible to rovers, and proved aerial exploration for future Mars sample recovery helicopters.',
    imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ingenuity Mars Helicopter hovering above the Jezero Crater floor. (NASA/JPL-Caltech)',
    has3DModel: true,
    modelKey: 'ingenuity',
    structuralHighlights: [
      {
        feature: 'Counter-Rotating Carbon-Fiber Rotor Blades',
        description: 'Two 1.2-meter coaxial rotors spinning in opposite directions at 2,400 to 2,700 RPM—roughly five times faster than an Earth helicopter—to bite the ultrathin Martian air.'
      },
      {
        feature: 'Solar Panel & Sony Li-Ion Batteries',
        description: 'Compact photovoltaic panel perched atop the rotor mast charging six consumer-grade lithium-ion cells inside an insulated fuselage.'
      },
      {
        feature: 'Fuselage Avionics Cube with Internal Heaters',
        description: 'Contains custom Qualcomm Snapdragon 801 processor, downward-facing terrain camera, laser altimeter, and resistance heaters to survive -90°C (-130°F) Martian nights.'
      },
      {
        feature: 'Four Featherweight Carbon-Composite Legs',
        description: 'Sprung legs that absorb touchdown shock and keep the body elevated above rocky dust.'
      }
    ],
    hotspots: [
      {
        id: 'hs-ing-rotors',
        name: 'Coaxial Counter-Rotating Rotors',
        description: 'Special airfoil profile optimized for supersonic tip speeds in low Reynolds number gas.',
        position: [0.0, 0.45, 0.0]
      },
      {
        id: 'hs-ing-solar',
        name: 'Top Solar Panel Array',
        description: 'Perched above the blades to catch sunlight and power daily flight charges.',
        position: [0.0, 0.72, 0.0]
      },
      {
        id: 'hs-ing-body',
        name: 'Insulated Avionics Cube',
        description: 'Surrounded by carbon-fiber skins and aerogel blankets to preserve internal warmth.',
        position: [0.0, 0.0, 0.0]
      },
      {
        id: 'hs-ing-legs',
        name: 'Carbon-Fiber Landing Legs',
        description: 'Ultra-lightweight canted struts weighing mere grams each.',
        position: [0.35, -0.3, 0.35]
      }
    ],
    sources: [
      {
        title: 'NASA JPL Ingenuity Mars Helicopter Overview & Flight Logs',
        url: 'https://mars.nasa.gov/technology/helicopter/',
        org: 'NASA / JPL'
      },
      {
        title: 'NASA 3D Resources: Ingenuity Helicopter',
        url: 'https://nasa3d.arc.nasa.gov/detail/ingenuity',
        org: 'NASA Ames'
      }
    ]
  },
  {
    id: 'perseverance-rover',
    name: 'Perseverance Mars Rover',
    subtitle: 'The Astrobiology Lab Seeking Ancient Microbial Life',
    designation: 'Mars 2020 Rover / Perseverance (Percy)',
    celestialBody: 'Mars',
    mission: 'Mars 2020',
    launchYear: 2020,
    arrivalYear: 2021,
    missionDurationDays: 'Ongoing (Active)',
    originalPurpose: 'To seek biosignatures of ancient microbial life in the ancient lakebed of Jezero Crater, drill and cache sealed rock cores for future return to Earth, and test oxygen production from the Martian CO2 atmosphere.',
    whyLeftBehind: 'Currently actively driving across the Jezero delta. Like all Mars rovers, it is too heavy and lacks the massive launch vehicle required to lift off from Mars and return to Earth; it is permanently stationed on the Martian surface.',
    currentLocation: 'Jezero Crater (Western Delta / Neretva Vallis)',
    coordinates: {
      lat: 18.4446,
      lng: 77.4509,
      latFormatted: '18°26\'41" N',
      lngFormatted: '77°27\'03" E',
      craterOrRegion: 'Jezero Crater Delta'
    },
    status: 'operational',
    category: 'rover',
    massKg: 1025,
    dimensions: '3 m long × 2.7 m wide × 2.2 m tall',
    historicalSignificance: 'The most advanced mobile scientific laboratory ever dispatched to another world. Includes the MOXIE experiment which created breathable oxygen from Martian carbon dioxide, and has already drilled and deposited a depot of sealed sample tubes on the Martian surface.',
    scientificImpact: 'Confirmed that Jezero Crater was once an ancient river delta fed by liquid water billions of years ago, discovering organic carbon molecules in sedimentary rocks.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Self-portrait of Perseverance and Ingenuity at "Van Zyl Overlook" in Jezero Crater. (NASA/JPL-Caltech)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'Multi-Mission Radioisotope Thermoelectric Generator (MMRTG)',
        description: 'Converts heat from decaying plutonium-238 dioxide into electrical energy, keeping systems warm through harsh dust storms.'
      },
      {
        feature: 'Robotic Arm with Coring Drill & PIXL/SHERLOC Spectrometers',
        description: 'A 2.1-meter arm capable of rotary percussive coring to collect chalk-sized rock cores.'
      },
      {
        feature: 'SuperCam & Mastcam-Z Remote Sensing Mast',
        description: 'Fires high-energy laser pulses at rocks up to 7 meters away to vaporize microscopic points and analyze the resulting plasma glow.'
      }
    ],
    sources: [
      {
        title: 'NASA Mars 2020 Perseverance Rover Official Portal',
        url: 'https://mars.nasa.gov/mars2020/',
        org: 'NASA / JPL'
      }
    ]
  },
  {
    id: 'curiosity-rover',
    name: 'Curiosity Mars Rover',
    subtitle: 'Pioneering Gale Crater and Mount Sharp for Over a Decade',
    designation: 'Mars Science Laboratory (MSL) / Curiosity',
    celestialBody: 'Mars',
    mission: 'Mars Science Laboratory',
    launchYear: 2011,
    arrivalYear: 2012,
    missionDurationDays: 'Ongoing (12+ Years Active)',
    originalPurpose: 'To determine whether Mars ever had an environment capable of supporting microbial life, examining water history, geology, and atmospheric radiation.',
    whyLeftBehind: 'Carries no ascent or return rocket. It continues its open-ended climbing expedition up the 5-kilometer-tall Mount Sharp (Aeolis Mons) inside Gale Crater.',
    currentLocation: 'Gale Crater (Mount Sharp / Sulfate-Bearing Unit)',
    coordinates: {
      lat: -4.5895,
      lng: 137.4417,
      latFormatted: '4°35\'22" S',
      lngFormatted: '137°26\'30" E',
      craterOrRegion: 'Aeolis Mons / Gale Crater'
    },
    status: 'operational',
    category: 'rover',
    massKg: 899,
    dimensions: '2.9 m long × 2.7 m wide × 2.2 m high',
    historicalSignificance: 'Pioneered the audacious "Sky Crane" rocket landing maneuver on August 6, 2012. Has driven over 32 km and taken more than 600,000 images, outlasting its original two-year prime mission by more than a decade.',
    scientificImpact: 'Conclusively proved that ancient Mars possessed habitable conditions: freshwater lakes with neutral pH, carbon, hydrogen, oxygen, nitrogen, phosphorus, and sulfur.',
    imageUrl: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Curiosity self-portrait at the Namib Dune in Gale Crater. (NASA/JPL-Caltech/MSSS)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'CheMin & SAM Internal Miniaturized Laboratories',
        description: 'Internal analytical ovens that bake powdered rock samples to sniff out isotopic ratios and complex organic molecules.'
      },
      {
        feature: 'Machined Solid Aluminum Wheels with Morse Code',
        description: 'Pattern holes spell "JPL" in Morse code (•--- •--. •-..) into the Martian sand to measure wheel slip visually.'
      }
    ],
    sources: [
      {
        title: 'NASA Science: Curiosity Mars Rover',
        url: 'https://science.nasa.gov/mission/msl-curiosity/',
        org: 'NASA Science'
      }
    ]
  },
  {
    id: 'opportunity-rover',
    name: 'Opportunity Rover (MER-B)',
    subtitle: 'The Marathon Runner of Another World',
    designation: 'Mars Exploration Rover - B / Opportunity (Oppy)',
    celestialBody: 'Mars',
    mission: 'Mars Exploration Rover',
    launchYear: 2003,
    arrivalYear: 2004,
    missionDurationDays: 5352,
    originalPurpose: 'Designed for a 90-sol (90 Martian day) mission to search for geological evidence that liquid water once flowed across Meridiani Planum.',
    whyLeftBehind: 'A rover with no return capability. In June 2018, a catastrophic planet-encircling dust storm blotted out the Sun over Meridiani Planum for months. With its solar panels coated in dust and unable to recharge, its batteries drained and it fell into deep hibernation.',
    currentLocation: 'Meridiani Planum (Endeavour Crater / Perseverance Valley)',
    coordinates: {
      lat: -2.28,
      lng: 354.77,
      latFormatted: '2°17\' S',
      lngFormatted: '5°14\' W',
      craterOrRegion: 'Perseverance Valley, Endeavour Crater'
    },
    status: 'inactive',
    category: 'rover',
    massKg: 185,
    dimensions: '1.6 m wide × 2.3 m long × 1.5 m high',
    historicalSignificance: 'Traveled an extraordinary 45.16 kilometers (28.06 miles)—the longest distance ever driven by any wheeled vehicle on another world, surpassing the 42.195 km Olympic marathon distance.',
    scientificImpact: 'Discovered hematite-rich spherical concretions dubbed "blueberries", proving beyond doubt that acidic groundwater once soaked the plains of Mars.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Opportunity rover looking back at its tracks on the rim of Endurance Crater. (NASA/JPL-Caltech)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'Triple-Junction Solar Array Wings',
        description: 'Unfolded solar panels that were repeatedly cleaned by spontaneous Martian dust devils ("cleaning events").'
      },
      {
        feature: 'Pancam Mast Assembly & Rock Abrasion Tool (RAT)',
        description: 'Diamond-tipped grinder that shaved away weathered rock rinds to expose unweathered mineral interiors.'
      }
    ],
    sources: [
      {
        title: 'NASA Mars Exploration Rovers: Spirit and Opportunity',
        url: 'https://mars.nasa.gov/mer/',
        org: 'NASA / JPL'
      }
    ]
  },
  {
    id: 'spirit-rover',
    name: 'Spirit Rover (MER-A)',
    subtitle: 'The Resilient Geologist of Gusev Crater',
    designation: 'Mars Exploration Rover - A / Spirit',
    celestialBody: 'Mars',
    mission: 'Mars Exploration Rover',
    launchYear: 2003,
    arrivalYear: 2004,
    missionDurationDays: 2210,
    originalPurpose: 'To investigate the history of water inside Gusev Crater, a massive ancient impact crater suspected of once holding an extraterrestrial lake.',
    whyLeftBehind: 'In May 2009, while driving with a stuck right-front wheel, Spirit broke through a brittle crust of soil and became trapped in soft iron sulfate sands at "Troy". Unable to tilt its solar panels toward the sun for winter warmth, it froze and fell silent in March 2010.',
    currentLocation: 'Gusev Crater (Columbia Hills / Home Plate)',
    coordinates: {
      lat: -14.5684,
      lng: 175.4726,
      latFormatted: '14°34\'06" S',
      lngFormatted: '175°28\'21" E',
      craterOrRegion: 'Home Plate, Gusev Crater'
    },
    status: 'inactive',
    category: 'rover',
    massKg: 185,
    historicalSignificance: 'Operated for more than 20 times its original design lifespan, surviving harsh Martian winters and scaling the steep Columbia Hills.',
    scientificImpact: 'Its jammed wheel inadvertently scraped away surface soil, unearthing 90% pure silica deposits—evidence of ancient hydrothermal vents or hot springs, a prime candidate environment for the emergence of life.',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Spirit\'s view from the summit of Husband Hill looking across Gusev Crater. (NASA/JPL-Caltech)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'Mössbauer Spectrometer',
        description: 'Analyzed iron-bearing mineralogy on rocks and soil.'
      },
      {
        feature: 'Heated Rover Electronics Module (WEB)',
        description: 'Aerogel-insulated thermal box keeping computer electronics above freezing.'
      }
    ],
    sources: [
      {
        title: 'NASA JPL Spirit Rover Mission Updates',
        url: 'https://mars.nasa.gov/mer/mission/status_spirit.html',
        org: 'NASA / JPL'
      }
    ]
  },
  {
    id: 'perseverance-parachute-backshell',
    name: 'Perseverance Parachute & Backshell Debris',
    subtitle: 'The Jettisoned Armor That Conquered the "Seven Minutes of Terror"',
    designation: 'Mars 2020 Entry, Descent, and Landing (EDL) Hardware',
    celestialBody: 'Mars',
    mission: 'Mars 2020',
    launchYear: 2020,
    arrivalYear: 2021,
    originalPurpose: 'To brake the spacecraft from 20,000 km/h (12,500 mph) orbital entry speed down to subsonic velocity, protecting the rover with a cone-shaped heat shield and deploying a 21.5-meter supersonic nylon parachute.',
    whyLeftBehind: 'After decelerating the spacecraft to terminal speed, the parachute and protective backshell were pyrotechnically severed at 2.1 km altitude so the rocket-powered Sky Crane could carry the rover down. The backshell and parachute plummeted to impact the ground at ~126 km/h.',
    currentLocation: 'Jezero Crater (approx. 8 km northwest of touchdown site)',
    coordinates: {
      lat: 18.452,
      lng: 77.429,
      latFormatted: '18°27\'07" N',
      lngFormatted: '77°25\'44" E',
      craterOrRegion: 'Jezero Crater Plains'
    },
    status: 'discarded_hardware',
    category: 'discarded_equipment',
    massKg: 850,
    historicalSignificance: 'In April 2022, the Ingenuity helicopter flew directly over the crash site on Flight 26, taking stunning color aerial photographs of the crumpled backshell and pristine parachute lying sprawled across the Martian dust. The parachute pattern famously encoded the JPL motto "DARE MIGHTY THINGS" in binary code.',
    scientificImpact: 'Engineers from the Mars Sample Return mission studied Ingenuity\'s close-up photographs to evaluate how suspension lines held up and where the structure deformed upon high-speed impact, directly improving future planetary lander designs.',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Ingenuity helicopter\'s aerial photo of Perseverance\'s backshell and supersonic parachute on the Martian floor. (NASA/JPL-Caltech)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: '21.5-Meter Supersonic Parachute',
        description: 'Made of Kevlar, Nomex, and nylon; deployed in 0.4 seconds under 32,000 kg of drag force.'
      },
      {
        feature: 'Protective Composite Backshell',
        description: 'Carbon-fiber honeycomb structure with thermal barrier tiles that shielded the rover during atmospheric entry.'
      }
    ],
    sources: [
      {
        title: 'NASA Ingenuity Spots Perseverance Parachute & Backshell on Mars',
        url: 'https://www.nasa.gov/image-article/nasas-ingenuity-spots-perseverances-parachute-backshell/',
        org: 'NASA / JPL-Caltech'
      }
    ]
  },
  {
    id: 'insight-lander',
    name: 'InSight Mars Lander',
    subtitle: 'The Planetary Heartbeat Monitor & Marsquake Station',
    designation: 'Interior Exploration using Seismic Investigations, Geodesy and Heat Transport (InSight)',
    celestialBody: 'Mars',
    mission: 'InSight',
    launchYear: 2018,
    arrivalYear: 2018,
    missionDurationDays: 1489,
    originalPurpose: 'To conduct the first deep thorough medical checkup of Mars: measuring internal seismic activity (marsquakes), internal heat flow, and the precise wobble of the Martian pole to deduce core size.',
    whyLeftBehind: 'Stationary three-legged lander powered by twin 2.15-meter circular solar panels. Over four years, Martian dust steadily settled over the solar cells, decreasing power output from 5,000 watt-hours per sol to under 400 watt-hours. On December 15, 2022, InSight sent its final message: "My power\'s really low, so this may be the last image I can send... Thanks for staying with me."',
    currentLocation: 'Elysium Planitia',
    coordinates: {
      lat: 4.5024,
      lng: 135.6234,
      latFormatted: '4°30\'09" N',
      lngFormatted: '135°37\'24" E',
      craterOrRegion: 'Elysium Planitia ("The Biggest Parking Lot on Mars")'
    },
    status: 'inactive',
    category: 'lander_descent',
    massKg: 358,
    dimensions: '6.0 m wide with solar arrays deployed',
    historicalSignificance: 'Detected more than 1,300 marsquakes, including a monster magnitude 4.7 quake that shook the entire planet for ten hours, and detected meteoroids slamming into the planet in real-time.',
    scientificImpact: 'Proved Mars is seismically alive, measured a Martian crust thickness between 24 and 72 km, and determined that Mars possesses a liquid metallic core with a radius of approximately 1,830 km.',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'InSight\'s selfie on Mars, showing its dust-covered solar panels and seismometer dome. (NASA/JPL-Caltech)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'SEIS (Seismic Experiment for Interior Structure)',
        description: 'Ultra-sensitive French CNES seismometer shielded under a wind-and-thermal vacuum dome.'
      },
      {
        feature: 'HP3 Heat Flow and Physical Properties Package',
        description: 'The "Mole", a self-hammering German DLR probe designed to burrow 5 meters into Martian soil.'
      }
    ],
    sources: [
      {
        title: 'NASA InSight Mission Highlights & Final Sol Data',
        url: 'https://mars.nasa.gov/insight/',
        org: 'NASA / JPL'
      }
    ]
  },
  {
    id: 'viking-1-lander',
    name: 'Viking 1 Lander',
    subtitle: 'The First American Foothold on the Surface of Mars',
    designation: 'Viking 1 Lander (Thomas Mutch Memorial Station)',
    celestialBody: 'Mars',
    mission: 'Viking 1',
    launchYear: 1975,
    arrivalYear: 1976,
    missionDurationDays: 2307,
    originalPurpose: 'To capture the first clear surface panoramas of Mars, search for organic compounds or microbial metabolism, and measure atmospheric composition, weather, and seismology.',
    whyLeftBehind: 'A nuclear-powered stationary lander with no ascent rocket. Operated for 6 years until an erroneous human uplink command in November 1982 accidentally overwrote antenna tracking parameters, permanently cutting communication.',
    currentLocation: 'Chryse Planitia (Plains of Gold)',
    coordinates: {
      lat: 22.48,
      lng: -47.97,
      latFormatted: '22°29\' N',
      lngFormatted: '47°58\' W',
      craterOrRegion: 'Chryse Planitia'
    },
    status: 'inactive',
    category: 'lander_descent',
    massKg: 572,
    historicalSignificance: 'On July 20, 1976—exactly seven years after Apollo 11 landed on the Moon—Viking 1 made history with the first successful touchdown and operational surface transmission from Mars by the United States.',
    scientificImpact: 'Transmitted the first color surface photos showing red iron-oxide dust, pinkish sky, and boulder-strewn plains; proved the atmosphere is 95% carbon dioxide and found no conclusive signs of organic life in its gas chromatograph mass spectrometer.',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The first color photograph taken on the surface of Mars by Viking 1 Lander. (NASA photo 76-H-671)',
    has3DModel: false,
    structuralHighlights: [
      {
        feature: 'Dual SNAP-19 Radioisotope Thermoelectric Generators',
        description: 'Twin RTGs fueled with plutonium-238 generating 70 watts of continuous electrical power.'
      },
      {
        feature: '3-Meter Extendable Surface Sampler Boom',
        description: 'Telescoping scoop that gathered soil and delivered it to three biological test chambers.'
      }
    ],
    sources: [
      {
        title: 'NASA Viking Mission to Mars Overview',
        url: 'https://www.nasa.gov/mission_pages/viking/',
        org: 'NASA'
      }
    ]
  }
];
