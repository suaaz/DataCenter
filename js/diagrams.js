/**
 * DataCenterCore.io - Architectural SVG Visualizations
 * Dynamic vector diagrams for Power Paths, Spine-Leaf Clos, Thermal Containment & Liquid Loops
 */

const DataCenterDiagrams = {
  /**
   * 1. 2-Stage Clos Spine-Leaf Network Fabric Diagram
   */
  spineLeafFabric: function() {
    return `
      <div class="w-full overflow-x-auto p-4 bg-slate-950/80 rounded-xl border border-slate-800">
        <svg viewBox="0 0 800 380" class="w-full max-w-3xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="spineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0891b2" />
              <stop offset="100%" stop-color="#0e7490" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#059669" />
              <stop offset="100%" stop-color="#047857" />
            </linearGradient>
            <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1e293b" />
              <stop offset="100%" stop-color="#0f172a" />
            </linearGradient>
            <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Title Bar -->
          <text x="400" y="24" fill="#38bdf8" font-family="Inter, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            2-Stage Clos Fabric: Non-Blocking Bisectional Bandwidth (ECMP)
          </text>
          <text x="400" y="42" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="11" text-anchor="middle">
            Every Leaf Connects to Every Spine • Uniform 3-Hop Latency
          </text>

          <!-- Interconnect Mesh Lines (Leaf to Spine) -->
          <!-- Leaf 1 (x:130) to Spines -->
          <line x1="130" y1="180" x2="260" y2="90" stroke="#334155" stroke-width="1.5" />
          <line x1="130" y1="180" x2="400" y2="90" stroke="#06b6d4" stroke-width="2" class="flow-dash" opacity="0.8" />
          <line x1="130" y1="180" x2="540" y2="90" stroke="#334155" stroke-width="1.5" />

          <!-- Leaf 2 (x:310) to Spines -->
          <line x1="310" y1="180" x2="260" y2="90" stroke="#334155" stroke-width="1.5" />
          <line x1="310" y1="180" x2="400" y2="90" stroke="#334155" stroke-width="1.5" />
          <line x1="310" y1="180" x2="540" y2="90" stroke="#334155" stroke-width="1.5" />

          <!-- Leaf 3 (x:490) to Spines -->
          <line x1="490" y1="180" x2="260" y2="90" stroke="#334155" stroke-width="1.5" />
          <line x1="490" y1="180" x2="400" y2="90" stroke="#334155" stroke-width="1.5" />
          <line x1="490" y1="180" x2="540" y2="90" stroke="#334155" stroke-width="1.5" />

          <!-- Leaf 4 (x:670) to Spines -->
          <line x1="670" y1="180" x2="260" y2="90" stroke="#334155" stroke-width="1.5" />
          <line x1="670" y1="180" x2="400" y2="90" stroke="#06b6d4" stroke-width="2" class="flow-dash" opacity="0.8" />
          <line x1="670" y1="180" x2="540" y2="90" stroke="#334155" stroke-width="1.5" />

          <!-- Server Access Links -->
          <!-- Servers under Leaf 1 -->
          <line x1="130" y1="220" x2="100" y2="280" stroke="#06b6d4" stroke-width="2" class="flow-dash" />
          <line x1="130" y1="220" x2="160" y2="280" stroke="#334155" stroke-width="1.5" />
          <!-- Servers under Leaf 4 -->
          <line x1="670" y1="220" x2="640" y2="280" stroke="#334155" stroke-width="1.5" />
          <line x1="670" y1="220" x2="700" y2="280" stroke="#06b6d4" stroke-width="2" class="flow-dash" />

          <!-- ================= SPINES ================= -->
          <!-- Spine 1 -->
          <g transform="translate(200, 65)">
            <rect width="120" height="46" rx="8" fill="url(#spineGrad)" stroke="#22d3ee" stroke-width="1.5" />
            <text x="60" y="24" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Spine-01 (Nexus 9332D)</text>
            <text x="60" y="38" fill="#cffafe" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">32x 400G • ASN 65100</text>
          </g>

          <!-- Spine 2 -->
          <g transform="translate(340, 65)">
            <rect width="120" height="46" rx="8" fill="url(#spineGrad)" stroke="#22d3ee" stroke-width="2" filter="url(#glowCyan)" />
            <text x="60" y="24" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Spine-02 (Transit)</text>
            <text x="60" y="38" fill="#cffafe" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">32x 400G • ASN 65100</text>
          </g>

          <!-- Spine 3 -->
          <g transform="translate(480, 65)">
            <rect width="120" height="46" rx="8" fill="url(#spineGrad)" stroke="#22d3ee" stroke-width="1.5" />
            <text x="60" y="24" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Spine-03 (Nexus 9332D)</text>
            <text x="60" y="38" fill="#cffafe" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">32x 400G • ASN 65100</text>
          </g>

          <!-- ================= LEAFS ================= -->
          <!-- Leaf 1 -->
          <g transform="translate(70, 180)">
            <rect width="120" height="46" rx="8" fill="url(#leafGrad)" stroke="#34d399" stroke-width="2" />
            <text x="60" y="22" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Leaf-01 (VTEP-1)</text>
            <text x="60" y="36" fill="#a7f3d0" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">ASN 65001 • VNI 10010</text>
          </g>

          <!-- Leaf 2 -->
          <g transform="translate(250, 180)">
            <rect width="120" height="46" rx="8" fill="url(#leafGrad)" stroke="#34d399" stroke-width="1.5" />
            <text x="60" y="22" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Leaf-02 (VTEP-2)</text>
            <text x="60" y="36" fill="#a7f3d0" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">ASN 65002 • VNI 10010</text>
          </g>

          <!-- Leaf 3 -->
          <g transform="translate(430, 180)">
            <rect width="120" height="46" rx="8" fill="url(#leafGrad)" stroke="#34d399" stroke-width="1.5" />
            <text x="60" y="22" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Leaf-03 (VTEP-3)</text>
            <text x="60" y="36" fill="#a7f3d0" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">ASN 65003 • VNI 10020</text>
          </g>

          <!-- Leaf 4 -->
          <g transform="translate(610, 180)">
            <rect width="120" height="46" rx="8" fill="url(#leafGrad)" stroke="#34d399" stroke-width="2" />
            <text x="60" y="22" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Leaf-04 (VTEP-4)</text>
            <text x="60" y="36" fill="#a7f3d0" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">ASN 65004 • VNI 10010</text>
          </g>

          <!-- ================= COMPUTE SERVERS ================= -->
          <!-- Server A (under Leaf 1) -->
          <g transform="translate(50, 280)">
            <rect width="100" height="40" rx="6" fill="url(#serverGrad)" stroke="#06b6d4" stroke-width="1.5" />
            <text x="50" y="20" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">VM-A (Source)</text>
            <text x="50" y="32" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">10.10.1.50</text>
          </g>

          <!-- Server B (under Leaf 4) -->
          <g transform="translate(650, 280)">
            <rect width="100" height="40" rx="6" fill="url(#serverGrad)" stroke="#06b6d4" stroke-width="1.5" />
            <text x="50" y="20" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">VM-B (Dest)</text>
            <text x="50" y="32" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">10.10.1.99</text>
          </g>

          <!-- Dynamic Flow Legend -->
          <g transform="translate(250, 345)">
            <rect width="300" height="24" rx="12" fill="#0b1329" stroke="#1e293b" />
            <circle cx="20" cy="12" r="4" fill="#06b6d4" />
            <text x="32" y="16" fill="#94a3b8" font-family="Inter, sans-serif" font-size="10">Active Packet Path: Source &rarr; Leaf-1 &rarr; Spine-2 &rarr; Leaf-4 &rarr; Dest</text>
          </g>
        </svg>
      </div>
    `;
  },

  /**
   * 2. End-to-End 2N Dual Power Path Architecture Diagram
   */
  powerDistributionPath: function() {
    return `
      <div class="w-full overflow-x-auto p-4 bg-slate-950/80 rounded-xl border border-slate-800">
        <svg viewBox="0 0 820 420" class="w-full max-w-3xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridPower" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#d97706" />
            </linearGradient>
            <linearGradient id="upsPath" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0284c7" />
              <stop offset="100%" stop-color="#0369a1" />
            </linearGradient>
          </defs>

          <!-- Title -->
          <text x="410" y="22" fill="#fbbf24" font-family="Inter, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            Fault-Tolerant 2N Electrical Power Distribution Architecture
          </text>
          <text x="410" y="38" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">
            Complete Galvanic & Physical Separation from Substation to Dual Server PSUs
          </text>

          <!-- ================= UTILITY GRID & GENERATOR ================= -->
          <!-- Utility Grid Feed A -->
          <g transform="translate(140, 55)">
            <rect width="150" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
            <text x="75" y="20" fill="#fbbf24" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Utility Grid Feed A</text>
            <text x="75" y="32" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">11kV Medium Voltage</text>
          </g>

          <!-- Utility Grid Feed B -->
          <g transform="translate(530, 55)">
            <rect width="150" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
            <text x="75" y="20" fill="#fbbf24" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Utility Grid Feed B</text>
            <text x="75" y="32" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">11kV Diverse Substation</text>
          </g>

          <!-- Diesel Gen Plant -->
          <g transform="translate(335, 80)">
            <rect width="150" height="40" rx="6" fill="#451a03" stroke="#f97316" stroke-width="1.5" />
            <text x="75" y="20" fill="#fdba74" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Diesel Gen Plant (N+1)</text>
            <text x="75" y="32" fill="#fca5a5" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">72-Hour Fuel On-Site</text>
          </g>

          <!-- Power lines to ATS -->
          <line x1="215" y1="95" x2="215" y2="150" stroke="#f59e0b" stroke-width="2" class="power-flow" />
          <line x1="605" y1="95" x2="605" y2="150" stroke="#f59e0b" stroke-width="2" class="power-flow" />
          <line x1="370" y1="120" x2="245" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 4" />
          <line x1="450" y1="120" x2="575" y2="150" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="4 4" />

          <!-- ================= ATS & TRANSFORMERS ================= -->
          <g transform="translate(140, 150)">
            <rect width="150" height="38" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
            <text x="75" y="18" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">ATS-A & Transformer</text>
            <text x="75" y="30" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">Step-down: 11kV &rarr; 415V</text>
          </g>

          <g transform="translate(530, 150)">
            <rect width="150" height="38" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" />
            <text x="75" y="18" fill="#e0f2fe" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">ATS-B & Transformer</text>
            <text x="75" y="30" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">Step-down: 11kV &rarr; 415V</text>
          </g>

          <line x1="215" y1="188" x2="215" y2="225" stroke="#38bdf8" stroke-width="2" class="power-flow" />
          <line x1="605" y1="188" x2="605" y2="225" stroke="#38bdf8" stroke-width="2" class="power-flow" />

          <!-- ================= 2N STATIC UPS SYSTEMS ================= -->
          <g transform="translate(130, 225)">
            <rect width="170" height="48" rx="8" fill="url(#upsPath)" stroke="#22d3ee" stroke-width="2" />
            <text x="85" y="20" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">UPS System 'A' (1.5 MW)</text>
            <text x="85" y="34" fill="#a5f3fc" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Lithium-ion Battery Bank</text>
            <text x="85" y="44" fill="#67e8f9" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">Power Path A (Active)</text>
          </g>

          <g transform="translate(520, 225)">
            <rect width="170" height="48" rx="8" fill="url(#upsPath)" stroke="#22d3ee" stroke-width="2" />
            <text x="85" y="20" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">UPS System 'B' (1.5 MW)</text>
            <text x="85" y="34" fill="#a5f3fc" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Lithium-ion Battery Bank</text>
            <text x="85" y="44" fill="#67e8f9" font-family="Inter, sans-serif" font-size="8" text-anchor="middle">Power Path B (Active)</text>
          </g>

          <line x1="215" y1="273" x2="215" y2="305" stroke="#22d3ee" stroke-width="2" class="power-flow" />
          <line x1="605" y1="273" x2="605" y2="305" stroke="#22d3ee" stroke-width="2" class="power-flow" />

          <!-- ================= RACK BUSWAYS & ePDUs ================= -->
          <g transform="translate(140, 305)">
            <rect width="150" height="34" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="75" y="16" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Overhead Busway A</text>
            <text x="75" y="28" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">Intelligent Rack ePDU-A</text>
          </g>

          <g transform="translate(530, 305)">
            <rect width="150" height="34" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="75" y="16" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Overhead Busway B</text>
            <text x="75" y="28" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">Intelligent Rack ePDU-B</text>
          </g>

          <line x1="215" y1="339" x2="330" y2="375" stroke="#38bdf8" stroke-width="1.5" class="power-flow" />
          <line x1="605" y1="339" x2="490" y2="375" stroke="#38bdf8" stroke-width="1.5" class="power-flow" />

          <!-- ================= END EQUIPMENT: DUAL POWER SUPPLIES ================= -->
          <g transform="translate(300, 360)">
            <rect width="220" height="44" rx="8" fill="#030712" stroke="#10b981" stroke-width="2" />
            <text x="110" y="20" fill="#ffffff" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Critical IT Server Chassis</text>
            <text x="110" y="34" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">PSU 1 (Feed A) | PSU 2 (Feed B)</text>
          </g>
        </svg>
      </div>
    `;
  },

  /**
   * 3. Hot Aisle vs Cold Aisle Thermal Flow Diagram
   */
  thermalContainment: function() {
    return `
      <div class="w-full overflow-x-auto p-4 bg-slate-950/80 rounded-xl border border-slate-800">
        <svg viewBox="0 0 800 360" class="w-full max-w-3xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <text x="400" y="22" fill="#38bdf8" font-family="Inter, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            Thermodynamics & Airflow Containment: HAC vs CAC Physics
          </text>
          <text x="400" y="38" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">
            Cold Supply Plenum (18°-22°C) vs Enclosed Hot Exhaust Plenum (38°-45°C)
          </text>

          <!-- Raised Floor Ground -->
          <rect x="50" y="300" width="700" height="20" fill="#1e293b" />
          <text x="400" y="315" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Subfloor Cold Air Supply Plenum (Static Pressure)</text>

          <!-- Perforated Tile 1 -->
          <rect x="230" y="295" width="80" height="8" fill="#0284c7" />
          <!-- Perforated Tile 2 -->
          <rect x="490" y="295" width="80" height="8" fill="#0284c7" />

          <!-- Cold Air Vectors rising from floor -->
          <line x1="270" y1="290" x2="270" y2="180" stroke="#38bdf8" stroke-width="2" class="cold-air-flow" />
          <line x1="530" y1="290" x2="530" y2="180" stroke="#38bdf8" stroke-width="2" class="cold-air-flow" />

          <!-- CRAH Unit on Left -->
          <g transform="translate(60, 100)">
            <rect width="90" height="195" rx="6" fill="#0f172a" stroke="#0284c7" stroke-width="2" />
            <text x="45" y="30" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">CRAH Unit</text>
            <text x="45" y="50" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">EC Fans</text>
            <text x="45" y="70" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">Chilled Water</text>
            <!-- Cold supply arrow downwards -->
            <path d="M 45 130 L 45 180 M 35 170 L 45 180 L 55 170" stroke="#38bdf8" stroke-width="2" fill="none" />
            <text x="45" y="120" fill="#38bdf8" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Supply &darr;</text>
          </g>

          <!-- Rack Row 1 (Intake faces left, Exhaust faces right) -->
          <g transform="translate(180, 110)">
            <rect width="60" height="185" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
            <text x="30" y="90" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 30 90)">Rack Row 1 (42U)</text>
          </g>

          <!-- Rack Row 2 (Exhaust faces left, Intake faces right) -->
          <g transform="translate(340, 110)">
            <rect width="60" height="185" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
            <text x="30" y="90" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 30 90)">Rack Row 2 (42U)</text>
          </g>

          <!-- ================= CONTAINED HOT AISLE (BETWEEN ROW 1 & ROW 2) ================= -->
          <rect x="245" y="110" width="90" height="185" fill="#f97316" fill-opacity="0.12" stroke="#f97316" stroke-width="1" stroke-dasharray="4 4" />
          <text x="290" y="140" fill="#fb923c" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">HOT AISLE</text>
          <text x="290" y="156" fill="#fdba74" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">38°C - 45°C</text>

          <!-- Hot Exhaust Vectors Rising to Ceiling -->
          <line x1="290" y1="260" x2="290" y2="75" stroke="#f97316" stroke-width="2.5" class="hot-air-flow" />

          <!-- Ceiling Chimney Plenum -->
          <rect x="235" y="55" width="110" height="35" rx="4" fill="#431407" stroke="#ea580c" />
          <text x="290" y="75" fill="#fed7aa" font-family="Inter, sans-serif" font-size="9" font-weight="bold" text-anchor="middle">Chimney Return Duct</text>

          <!-- Return Hot Air Path back to CRAH Return Plenum -->
          <path d="M 235 70 L 105 70 L 105 100" stroke="#ea580c" stroke-width="2" fill="none" class="hot-air-flow" />
          <text x="170" y="63" fill="#ea580c" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Hot Return &larr; 42°C</text>

          <!-- Rack Row 3 (Cold Aisle on Right) -->
          <g transform="translate(440, 110)">
            <rect width="60" height="185" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
            <text x="30" y="90" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 30 90)">Rack Row 3 (42U)</text>
          </g>

          <g transform="translate(600, 110)">
            <rect width="60" height="185" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
            <text x="30" y="90" fill="#f8fafc" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle" transform="rotate(-90 30 90)">Rack Row 4 (42U)</text>
          </g>

          <rect x="505" y="110" width="90" height="185" fill="#0284c7" fill-opacity="0.1" stroke="#0284c7" stroke-width="1" stroke-dasharray="4 4" />
          <text x="550" y="140" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">COLD AISLE</text>
          <text x="550" y="156" fill="#bae6fd" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">18°C - 22°C</text>
        </svg>
      </div>
    `;
  },

  /**
   * 4. Direct-to-Chip Liquid Cooling Closed Loop Diagram
   */
  liquidCoolingLoop: function() {
    return `
      <div class="w-full overflow-x-auto p-4 bg-slate-950/80 rounded-xl border border-slate-800">
        <svg viewBox="0 0 800 340" class="w-full max-w-3xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <text x="400" y="24" fill="#06b6d4" font-family="Inter, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            Direct-to-Chip (D2C) Liquid Cooling Architecture for AI Superclusters
          </text>
          <text x="400" y="42" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">
            Secondary IT Loop (Treated Coolant) &bull; Primary Facility Chilled Loop (Plate Heat Exchanger)
          </text>

          <!-- Primary Facility Loop (Outdoor Cooling Tower / Chiller) on Left -->
          <g transform="translate(60, 90)">
            <rect width="130" height="160" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="1.5" />
            <text x="65" y="26" fill="#38bdf8" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Facility Chiller Loop</text>
            <text x="65" y="44" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Cooling Tower / Dry Cooler</text>
            <text x="65" y="100" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Supply: 15°C</text>
            <text x="65" y="125" fill="#f97316" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">Return: 30°C</text>
          </g>

          <!-- CDU (Coolant Distribution Unit) in Center -->
          <g transform="translate(260, 75)">
            <rect width="180" height="190" rx="10" fill="#082f49" stroke="#06b6d4" stroke-width="2" />
            <text x="90" y="28" fill="#ffffff" font-family="Inter, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">CDU (In-Row)</text>
            <text x="90" y="46" fill="#7dd3fc" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Plate Heat Exchanger</text>
            <text x="90" y="60" fill="#38bdf8" font-family="JetBrains Mono, monospace" font-size="8" text-anchor="middle">Dual Redundant VFD Pumps</text>

            <!-- Internal Heat Exchanger Icon -->
            <rect x="50" y="80" width="80" height="70" rx="4" fill="#0f172a" stroke="#38bdf8" />
            <text x="90" y="115" fill="#38bdf8" font-size="9" font-family="Inter" font-weight="bold" text-anchor="middle">HEX Isolation</text>
          </g>

          <!-- Lines from Facility to CDU -->
          <line x1="190" y1="140" x2="260" y2="140" stroke="#0284c7" stroke-width="3" class="cold-air-flow" />
          <line x1="260" y1="190" x2="190" y2="190" stroke="#ea580c" stroke-width="3" class="hot-air-flow" />

          <!-- Lines from CDU to Server Rack -->
          <line x1="440" y1="130" x2="520" y2="130" stroke="#06b6d4" stroke-width="3" class="cold-air-flow" />
          <text x="480" y="120" fill="#06b6d4" font-family="JetBrains Mono" font-size="8" text-anchor="middle">Cold 32°C</text>

          <line x1="520" y1="210" x2="440" y2="210" stroke="#f97316" stroke-width="3" class="hot-air-flow" />
          <text x="480" y="230" fill="#f97316" font-family="JetBrains Mono" font-size="8" text-anchor="middle">Hot 55°C</text>

          <!-- 80kW AI Server Rack on Right -->
          <g transform="translate(520, 65)">
            <rect width="210" height="210" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2" />
            <text x="105" y="24" fill="#34d399" font-family="Inter, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">High-Density AI Rack (80kW)</text>
            <text x="105" y="40" fill="#94a3b8" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">8x GPU Shelves (NVIDIA H100)</text>

            <!-- Cold Plates Inside Rack -->
            <g transform="translate(20, 60)">
              <rect width="170" height="36" rx="4" fill="#1e293b" stroke="#06b6d4" />
              <text x="85" y="16" fill="#f8fafc" font-size="9" font-family="Inter" font-weight="bold" text-anchor="middle">GPU Node 1: Microchannel Cold Plates</text>
              <text x="85" y="28" fill="#38bdf8" font-size="8" font-family="JetBrains Mono" text-anchor="middle">8x 700W SXM5 Modules (5.6kW)</text>
            </g>

            <g transform="translate(20, 105)">
              <rect width="170" height="36" rx="4" fill="#1e293b" stroke="#06b6d4" />
              <text x="85" y="16" fill="#f8fafc" font-size="9" font-family="Inter" font-weight="bold" text-anchor="middle">GPU Node 2: Microchannel Cold Plates</text>
              <text x="85" y="28" fill="#38bdf8" font-size="8" font-family="JetBrains Mono" text-anchor="middle">8x 700W SXM5 Modules (5.6kW)</text>
            </g>

            <g transform="translate(20, 150)">
              <rect width="170" height="36" rx="4" fill="#1e293b" stroke="#06b6d4" />
              <text x="85" y="16" fill="#f8fafc" font-size="9" font-family="Inter" font-weight="bold" text-anchor="middle">GPU Node 3: Microchannel Cold Plates</text>
              <text x="85" y="28" fill="#38bdf8" font-size="8" font-family="JetBrains Mono" text-anchor="middle">8x 700W SXM5 Modules (5.6kW)</text>
            </g>
          </g>

          <!-- Bottom Efficiency Banner -->
          <g transform="translate(200, 295)">
            <rect width="400" height="26" rx="13" fill="#042f2e" stroke="#14b8a6" />
            <text x="200" y="17" fill="#2dd4bf" font-family="Inter, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">
              🌱 Direct-to-Chip Achieves PUE 1.12 vs 1.60 on Traditional Air Chillers
            </text>
          </g>
        </svg>
      </div>
    `;
  },

  /**
   * 5. Uptime Institute Tier I - IV Comparison Diagram
   */
  tierComparison: function() {
    return `
      <div class="w-full overflow-x-auto p-4 bg-slate-950/80 rounded-xl border border-slate-800">
        <svg viewBox="0 0 800 320" class="w-full max-w-3xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <text x="400" y="22" fill="#38bdf8" font-family="Inter, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            Uptime Institute Tier Topologies: From Basic (N) to Fault Tolerant (2N)
          </text>

          <!-- Tier 1 -->
          <g transform="translate(40, 50)">
            <rect width="160" height="240" rx="8" fill="#0f172a" stroke="#64748b" stroke-width="1.5" />
            <text x="80" y="26" fill="#94a3b8" font-family="Inter, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Tier I: Basic</text>
            <text x="80" y="44" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Availability: 99.671%</text>
            <text x="80" y="58" fill="#f87171" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">28.8 hrs downtime/yr</text>

            <rect x="25" y="80" width="110" height="26" rx="4" fill="#1e293b" />
            <text x="80" y="96" fill="#94a3b8" font-size="9" font-family="Inter" text-anchor="middle">1x Utility Feed</text>

            <rect x="25" y="120" width="110" height="26" rx="4" fill="#1e293b" />
            <text x="80" y="136" fill="#94a3b8" font-size="9" font-family="Inter" text-anchor="middle">1x UPS Module (N)</text>

            <rect x="25" y="160" width="110" height="26" rx="4" fill="#1e293b" />
            <text x="80" y="176" fill="#94a3b8" font-size="9" font-family="Inter" text-anchor="middle">1x Distribution Path</text>

            <text x="80" y="215" fill="#e2e8f0" font-size="8" font-family="Inter" text-anchor="middle">Shutdown required for</text>
            <text x="80" y="227" fill="#e2e8f0" font-size="8" font-family="Inter" text-anchor="middle">annual maintenance</text>
          </g>

          <!-- Tier 2 -->
          <g transform="translate(220, 50)">
            <rect width="160" height="240" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5" />
            <text x="80" y="26" fill="#fbbf24" font-family="Inter, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Tier II: Redundant</text>
            <text x="80" y="44" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Availability: 99.741%</text>
            <text x="80" y="58" fill="#fbbf24" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">22.0 hrs downtime/yr</text>

            <rect x="25" y="80" width="110" height="26" rx="4" fill="#1e293b" />
            <text x="80" y="96" fill="#cbd5e1" font-size="9" font-family="Inter" text-anchor="middle">1x Utility + Gen (N+1)</text>

            <rect x="25" y="120" width="110" height="26" rx="4" fill="#1e293b" />
            <text x="80" y="136" fill="#cbd5e1" font-size="9" font-family="Inter" text-anchor="middle">UPS Modules (N + 1)</text>

            <rect x="25" y="160" width="110" height="26" rx="4" fill="#1e293b" stroke="#f59e0b" />
            <text x="80" y="176" fill="#fbbf24" font-size="9" font-family="Inter" text-anchor="middle">1x Dist. Path (SPOF)</text>

            <text x="80" y="215" fill="#e2e8f0" font-size="8" font-family="Inter" text-anchor="middle">Component redundancy,</text>
            <text x="80" y="227" fill="#e2e8f0" font-size="8" font-family="Inter" text-anchor="middle">pathway maintenance drops IT</text>
          </g>

          <!-- Tier 3 -->
          <g transform="translate(400, 50)">
            <rect width="160" height="240" rx="8" fill="#082f49" stroke="#06b6d4" stroke-width="2" />
            <text x="80" y="26" fill="#38bdf8" font-family="Inter, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Tier III: Maint.</text>
            <text x="80" y="44" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Availability: 99.982%</text>
            <text x="80" y="58" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">1.6 hrs downtime/yr</text>

            <rect x="25" y="80" width="110" height="26" rx="4" fill="#0f172a" stroke="#06b6d4" />
            <text x="80" y="96" fill="#7dd3fc" font-size="9" font-family="Inter" text-anchor="middle">Dual Active Utilities</text>

            <rect x="25" y="120" width="110" height="26" rx="4" fill="#0f172a" stroke="#06b6d4" />
            <text x="80" y="136" fill="#7dd3fc" font-size="9" font-family="Inter" text-anchor="middle">UPS Plant (N + 1)</text>

            <rect x="25" y="160" width="110" height="26" rx="4" fill="#0f172a" stroke="#06b6d4" />
            <text x="80" y="176" fill="#7dd3fc" font-size="9" font-family="Inter" text-anchor="middle">1 Active + 1 Alternate Path</text>

            <text x="80" y="215" fill="#e2e8f0" font-size="8" font-family="Inter" text-anchor="middle"><strong>Concurrently Maintainable</strong></text>
            <text x="80" y="227" fill="#cbd5e1" font-size="8" font-family="Inter" text-anchor="middle">Zero IT shutdown for service</text>
          </g>

          <!-- Tier 4 -->
          <g transform="translate(580, 50)">
            <rect width="180" height="240" rx="8" fill="#022c22" stroke="#10b981" stroke-width="2.5" />
            <text x="90" y="26" fill="#34d399" font-family="Inter, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Tier IV: Fault Tolerant</text>
            <text x="90" y="44" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">Availability: 99.995%</text>
            <text x="90" y="58" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="middle">0.4 hrs (26 mins)/yr</text>

            <rect x="25" y="80" width="130" height="26" rx="4" fill="#064e3b" stroke="#34d399" />
            <text x="90" y="96" fill="#a7f3d0" font-size="9" font-family="Inter" text-anchor="middle">2N Generator & Utility</text>

            <rect x="25" y="120" width="130" height="26" rx="4" fill="#064e3b" stroke="#34d399" />
            <text x="90" y="136" fill="#a7f3d0" font-size="9" font-family="Inter" text-anchor="middle">2(N+1) Isolated UPS</text>

            <rect x="25" y="160" width="130" height="26" rx="4" fill="#064e3b" stroke="#34d399" />
            <text x="90" y="176" fill="#a7f3d0" font-size="9" font-family="Inter" text-anchor="middle">2 Simultaneously Active Paths</text>

            <text x="90" y="215" fill="#ffffff" font-size="8" font-family="Inter" text-anchor="middle"><strong>Autonomous Response</strong></text>
            <text x="90" y="227" fill="#a7f3d0" font-size="8" font-family="Inter" text-anchor="middle">Physical Compartmentation</text>
          </g>
        </svg>
      </div>
    `;
  },

  /**
   * 6. VXLAN Packet Encapsulation Header Diagram
   */
  vxlanPacketHeader: function() {
    return `
      <div class="w-full overflow-x-auto p-4 bg-slate-950/80 rounded-xl border border-slate-800">
        <svg viewBox="0 0 800 240" class="w-full max-w-3xl mx-auto h-auto select-none" xmlns="http://www.w3.org/2000/svg">
          <text x="400" y="22" fill="#06b6d4" font-family="Inter, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">
            VXLAN Encapsulation Header Format (RFC 7348)
          </text>
          <text x="400" y="38" fill="#64748b" font-family="JetBrains Mono, monospace" font-size="10" text-anchor="middle">
            Adds 50 Bytes of Outer Transport Overhead • Requires MTU 9216 on Fabric
          </text>

          <!-- Outer Headers (Total 50 Bytes) -->
          <g transform="translate(40, 70)">
            <!-- Outer MAC -->
            <rect x="0" y="0" width="130" height="55" rx="6" fill="#1e293b" stroke="#94a3b8" />
            <text x="65" y="24" fill="#f8fafc" font-size="11" font-weight="bold" font-family="Inter" text-anchor="middle">Outer L2 MAC</text>
            <text x="65" y="42" fill="#94a3b8" font-size="9" font-family="JetBrains Mono" text-anchor="middle">14 Bytes</text>

            <!-- Outer IP -->
            <rect x="135" y="0" width="140" height="55" rx="6" fill="#0369a1" stroke="#38bdf8" />
            <text x="205" y="24" fill="#ffffff" font-size="11" font-weight="bold" font-family="Inter" text-anchor="middle">Outer IP (VTEP)</text>
            <text x="205" y="42" fill="#bae6fd" font-size="9" font-family="JetBrains Mono" text-anchor="middle">20 Bytes (Proto 17 UDP)</text>

            <!-- Outer UDP -->
            <rect x="280" y="0" width="125" height="55" rx="6" fill="#4338ca" stroke="#818cf8" />
            <text x="342" y="24" fill="#ffffff" font-size="11" font-weight="bold" font-family="Inter" text-anchor="middle">Outer UDP</text>
            <text x="342" y="42" fill="#c7d2fe" font-size="9" font-family="JetBrains Mono" text-anchor="middle">8 Bytes (Dest: 4789)</text>

            <!-- VXLAN Header -->
            <rect x="410" y="0" width="145" height="55" rx="6" fill="#047857" stroke="#34d399" stroke-width="2" />
            <text x="482" y="22" fill="#ffffff" font-size="11" font-weight="bold" font-family="Inter" text-anchor="middle">VXLAN Header</text>
            <text x="482" y="38" fill="#a7f3d0" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">24-bit VNI (16M)</text>
            <text x="482" y="48" fill="#d1fae5" font-size="8" font-family="JetBrains Mono" text-anchor="middle">8 Bytes</text>

            <!-- Inner Original Payload -->
            <rect x="560" y="0" width="160" height="55" rx="6" fill="#701a75" stroke="#f472b6" />
            <text x="640" y="24" fill="#ffffff" font-size="11" font-weight="bold" font-family="Inter" text-anchor="middle">Original VM Frame</text>
            <text x="640" y="42" fill="#fbcfe8" font-size="9" font-family="JetBrains Mono" text-anchor="middle">Inner L2/L3 Payload</text>
          </g>

          <g transform="translate(180, 160)">
            <rect width="440" height="40" rx="6" fill="#0b1329" stroke="#1e293b" />
            <text x="220" y="25" fill="#38bdf8" font-size="11" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">
              Total Underlay Overhead = 14 + 20 + 8 + 8 = 50 Bytes
            </text>
          </g>
        </svg>
      </div>
    `;
  }
};
