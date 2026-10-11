/**
 * DataCenterCore.io - Interactive Engineering Simulators
 * 1. PUE, Cooling TCO & Carbon Calculator
 * 2. Spine-Leaf Clos Bandwidth & Oversubscription Analyzer
 * 3. Uptime Tier Resiliency & Fault Injection Simulator
 */

const InteractiveTools = {
  /**
   * Tool 1: Render PUE & Green Energy TCO Calculator
   */
  renderPueCalculator: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="glass-panel-elevated rounded-2xl p-6 border border-cyan-500/20 shadow-xl space-y-6">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">⚡</span>
            <div>
              <h3 class="text-base font-bold text-white">Data Center PUE, Carbon & TCO Calculator</h3>
              <p class="text-xs text-slate-400">Model IT loads, cooling technologies, annual OpEx, and carbon emissions</p>
            </div>
          </div>
          <span class="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">PUE Engine</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Control Sliders -->
          <div class="space-y-4">
            <!-- IT Load -->
            <div>
              <div class="flex justify-between text-xs mb-1">
                <label for="pue-it-load" class="text-slate-300 font-medium">Critical IT Load:</label>
                <span id="pue-it-load-val" class="font-mono text-cyan-400 font-bold">2,000 kW (2 MW)</span>
              </div>
              <input type="range" id="pue-it-load" min="100" max="20000" step="100" value="2000" class="w-full h-1.5 bg-slate-800 rounded-lg cursor-pointer">
              <span class="text-[10px] text-slate-500">Range: 100 kW to 20 MW hyperscale facility</span>
            </div>

            <!-- Cooling Architecture -->
            <div>
              <label for="pue-cooling-tech" class="text-slate-300 font-medium text-xs block mb-1">Cooling & Facility Design:</label>
              <select id="pue-cooling-tech" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500">
                <option value="1.75">Legacy DX CRAC Air Cooling (PUE ~1.75)</option>
                <option value="1.40">Raised Floor + Cold Aisle Containment (PUE ~1.40)</option>
                <option value="1.25" selected>Hot Aisle Containment + Water Economizer (PUE ~1.25)</option>
                <option value="1.12">Direct-to-Chip (D2C) Liquid Cooling (PUE ~1.12)</option>
                <option value="1.04">Submerged Immersion Liquid Cooling (PUE ~1.04)</option>
              </select>
            </div>

            <!-- Electricity Cost -->
            <div>
              <div class="flex justify-between text-xs mb-1">
                <label for="pue-cost" class="text-slate-300 font-medium">Electricity Tariff ($/kWh):</label>
                <span id="pue-cost-val" class="font-mono text-cyan-400 font-bold">$0.10 / kWh</span>
              </div>
              <input type="range" id="pue-cost" min="0.04" max="0.30" step="0.01" value="0.10" class="w-full h-1.5 bg-slate-800 rounded-lg cursor-pointer">
            </div>

            <!-- Carbon Intensity -->
            <div>
              <div class="flex justify-between text-xs mb-1">
                <label for="pue-carbon" class="text-slate-300 font-medium">Grid Carbon Factor (kg CO2/kWh):</label>
                <span id="pue-carbon-val" class="font-mono text-cyan-400 font-bold">0.40 kg/kWh</span>
              </div>
              <input type="range" id="pue-carbon" min="0.05" max="0.90" step="0.05" value="0.40" class="w-full h-1.5 bg-slate-800 rounded-lg cursor-pointer">
            </div>
          </div>

          <!-- Dynamic Output Metrics -->
          <div class="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div class="space-y-3">
              <!-- PUE Meter -->
              <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                <span class="text-xs text-slate-400 font-medium">Power Usage Effectiveness (PUE)</span>
                <span id="pue-output-val" class="text-xl font-mono font-bold text-cyan-400">1.25</span>
              </div>

              <!-- Energy Split -->
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-[10px] text-slate-500 block">IT Critical Power</span>
                  <span id="pue-it-power" class="font-bold text-white font-mono">2,000 kW</span>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-[10px] text-slate-500 block">Facility Overhead (Cooling/Loss)</span>
                  <span id="pue-overhead-power" class="font-bold text-amber-400 font-mono">500 kW</span>
                </div>
              </div>

              <!-- Annual Financial Cost -->
              <div class="p-3 rounded-lg bg-slate-900 border border-cyan-900/40">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] text-slate-400">Total Annual Electricity Bill</span>
                  <span id="pue-annual-cost" class="text-base font-bold text-emerald-400 font-mono">$2,190,000</span>
                </div>
                <div class="flex items-center justify-between mt-1 text-[11px]">
                  <span class="text-slate-500">Savings vs Legacy CRAC (1.75 PUE):</span>
                  <span id="pue-savings" class="font-bold text-cyan-400 font-mono">+$876,000 / yr</span>
                </div>
              </div>

              <!-- Carbon Emissions -->
              <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] text-slate-400">Annual Carbon Footprint</span>
                  <span id="pue-carbon-output" class="text-xs font-bold text-amber-300 font-mono">8,760 Metric Tons CO₂</span>
                </div>
              </div>
            </div>

            <!-- Energy Ratio Bar -->
            <div>
              <div class="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                <span>IT Compute Energy (<span id="pue-it-pct">80%</span>)</span>
                <span>Overhead (<span id="pue-overhead-pct">20%</span>)</span>
              </div>
              <div class="w-full h-3 bg-amber-500/30 rounded-full overflow-hidden flex">
                <div id="pue-bar-it" class="h-full bg-cyan-400 transition-all duration-300" style="width: 80%;"></div>
                <div id="pue-bar-overhead" class="h-full bg-amber-500 transition-all duration-300" style="width: 20%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listeners
    const itSlider = document.getElementById("pue-it-load");
    const techSelect = document.getElementById("pue-cooling-tech");
    const costSlider = document.getElementById("pue-cost");
    const carbonSlider = document.getElementById("pue-carbon");

    const updateCalc = () => {
      const itKw = parseFloat(itSlider.value);
      const pue = parseFloat(techSelect.value);
      const rate = parseFloat(costSlider.value);
      const carbon = parseFloat(carbonSlider.value);

      document.getElementById("pue-it-load-val").textContent = `${itKw.toLocaleString()} kW (${(itKw/1000).toFixed(1)} MW)`;
      document.getElementById("pue-cost-val").textContent = `$${rate.toFixed(2)} / kWh`;
      document.getElementById("pue-carbon-val").textContent = `${carbon.toFixed(2)} kg/kWh`;
      document.getElementById("pue-output-val").textContent = pue.toFixed(2);

      const totalKw = itKw * pue;
      const overheadKw = totalKw - itKw;

      document.getElementById("pue-it-power").textContent = `${itKw.toLocaleString()} kW`;
      document.getElementById("pue-overhead-power").textContent = `${Math.round(overheadKw).toLocaleString()} kW`;

      // 8760 hours in a year
      const annualKwh = totalKw * 8760;
      const annualCost = annualKwh * rate;

      // Legacy baseline 1.75
      const legacyAnnualKwh = (itKw * 1.75) * 8760;
      const legacyCost = legacyAnnualKwh * rate;
      const savings = Math.max(0, legacyCost - annualCost);

      const annualCo2Tons = (annualKwh * carbon) / 1000;

      document.getElementById("pue-annual-cost").textContent = `$${Math.round(annualCost).toLocaleString()}`;
      document.getElementById("pue-savings").textContent = pue >= 1.75 ? "Baseline Level" : `+$${Math.round(savings).toLocaleString()} / yr`;
      document.getElementById("pue-carbon-output").textContent = `${Math.round(annualCo2Tons).toLocaleString()} Metric Tons CO₂`;

      const itPct = Math.round((itKw / totalKw) * 100);
      const overheadPct = 100 - itPct;

      document.getElementById("pue-it-pct").textContent = `${itPct}%`;
      document.getElementById("pue-overhead-pct").textContent = `${overheadPct}%`;
      document.getElementById("pue-bar-it").style.width = `${itPct}%`;
      document.getElementById("pue-bar-overhead").style.width = `${overheadPct}%`;
    };

    itSlider.addEventListener("input", updateCalc);
    techSelect.addEventListener("change", updateCalc);
    costSlider.addEventListener("input", updateCalc);
    carbonSlider.addEventListener("input", updateCalc);

    updateCalc();
  },

  /**
   * Tool 2: Spine-Leaf Fabric Bandwidth & Oversubscription Calculator
   */
  renderSpineLeafCalculator: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="glass-panel-elevated rounded-2xl p-6 border border-cyan-500/20 shadow-xl space-y-6">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌐</span>
            <div>
              <h3 class="text-base font-bold text-white">Clos Spine-Leaf Bandwidth & Oversubscription Calculator</h3>
              <p class="text-xs text-slate-400">Design non-blocking Clos fabrics for enterprise and RoCEv2 GPU clusters</p>
            </div>
          </div>
          <span class="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">Clos Engine</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Inputs -->
          <div class="grid grid-cols-2 gap-3 text-xs">
            <div>
              <label for="sl-leaf-count" class="text-slate-300 font-medium block mb-1">Number of Leafs:</label>
              <select id="sl-leaf-count" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-cyan-500">
                <option value="4">4 Leafs</option>
                <option value="8">8 Leafs</option>
                <option value="16" selected>16 Leafs</option>
                <option value="32">32 Leafs</option>
                <option value="64">64 Leafs</option>
              </select>
            </div>

            <div>
              <label for="sl-spine-count" class="text-slate-300 font-medium block mb-1">Number of Spines:</label>
              <select id="sl-spine-count" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-cyan-500">
                <option value="2">2 Spines</option>
                <option value="4" selected>4 Spines</option>
                <option value="8">8 Spines</option>
                <option value="16">16 Spines</option>
              </select>
            </div>

            <div>
              <label for="sl-downlink-speed" class="text-slate-300 font-medium block mb-1">Server Port Speed:</label>
              <select id="sl-downlink-speed" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-cyan-500">
                <option value="10">10 Gbps (SFP+)</option>
                <option value="25" selected>25 Gbps (SFP28)</option>
                <option value="100">100 Gbps (QSFP28)</option>
                <option value="200">200 Gbps (HDR / QSFP56)</option>
              </select>
            </div>

            <div>
              <label for="sl-server-ports" class="text-slate-300 font-medium block mb-1">Server Ports / Leaf:</label>
              <select id="sl-server-ports" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-cyan-500">
                <option value="24">24 Ports</option>
                <option value="32">32 Ports</option>
                <option value="48" selected>48 Ports</option>
              </select>
            </div>

            <div>
              <label for="sl-uplink-speed" class="text-slate-300 font-medium block mb-1">Spine Uplink Speed:</label>
              <select id="sl-uplink-speed" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-cyan-500">
                <option value="100">100 Gbps (QSFP28)</option>
                <option value="400" selected>400 Gbps (QSFP-DD)</option>
                <option value="800">800 Gbps (OSFP)</option>
              </select>
            </div>

            <div>
              <label for="sl-uplink-count" class="text-slate-300 font-medium block mb-1">Uplinks / Leaf:</label>
              <select id="sl-uplink-count" class="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-cyan-500">
                <option value="2">2 Uplinks</option>
                <option value="4" selected>4 Uplinks</option>
                <option value="8">8 Uplinks</option>
              </select>
            </div>
          </div>

          <!-- Outputs -->
          <div class="bg-slate-950/80 rounded-xl p-4 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div class="space-y-2.5 text-xs">
              <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                <span class="text-slate-400 font-medium">Oversubscription Ratio:</span>
                <span id="sl-ratio-val" class="font-mono text-lg font-bold text-emerald-400">0.75 : 1 (Non-Blocking)</span>
              </div>

              <div class="grid grid-cols-2 gap-2">
                <div class="p-2 rounded bg-slate-900 border border-slate-800">
                  <span class="text-[10px] text-slate-500 block">Total Compute Servers</span>
                  <span id="sl-total-servers" class="font-bold text-white font-mono">768 Servers</span>
                </div>
                <div class="p-2 rounded bg-slate-900 border border-slate-800">
                  <span class="text-[10px] text-slate-500 block">Total Bisectional Bandwidth</span>
                  <span id="sl-bisectional-bw" class="font-bold text-cyan-400 font-mono">25.6 Tbps</span>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2">
                <div class="p-2 rounded bg-slate-900 border border-slate-800">
                  <span class="text-[10px] text-slate-500 block">Downlink Bandwidth / Leaf</span>
                  <span id="sl-downlink-bw" class="font-bold text-slate-300 font-mono">1,200 Gbps</span>
                </div>
                <div class="p-2 rounded bg-slate-900 border border-slate-800">
                  <span class="text-[10px] text-slate-500 block">Uplink Bandwidth / Leaf</span>
                  <span id="sl-uplink-bw" class="font-bold text-slate-300 font-mono">1,600 Gbps</span>
                </div>
              </div>

              <div id="sl-rec-badge" class="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-[11px] leading-relaxed">
                ✅ <strong>Optimal for AI & RoCEv2 GPU Fabrics:</strong> Fabric is non-blocking with line-rate forwarding. No buffer congestion or PFC pause storm risks.
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const leafEl = document.getElementById("sl-leaf-count");
    const spineEl = document.getElementById("sl-spine-count");
    const downSpeedEl = document.getElementById("sl-downlink-speed");
    const serverPortsEl = document.getElementById("sl-server-ports");
    const upSpeedEl = document.getElementById("sl-uplink-speed");
    const uplinksEl = document.getElementById("sl-uplink-count");

    const updateClos = () => {
      const leafs = parseInt(leafEl.value);
      const spines = parseInt(spineEl.value);
      const downSpeed = parseInt(downSpeedEl.value);
      const serverPorts = parseInt(serverPortsEl.value);
      const upSpeed = parseInt(upSpeedEl.value);
      const uplinks = parseInt(uplinksEl.value);

      const totalServers = leafs * serverPorts;
      const leafDownlinkGbps = serverPorts * downSpeed;
      const leafUplinkGbps = uplinks * upSpeed;
      const ratio = leafDownlinkGbps / leafUplinkGbps;

      // Total fabric bisectional capacity in Tbps
      const totalFabricTbps = (leafs * leafUplinkGbps) / 1000;

      document.getElementById("sl-total-servers").textContent = `${totalServers.toLocaleString()} Nodes`;
      document.getElementById("sl-bisectional-bw").textContent = `${totalFabricTbps.toFixed(1)} Tbps`;
      document.getElementById("sl-downlink-bw").textContent = `${leafDownlinkGbps.toLocaleString()} Gbps`;
      document.getElementById("sl-uplink-bw").textContent = `${leafUplinkGbps.toLocaleString()} Gbps`;

      const ratioEl = document.getElementById("sl-ratio-val");
      const recBadge = document.getElementById("sl-rec-badge");

      if (ratio <= 1.0) {
        ratioEl.className = "font-mono text-lg font-bold text-emerald-400";
        ratioEl.textContent = `${ratio.toFixed(2)} : 1 (Non-Blocking)`;
        recBadge.className = "p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-[11px] leading-relaxed";
        recBadge.innerHTML = `✅ <strong>Optimal for AI & RoCEv2 GPU Fabrics:</strong> 1:1 line-rate non-blocking architecture. Zero oversubscription eliminates packet drops for LLM training.`;
      } else if (ratio <= 2.5) {
        ratioEl.className = "font-mono text-lg font-bold text-cyan-400";
        ratioEl.textContent = `${ratio.toFixed(2)} : 1 (Standard Cloud)`;
        recBadge.className = "p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-[11px] leading-relaxed";
        recBadge.innerHTML = `ℹ️ <strong>Standard Enterprise Virtualization:</strong> Balanced cost-to-performance for VMware vSphere, Kubernetes, and web services. Moderate oversubscription.`;
      } else {
        ratioEl.className = "font-mono text-lg font-bold text-amber-400";
        ratioEl.textContent = `${ratio.toFixed(2)} : 1 (Oversubscribed)`;
        recBadge.className = "p-2.5 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-300 text-[11px] leading-relaxed";
        recBadge.innerHTML = `⚠️ <strong>High Oversubscription:</strong> May cause micro-burst buffer drops and TCP incast during high East-West database transfers. Increase uplinks to spines.`;
      }
    };

    [leafEl, spineEl, downSpeedEl, serverPortsEl, upSpeedEl, uplinksEl].forEach(el => {
      el.addEventListener("change", updateClos);
    });

    updateClos();
  },

  /**
   * Tool 3: Uptime Tier Resiliency & Live Fault Simulator
   */
  renderTierSimulator: function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let selectedTier = 3;
    let faults = {
      gridA: false,
      upsA: false,
      crah: false,
      busway: false
    };

    const evaluateState = () => {
      // Evaluate based on Tier rules
      // Tier 1: Single path, no redundancy. Any fault drops servers.
      // Tier 2: N+1 components, single path. Grid cut or busway drops servers.
      // Tier 3: Concurrently maintainable. Can handle 1 path fault or component maintenance without dropping servers.
      // Tier 4: Fault tolerant. Dual active simultaneous paths. Autonomous response.

      let isDown = false;
      let isDegraded = false;
      let reason = "";

      const activeFaultsCount = Object.values(faults).filter(Boolean).length;

      if (selectedTier === 1) {
        if (activeFaultsCount > 0) {
          isDown = true;
          reason = "Tier I has zero component redundancy (N) and a single distribution path. Any component or feed failure causes a catastrophic data center outage.";
        } else {
          reason = "Tier I operating normally on single path. Note: Planned annual maintenance requires a complete facility blackout.";
        }
      } else if (selectedTier === 2) {
        if (faults.busway || faults.gridA) {
          isDown = true;
          reason = "Tier II has redundant components (N+1) but only a single distribution path. A busway trip or grid failure exceeding UPS runtime collapses the entire floor.";
        } else if (faults.upsA || faults.crah) {
          isDegraded = true;
          reason = "Tier II backup component picked up load, but system is operating at N capacity with zero redundancy remaining.";
        } else {
          reason = "Tier II operating normally with N+1 component reserve.";
        }
      } else if (selectedTier === 3) {
        // Concurrently maintainable: single path failure is tolerated
        if (activeFaultsCount >= 3) {
          isDown = true;
          reason = "Multiple simultaneous unplanned failures exceed Tier III concurrent maintainability limits.";
        } else if (activeFaultsCount > 0) {
          isDegraded = true;
          reason = "Tier III Concurrent Maintainability in action! Alternate power path B seamlessly carries the IT load. Zero server drops during maintenance.";
        } else {
          reason = "Tier III operating with dual active/alternate distribution paths. Concurrently maintainable 24/7.";
        }
      } else if (selectedTier === 4) {
        // Fault tolerant: handles multiple isolated faults
        if (faults.gridA && faults.upsA && faults.busway) {
          isDown = true;
          reason = "Total site destruction across both physically isolated compartments simultaneously.";
        } else if (activeFaultsCount > 0) {
          isDegraded = false; // Tier 4 absorbs without degradation
          reason = "Tier IV Fault Tolerant! Autonomous system response isolated the failure domain within Compartment A. Compartment B supplies 100% continuous power and cooling with zero human intervention.";
        } else {
          reason = "Tier IV operating with 2(N+1) isolated power and cooling trains in separate 2-hour fire-rated rooms.";
        }
      }

      return { isDown, isDegraded, reason };
    };

    const render = () => {
      const state = evaluateState();

      let statusColor = "bg-emerald-950/80 border-emerald-700/80 text-emerald-300";
      let statusIcon = "🟢";
      let statusTitle = "100% ONLINE (Zero Impact)";

      if (state.isDown) {
        statusColor = "bg-red-950/80 border-red-700/80 text-red-300 animate-pulse";
        statusIcon = "🔴";
        statusTitle = "CRITICAL OUTAGE (Servers Dropped)";
      } else if (state.isDegraded) {
        statusColor = "bg-amber-950/80 border-amber-700/80 text-amber-300";
        statusIcon = "🟡";
        statusTitle = "DEGRADED REDUNDANCY (Servers Protected)";
      }

      container.innerHTML = `
        <div class="glass-panel-elevated rounded-2xl p-6 border border-cyan-500/20 shadow-xl space-y-6">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="text-xl">🛡️</span>
              <div>
                <h3 class="text-base font-bold text-white">Uptime Tier Resiliency & Live Fault Simulator</h3>
                <p class="text-xs text-slate-400">Inject component and grid failures to test Uptime Institute design resiliency</p>
              </div>
            </div>
            <span class="text-xs px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono">Resiliency Engine</span>
          </div>

          <!-- Tier Selector Tabs -->
          <div class="flex items-center gap-2 border-b border-slate-800 pb-3">
            <span class="text-xs text-slate-400 mr-2">Target Architecture:</span>
            ${[1, 2, 3, 4].map(tier => `
              <button 
                onclick="InteractiveTools.setSimTier(${tier})"
                class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedTier === tier 
                    ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30" 
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }"
              >
                Tier ${tier}
              </button>
            `).join("")}
          </div>

          <!-- Live Server Status Banner -->
          <div class="p-4 rounded-xl border ${statusColor} transition-all">
            <div class="flex items-center gap-2">
              <span class="text-lg">${statusIcon}</span>
              <span class="font-bold text-sm uppercase tracking-wider">${statusTitle}</span>
            </div>
            <p class="text-xs mt-2 leading-relaxed opacity-90">${state.reason}</p>
          </div>

          <!-- Fault Injection Buttons -->
          <div>
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Simulate Real-World Failures & Maintenance:</span>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <button 
                onclick="InteractiveTools.toggleSimFault('gridA')"
                class="p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  faults.gridA 
                    ? "bg-red-950/70 border-red-500 text-red-200" 
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                }"
              >
                <span class="font-semibold block">⚡ Cut Grid Feed A</span>
                <span class="text-[10px] text-slate-500 mt-1">${faults.gridA ? "Tripped (Offline)" : "Healthy"}</span>
              </button>

              <button 
                onclick="InteractiveTools.toggleSimFault('upsA')"
                class="p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  faults.upsA 
                    ? "bg-red-950/70 border-red-500 text-red-200" 
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                }"
              >
                <span class="font-semibold block">🔋 Trip UPS Line A</span>
                <span class="text-[10px] text-slate-500 mt-1">${faults.upsA ? "Tripped (Offline)" : "Healthy"}</span>
              </button>

              <button 
                onclick="InteractiveTools.toggleSimFault('crah')"
                class="p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  faults.crah 
                    ? "bg-red-950/70 border-red-500 text-red-200" 
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                }"
              >
                <span class="font-semibold block">❄️ Fail CRAH Unit 1</span>
                <span class="text-[10px] text-slate-500 mt-1">${faults.crah ? "Tripped (Offline)" : "Healthy"}</span>
              </button>

              <button 
                onclick="InteractiveTools.toggleSimFault('busway')"
                class="p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  faults.busway 
                    ? "bg-red-950/70 border-red-500 text-red-200" 
                    : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                }"
              >
                <span class="font-semibold block">🔧 Service Busway A</span>
                <span class="text-[10px] text-slate-500 mt-1">${faults.busway ? "Under Maintenance" : "Online"}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    };

    // Attach to InteractiveTools namespace
    InteractiveTools.setSimTier = function(tier) {
      selectedTier = tier;
      render();
    };

    InteractiveTools.toggleSimFault = function(faultKey) {
      faults[faultKey] = !faults[faultKey];
      render();
    };

    render();
  }
};
