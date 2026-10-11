/**
 * DataCenterCore.io - Facilities & Physical Infrastructure Topics
 * Deep technical blueprints for Power, Cooling, Cabling, Tiers, and Life Safety
 */

const FACILITIES_TOPICS = [
  {
    id: "fac-uptime-tiers",
    track: "facilities",
    domain: "Standards & Tiers",
    title: "Uptime Institute Tiers (I - IV) & ANSI/TIA-942 Standards",
    subtitle: "Concurrent Maintainability, Fault Tolerance, and High-Availability Engineering",
    summary: "The definitive engineering breakdown of Data Center reliability standards: Uptime Institute Tier I through IV vs ANSI/TIA-942 Rated 1 through 4.",
    diagramType: "tierComparison",
    readingTime: "12 min read",
    tags: ["Uptime Institute", "TIA-942", "Tier I-IV", "SLA", "Concurrent Maintainability", "2N"],
    content: `
      <h3>1. The Uptime Institute Tier Classification System</h3>
      <p>The Uptime Institute Tier Standard is the globally recognized benchmark for data center availability and operational sustainability. The standard evaluates topology based on four escalating levels:</p>

      <div class="overflow-x-auto my-4">
        <table class="w-full text-left text-xs text-slate-300 border border-slate-800">
          <thead class="bg-slate-900 text-cyan-400 uppercase tracking-wider font-mono">
            <tr>
              <th class="p-3 border-b border-slate-800">Tier Level</th>
              <th class="p-3 border-b border-slate-800">Availability</th>
              <th class="p-3 border-b border-slate-800">Annual Downtime</th>
              <th class="p-3 border-b border-slate-800">Redundancy</th>
              <th class="p-3 border-b border-slate-800">Distribution Paths</th>
              <th class="p-3 border-b border-slate-800">Key Engineering Requirement</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80">
            <tr>
              <td class="p-3 font-bold text-white">Tier I: Basic</td>
              <td class="p-3">99.671%</td>
              <td class="p-3 text-red-400">28.8 hours</td>
              <td class="p-3 font-mono">N</td>
              <td class="p-3">1 Path</td>
              <td class="p-3">Single path for power and cooling; no redundant components; planned maintenance requires total shutdown.</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-white">Tier II: Redundant Components</td>
              <td class="p-3">99.741%</td>
              <td class="p-3 text-amber-400">22.0 hours</td>
              <td class="p-3 font-mono">N + 1</td>
              <td class="p-3">1 Path</td>
              <td class="p-3">Redundant critical components (extra UPS module, chiller, generator), but a single distribution path still presents a SPOF.</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-cyan-300">Tier III: Concurrently Maintainable</td>
              <td class="p-3 text-cyan-300 font-semibold">99.982%</td>
              <td class="p-3 text-emerald-400">1.6 hours</td>
              <td class="p-3 font-mono">N + 1</td>
              <td class="p-3 font-semibold">1 Active, 1 Alternate</td>
              <td class="p-3"><strong>Concurrently Maintainable:</strong> Any capacity component or distribution path can be removed for maintenance without impacting IT load. Dual-powered IT equipment required.</td>
            </tr>
            <tr>
              <td class="p-3 font-bold text-emerald-400">Tier IV: Fault Tolerant</td>
              <td class="p-3 text-emerald-400 font-semibold">99.995%</td>
              <td class="p-3 text-emerald-400">0.4 hours (26 mins)</td>
              <td class="p-3 font-mono">2(N + 1) or 2N</td>
              <td class="p-3 font-semibold">2 Simultaneously Active</td>
              <td class="p-3"><strong>Fault Tolerant:</strong> Autonomous response to any single unplanned failure without IT impact. Physical compartmentation (firewalls) separating redundant power and cooling plants. Continuous cooling ride-through.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2. Concurrent Maintainability vs. Fault Tolerance (The Critical Distinction)</h3>
      <ul class="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Concurrent Maintainability (Tier III):</strong> Means an engineer can open a breaker, take a UPS offline, replace a valve on a chilled water header, or test a transfer switch while the data center operates at 100% capacity without losing a single server. However, an <em>unplanned</em> catastrophic incident (e.g., an arc flash explosion) could still cause a transient drop.</li>
        <li><strong>Fault Tolerance (Tier IV):</strong> Goes beyond maintenance to handle unplanned disasters. If an explosion destroys UPS System A, UPS System B and its isolated chilled water loops instantly carry the full load without any human intervention. Systems must be physically segregated in separate fire-rated compartments (2-hour to 4-hour fire rating).</li>
      </ul>

      <h3 class="mt-6">3. ANSI/TIA-942-B Standard (Rated 1 to Rated 4)</h3>
      <p>While Uptime Institute focuses primarily on electrical, mechanical, and operational topology, <strong>ANSI/TIA-942</strong> encompasses 4 distinct disciplines:</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-cyan-400 block mb-1">1. Architectural / Civil</span>
          <p class="text-xs text-slate-300">Floor loading capacity (min. 12 kN/m²), roof construction, seismic bracing zone ratings, vapor barriers, perimeter standoff distance.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-amber-400 block mb-1">2. Electrical</span>
          <p class="text-xs text-slate-300">Dual diverse utility substation feeds, emergency standby diesel generators with 72-96hr onsite fuel storage, 2N static transfer switches, harmonic filtering.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-purple-400 block mb-1">3. Mechanical (Cooling)</span>
          <p class="text-xs text-slate-300">Continuous cooling thermal storage tanks, CRAH/CRAC dual loops, sensible heat ratio calculation, leak detection under raised floors.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-emerald-400 block mb-1">4. Telecommunications</span>
          <p class="text-xs text-slate-300">Diverse carrier entrance rooms (Carrier A & B physically separated), structured cabling MDA -> HDA -> EDA, OM4/OM5 multimode and OS2 single-mode fiber.</p>
        </div>
      </div>
    `
  },
  {
    id: "fac-power-architecture",
    track: "facilities",
    domain: "Power & Electrical",
    title: "Mission-Critical Power Path: From MV Substation to Rack PDU",
    subtitle: "Transformers, ATS, Emergency Generators, 2N UPS, PDUs and 3-Phase Phase Balancing",
    summary: "Complete blueprint of the multi-megawatt electrical distribution chain delivering clean, continuous, redundant alternating current to compute loads.",
    diagramType: "powerDistributionPath",
    readingTime: "14 min read",
    tags: ["Power", "Medium Voltage", "Transformers", "Generators", "UPS", "PDU", "2N Redundancy", "ATS"],
    content: `
      <h3>1. The End-to-End Electrical Distribution Path</h3>
      <p>Data center electrical engineering is designed to deliver continuous, conditioned sine-wave power through cascading stages of voltage step-down and backup isolation:</p>

      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 my-4 space-y-2">
        <p class="text-cyan-400 font-bold">[Utility Grid Feed A & B (11kV / 33kV Medium Voltage)]</p>
        <p class="pl-4">&darr; Ring Main Unit (RMU) & MV Switchgear</p>
        <p class="pl-4">&darr; Step-down Cast Resin Transformers (11kV &rarr; 415V/400V 3-Phase)</p>
        <p class="pl-4">&darr; Automatic Transfer Switch (ATS) &larr; [Diesel Rotary/Turbine Generators (N+1)]</p>
        <p class="pl-4">&darr; Main Switchboard (MSB / Low Voltage Switchgear)</p>
        <p class="pl-4">&darr; Static Uninterruptible Power Supply (UPS Line A & Line B in 2N configuration)</p>
        <p class="pl-4">&darr; Power Distribution Units (PDU / Isolation Transformers & Remote Power Panels)</p>
        <p class="pl-4">&darr; Overhead Busway Track (Starline / EAE 250A-400A continuous bus)</p>
        <p class="pl-4">&darr; Dual Intelligent Rack PDUs (ePDU A & ePDU B)</p>
        <p class="text-emerald-400 font-bold pl-4">&rarr; Server Dual Redundant Power Supplies (PSU1 & PSU2 Active-Active)</p>
      </div>

      <h3>2. Generator Backup & Fuel Systems</h3>
      <p>Standby diesel generators are the ultimate insurance against utility grid blackout. Key engineering design rules include:</p>
      <ul class="list-disc pl-6 space-y-1.5 text-slate-300">
        <li><strong>Continuous vs. Standby Rating:</strong> Uptime Institute requires generators to be rated for <em>continuous operation</em> at the design IT load without runtime limits.</li>
        <li><strong>Start & Transfer Time:</strong> Fast-start engines must reach rated RPM and synchronize in under <strong>10 to 15 seconds</strong> before the ATS switches over.</li>
        <li><strong>Fuel Autonomy:</strong> Tier III and IV data centers require a minimum of <strong>72 to 96 hours</strong> of continuous on-site diesel fuel storage, with automated dual day-tanks and fuel polishing systems to prevent microbial contamination.</li>
      </ul>

      <h3 class="mt-6">3. UPS Systems: Static Double-Conversion vs Flywheel</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-cyan-400 font-bold mb-1">Static Double-Conversion (VFI)</h4>
          <p class="text-xs text-slate-300 mb-2">Converts AC &rarr; DC (charging Lithium-ion or VRLA battery bank) &rarr; inverted back to pure sine-wave AC. Provides 0ms transfer time and total galvanic isolation from utility voltage sags, surges, and harmonics.</p>
          <span class="text-[11px] text-emerald-400 font-mono">Efficiency: 96-97% (Eco-mode 99%)</span>
        </div>
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-amber-400 font-bold mb-1">Rotary / Dynamic UPS (DRUPS)</h4>
          <p class="text-xs text-slate-300 mb-2">Employs a massive spinning flywheel kinetic energy storage coupled directly to a diesel engine via an electromagnetic clutch. Zero chemical batteries, rugged, ideal for extreme climates.</p>
          <span class="text-[11px] text-amber-400 font-mono">Ride-through: 15-30 seconds kinetic energy</span>
        </div>
      </div>

      <h3 class="mt-6">4. 3-Phase Rack Power & Phase Balancing</h3>
      <p>In high-density server racks (15kW to 40kW+), single-phase power leads to unmanageable cable bulk and neutral conductor overheating. Modern data centers deploy <strong>3-Phase 415V (Phase-to-Phase) / 240V (Phase-to-Neutral)</strong> or <strong>208V / 120V</strong> directly to the rack PDU. Maintaining phase balance (within 5-10% across L1, L2, L3) is critical to prevent neutral current overload and transformer derating.</p>
    `
  },
  {
    id: "fac-cooling-thermodynamics",
    track: "facilities",
    domain: "Cooling & Thermal",
    title: "Thermodynamics, Airflow Management & ASHRAE TC 9.9",
    subtitle: "Psychrometric Envelope, CRAC vs CRAH, Chilled Water Loops and Containment Physics",
    summary: "Mastering heat rejection: why preventing hot and cold air mixing is the single highest ROI lever in data center operational efficiency.",
    diagramType: "thermalContainment",
    readingTime: "11 min read",
    tags: ["Cooling", "ASHRAE TC 9.9", "Hot Aisle Containment", "Cold Aisle Containment", "CRAC", "CRAH", "Economizer"],
    content: `
      <h3>1. ASHRAE TC 9.9 Environmental Guidelines</h3>
      <p>The American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) Technical Committee 9.9 establishes the environmental operating envelope for server reliability:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-lg bg-slate-900 border border-cyan-800/40">
          <h4 class="text-cyan-400 font-bold text-sm mb-2">Recommended Envelope (Class A1 - A4)</h4>
          <ul class="text-xs space-y-1.5 text-slate-300 font-mono">
            <li>• Server Inlet Temp: <strong>18°C to 27°C (64.4°F to 80.6°F)</strong></li>
            <li>• Low Moisture limit: <strong>5.5°C (41.9°F) Dew Point</strong></li>
            <li>• High Moisture limit: <strong>60% RH & 15°C (59°F) Dew Point</strong></li>
            <li>• Max Rate of Change: <strong>5°C (9°F) per hour</strong></li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-slate-900 border border-amber-800/40">
          <h4 class="text-amber-400 font-bold text-sm mb-2">Allowable Envelope (Class A1)</h4>
          <ul class="text-xs space-y-1.5 text-slate-300 font-mono">
            <li>• Server Inlet Temp: <strong>15°C to 32°C (59°F to 89.6°F)</strong></li>
            <li>• Relative Humidity: <strong>20% to 80% RH</strong></li>
            <li>• Max Dew Point: <strong>17°C (62.6°F)</strong></li>
            <li>• Elevated temps allow free cooling economization</li>
          </ul>
        </div>
      </div>

      <h3>2. Hot Aisle vs. Cold Aisle Containment (HAC vs CAC)</h3>
      <p>Uncontained data centers suffer from two thermal pathologies: <em>air recirculation</em> (hot exhaust entering server intakes) and <em>air bypass</em> (conditioned cold air dumping straight back to the cooling unit without cooling any equipment).</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-emerald-400 font-bold text-sm mb-1">Cold Aisle Containment (CAC)</h4>
          <p class="text-xs text-slate-300 mb-2">Roof panels and end-of-row doors seal the cold aisle directly over the perforated raised floor tiles. The rest of the room becomes a large hot air return plenum.</p>
          <span class="text-[11px] text-slate-400">Pros: Easy to retrofit into existing raised-floor rooms. Cons: Server room ambient is warm for technicians.</span>
        </div>
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-cyan-400 font-bold text-sm mb-1">Hot Aisle Containment (HAC) - Industry Preferred</h4>
          <p class="text-xs text-slate-300 mb-2">The hot exhaust aisle is fully enclosed with a vertical chimney or ceiling plenum ducting 38°C-45°C air straight to CRAH return intakes. The open room stays comfortable at 22°C-24°C.</p>
          <span class="text-[11px] text-slate-400">Pros: Higher delta-T (&Delta;T) across cooling coils boosts CRAH thermodynamic efficiency by up to 35%.</span>
        </div>
      </div>

      <h3 class="mt-6">3. CRAC vs. CRAH Systems</h3>
      <ul class="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>CRAC (Computer Room Air Conditioner):</strong> Direct Expansion (DX) refrigeration cycle with compressors, refrigerant gas (R410A), and outdoor air-cooled condensers. Typical for smaller facilities (< 500kW).</li>
        <li><strong>CRAH (Computer Room Air Handler):</strong> Uses chilled water pumped from central chiller plants through high-efficiency cooling coils and EC (electronically commutated) variable-speed fans. Deployed in hyperscale data centers due to massive energy efficiency.</li>
      </ul>
    `
  },
  {
    id: "fac-liquid-cooling-ai",
    track: "facilities",
    domain: "Cooling & Thermal",
    title: "Liquid Cooling Architecture for AI & High-Density Compute",
    subtitle: "Direct-to-Chip (D2C), Rear-Door Heat Exchangers, and Immersion Cooling for 40kW - 100kW+ Racks",
    summary: "Air cooling hits a physical wall at ~35-40kW per rack. Explore how dielectric fluids and water-cooled cold plates empower NVIDIA H100/B200 clusters and reduce PUE below 1.10.",
    diagramType: "liquidCoolingLoop",
    readingTime: "13 min read",
    tags: ["Liquid Cooling", "Direct-to-Chip", "Immersion", "CDU", "AI SuperPOD", "NVIDIA H100", "PUE"],
    content: `
      <h3>1. Why Air Cooling Fails for Modern AI Workloads</h3>
      <p>Modern GPUs and AI accelerators (such as the NVIDIA H100 SXM5, Blackwell B200, and Google TPU v5p) consume between 700W and 1,200W per chip. An 8-GPU chassis draws over 10.2 kW in a compact 8U chassis. A single rack packed with 4 to 6 compute shelves draws between <strong>60kW and 120kW</strong>.</p>
      <p class="mt-2 text-slate-300">Air has a volumetric heat capacity of only <strong>1.2 kJ/m³·K</strong>, whereas water has a heat capacity of <strong>4,184 kJ/m³·K</strong>—water is over <strong>3,500 times more effective at transporting heat per unit volume</strong> than air. Air heatsinks cannot physically fit inside rack limits to dissipate 100kW without sonic fan noise and astronomical pumping power.</p>

      <h3 class="mt-6">2. The Three Primary Liquid Cooling Topologies</h3>
      <div class="space-y-4 my-4">
        <!-- Tech 1 -->
        <div class="p-4 rounded-xl bg-slate-900 border border-cyan-800/50">
          <div class="flex items-center justify-between">
            <h4 class="text-cyan-400 font-bold text-sm">1. Direct-to-Chip (D2C) Cold Plate Liquid Cooling</h4>
            <span class="text-xs font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">Industry Mainstream</span>
          </div>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">
            Micro-channel copper cold plates are mounted directly atop the GPU and CPU heat spreaders. Conditioned coolant (treated water-glycol solution) circulates through flexible stainless steel braided hoses. A <strong>Coolant Distribution Unit (CDU)</strong> with plate heat exchangers isolates the sensitive Secondary IT loop from the primary facility chilled water loop.
          </p>
          <div class="mt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
            <span>Rack Density: 40kW - 80kW</span> &bull; 
            <span>Fluid: Treated PG25 / Distilled Water</span> &bull; 
            <span>PUE Impact: ~1.15</span>
          </div>
        </div>

        <!-- Tech 2 -->
        <div class="p-4 rounded-xl bg-slate-900 border border-purple-800/50">
          <div class="flex items-center justify-between">
            <h4 class="text-purple-400 font-bold text-sm">2. Rear-Door Heat Exchangers (RDHx)</h4>
            <span class="text-xs font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800">Hybrid Retrofit</span>
          </div>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">
            A liquid-cooled radiator replaces the standard perforated rear door of a 19-inch rack. Server internal fans push hot exhaust through the chilled water coil, cooling the air back to room ambient temperature before it enters the room (a "room-neutral" rack).
          </p>
          <div class="mt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
            <span>Rack Density: 25kW - 50kW</span> &bull; 
            <span>No changes to server motherboard</span>
          </div>
        </div>

        <!-- Tech 3 -->
        <div class="p-4 rounded-xl bg-slate-900 border border-emerald-800/50">
          <div class="flex items-center justify-between">
            <h4 class="text-emerald-400 font-bold text-sm">3. Single-Phase & Two-Phase Immersion Cooling</h4>
            <span class="text-xs font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">Extreme HPC / 100kW+</span>
          </div>
          <p class="text-xs text-slate-300 mt-2 leading-relaxed">
            Servers are stripped of fans and submerged horizontally into open-bath tanks filled with non-conductive, dielectric synthetic hydrocarbons or fluorochemical liquids. In two-phase systems, fluid boils at 50°C, vaporizes, rises to a condenser coil, and drips back down.
          </p>
          <div class="mt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-400">
            <span>Rack Density: 100kW - 250kW+</span> &bull; 
            <span>PUE: 1.02 - 1.05</span> &bull; 
            <span>100% fan-less operation</span>
          </div>
        </div>
      </div>

      <h3 class="mt-6">3. Facility Integration & Heat Reuse</h3>
      <p>Liquid cooling returns water at <strong>45°C to 60°C (113°F to 140°F)</strong>. This hot water enables year-round 100% free dry-cooler heat rejection without running electrical chillers, drastically slashing OpEx. Furthermore, modern European and Nordic data centers pipe this 55°C output into municipal district heating grids to heat homes and greenhouses.</p>
    `
  },
  {
    id: "fac-structured-cabling",
    track: "facilities",
    domain: "Cabling & Physical Layer",
    title: "Structured Cabling Architecture & High-Speed Optics",
    subtitle: "ANSI/TIA-942 MDA/HDA/EDA Hierarchy, MPO/MTP Fiber, and 100G/400G/800G Transceivers",
    summary: "From physical patch fields to multi-fiber push-on connectors: engineering structured fiber plant for zero downtime and migration to 800G.",
    diagramType: "cablingHierarchy",
    readingTime: "10 min read",
    tags: ["Cabling", "TIA-942", "MPO", "MTP", "Single-mode", "Multimode", "QSFP-DD", "OSFP", "DAC", "AOC"],
    content: `
      <h3>1. ANSI/TIA-942 Structured Cabling Topology</h3>
      <p>Data center cabling is organized into functional hierarchical spaces to ensure scalability, ease of tracing, and cable containment:</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-4">
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-cyan-400 block font-mono">ER (Entrance Room)</span>
          <p class="text-[11px] text-slate-300 mt-1">Demarcation point for external telco carriers, dark fiber enters through diverse physical conduit entry points.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-emerald-400 block font-mono">MDA (Main Dist. Area)</span>
          <p class="text-[11px] text-slate-300 mt-1">Central cross-connect hub housing core routing switches, spine director switches, and central fiber distribution patch panels.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-amber-400 block font-mono">HDA (Horiz. Dist. Area)</span>
          <p class="text-[11px] text-slate-300 mt-1">Intermediate distribution point serving a row or pod of racks; houses leaf switches, SAN director blades, or passive patch panels.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-xs font-bold text-purple-400 block font-mono">EDA (Equip. Dist. Area)</span>
          <p class="text-[11px] text-slate-300 mt-1">The end equipment rack where servers, blade chassis, and storage shelves receive connectivity via patch cords.</p>
        </div>
      </div>

      <h3>2. Fiber Optics: Single-Mode (OS2) vs. Multimode (OM4 / OM5)</h3>
      <div class="overflow-x-auto my-3">
        <table class="w-full text-left text-xs text-slate-300 border border-slate-800">
          <thead class="bg-slate-900 text-cyan-400 font-mono">
            <tr>
              <th class="p-2.5 border-b border-slate-800">Fiber Type</th>
              <th class="p-2.5 border-b border-slate-800">Core Size</th>
              <th class="p-2.5 border-b border-slate-800">Wavelength</th>
              <th class="p-2.5 border-b border-slate-800">Max Reach (100G)</th>
              <th class="p-2.5 border-b border-slate-800">Application</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr>
              <td class="p-2.5 font-bold text-white">OM4 (Laser-Optimized MMF)</td>
              <td class="p-2.5 font-mono">50 &mu;m</td>
              <td class="p-2.5 font-mono">850 nm (VCSEL)</td>
              <td class="p-2.5">100 meters (SR4)</td>
              <td class="p-2.5">Intra-row and top-of-rack patching. Economical transceivers.</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold text-white">OM5 (Wideband MMF)</td>
              <td class="p-2.5 font-mono">50 &mu;m</td>
              <td class="p-2.5 font-mono">850 - 953 nm</td>
              <td class="p-2.5">150 meters (SWDM4)</td>
              <td class="p-2.5">Supports Short Wavelength Division Multiplexing over 2 fibers.</td>
            </tr>
            <tr>
              <td class="p-2.5 font-bold text-cyan-300">OS2 (Single-Mode Fiber)</td>
              <td class="p-2.5 font-mono">9 &mu;m</td>
              <td class="p-2.5 font-mono">1310 nm / 1550 nm</td>
              <td class="p-2.5 font-semibold text-emerald-400">Up to 10 km (LR4) / 40 km (ER4)</td>
              <td class="p-2.5">Hyperscale DC spine-leaf backbones, campus runs, DCI interconnects. Mandatory for 400G/800G+ reaches.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="mt-6">3. MPO/MTP Connectors & Breakout Cabling</h3>
      <p>Traditional LC duplex connections are insufficient for 100G, 400G, and 800G parallel optics. High-density networks utilize <strong>MPO-12, MPO-16, and MPO-24 (Multi-fiber Push-On)</strong> connectors. For example, 100GBASE-SR4 transmits over 4 parallel Tx fibers and 4 Rx fibers using an MPO-12 trunk cable.</p>

      <h3 class="mt-6">4. Interconnect Choices: DAC vs. AOC vs. Optical Transceivers</h3>
      <ul class="list-disc pl-6 space-y-1.5 text-slate-300 text-xs">
        <li><strong>Direct Attach Copper (DAC):</strong> Passive copper twinax cable with fixed transceiver ends. Zero latency, almost 0W power consumption, but limited to short reaches (under 3 to 5 meters). Ideal for Top-of-Rack (ToR) server uplinks.</li>
        <li><strong>Active Optical Cable (AOC):</strong> Lightweight multimode fiber with permanently bonded transceivers. Lighter than DAC, reaches up to 100m, immune to electromagnetic interference (EMI).</li>
        <li><strong>Optical Transceivers (QSFP28, QSFP-DD, OSFP):</strong> Pluggable modules allowing field replacement of transceivers and flexible patching via structured LC/MPO cabling. Required for spine-to-spine and inter-pod connectivity.</li>
      </ul>
    `
  },
  {
    id: "fac-fire-life-safety",
    track: "facilities",
    domain: "Fire Safety & DCIM",
    title: "Fire Detection, Clean Agent Suppression & Environmental Safety",
    subtitle: "VESDA Aspirating Detection, Novec 1230 / FM-200 Clean Agents, Pre-Action Sprinklers",
    summary: "How mission-critical facilities suppress fire in seconds without water damage or downtime to delicate IT electronics.",
    diagramType: "fireSuppression",
    readingTime: "9 min read",
    tags: ["Fire Suppression", "VESDA", "Clean Agent", "Novec 1230", "FM-200", "Pre-Action", "EPO"],
    content: `
      <h3>1. Very Early Smoke Detection Apparatus (VESDA)</h3>
      <p>Standard spot smoke detectors respond only after visible smoke accumulates, which is too late to prevent thermal damage to electronics. Data centers deploy <strong>Aspirating Smoke Detection (ASD)</strong>, such as VESDA:</p>
      <ul class="list-disc pl-6 space-y-1.5 text-slate-300">
        <li>A network of sampling pipes continuously draws air samples from server rack exhausts, return plenums, and ceiling voids.</li>
        <li>High-sensitivity laser chambers detect sub-micron smoke particles released during the smoldering phase (overheating wire insulation) long before actual combustion flames appear.</li>
        <li>Multi-stage alarms: <em>Alert &rarr; Action &rarr; Fire 1 &rarr; Fire 2</em> give operations staff valuable minutes to isolate the overheating server PSU before fire suppression triggers.</li>
      </ul>

      <h3 class="mt-6">2. Clean Agent Gas Suppression Systems</h3>
      <p>Water conducts electricity and destroys energized computer hardware. Critical rooms are protected by clean gaseous agents that extinguish fires within <strong>10 seconds</strong> of release without leaving chemical residue or depleting oxygen to lethal human levels:</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-cyan-400 font-bold text-xs mb-1">Novec 1230 (FK-5-1-12)</h4>
          <p class="text-[11px] text-slate-300">Fluoroketone liquid that vaporizes upon discharge. Absorbs heat faster than combustion can sustain. Zero ozone depletion, 1-day atmospheric lifetime, safest for occupied rooms.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-amber-400 font-bold text-xs mb-1">FM-200 (HFC-227ea)</h4>
          <p class="text-[11px] text-slate-300">Halocarbon gas that chemically disrupts the combustion chain reaction. Extinguishes class A, B, and C fires in under 10 seconds. Stored as compressed liquid with nitrogen propellant.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-emerald-400 font-bold text-xs mb-1">Inergen (IG-541)</h4>
          <p class="text-[11px] text-slate-300">Inert gas mixture (52% Nitrogen, 40% Argon, 8% CO2). Lowers oxygen level from 21% down to ~12.5% to snuff out fire, while CO2 stimulates human respiration rate for safe occupant egress.</p>
        </div>
      </div>

      <h3 class="mt-6">3. Double-Interlock Pre-Action Sprinkler Systems</h3>
      <p>Building codes require physical water sprinkler systems as a secondary backstop. To prevent catastrophic accidental pipe bursts or sprinkler head damage, data centers strictly employ <strong>Double-Interlock Pre-Action Systems</strong>:</p>
      <ul class="list-disc pl-6 space-y-1.5 text-slate-300">
        <li>The sprinkler pipes over server racks are filled with compressed air, NOT water ("dry pipe").</li>
        <li>Two independent events must occur simultaneously before water charges the pipes:
          <ol class="list-decimal pl-6 mt-1 space-y-1 text-slate-400">
            <li>Electronic cross-zoned smoke detection triggers the pre-action solenoid valve.</li>
            <li>Physical heat melts the thermal fusible bulb on the specific sprinkler head, dropping air pressure.</li>
          </ol>
        </li>
        <li>Even if a contractor accidentally snaps a sprinkler head, only harmless compressed air escapes; no water flows.</li>
      </ul>
    `
  }
];
