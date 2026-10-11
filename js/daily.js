/**
 * DataCenterCore.io - Daily Concept Spotlight Engine
 * Rotates daily with rich architectural mental models, quizzes, CLI snippets, and standards
 */

const DAILY_CONCEPTS = [
  {
    id: "daily-clos-principles",
    track: "Network Fabric",
    domain: "Fabric Architecture",
    title: "Why Spine-Leaf Clos Fabrics Never Use Spanning Tree Protocol",
    summary: "Traditional STP disables 50% of your redundant links to prevent loops. Clos fabrics turn every single physical fiber cable into an active forwarding path using ECMP.",
    readingTime: "6 min read",
    diagramType: "spineLeafFabric",
    beginnerNote: "Think of Spanning Tree as a traffic cop closing half the highway lanes to avoid collisions. Clos architecture with ECMP opens all lanes at 100mph because every path is strictly 3 hops.",
    deepContext: {
      ruleOfThumb: "Always maintain an equal-cost uplink count that is a power of 2 (2, 4, 8, 16, 32, 64) to match switch ASIC hash polynomial buckets and prevent polarization.",
      formula: "Bisectional Bandwidth = (Number of Leafs) × (Uplinks per Leaf) × (Uplink Port Speed)"
    },
    codeSnippet: {
      platform: "Cisco NX-OS",
      code: `Leaf-01(config)# router bgp 65001
Leaf-01(config-router)# address-family ipv4 unicast
Leaf-01(config-router-af)# maximum-paths 64   ! Enables 64-way Equal-Cost Multi-Pathing (ECMP)`
    },
    quiz: {
      question: "In a standard 2-stage Clos Spine-Leaf topology, what is the maximum number of switch hops between any two servers attached to different leaf switches?",
      options: [
        "1 Hop (Direct Server-to-Server)",
        "2 Hops (Server -> Leaf -> Server)",
        "3 Hops (Server -> Leaf -> Spine -> Leaf -> Server)",
        "Variable between 2 and 6 hops depending on Spanning Tree state"
      ],
      correctIndex: 2,
      explanation: "In a Clos fabric, every server connects to a Leaf, every Leaf connects to all Spines, and no Spines connect to each other. Packets always travel: Ingress Leaf -> Spine -> Egress Leaf = exactly 3 switch hops."
    }
  },
  {
    id: "daily-concurrent-maintainability",
    track: "Facilities & Physical",
    domain: "Standards & Tiers",
    title: "Understanding 'Concurrent Maintainability' (Tier III vs Tier II)",
    summary: "The single most important milestone in mission-critical facilities: removing any component or distribution bus without cutting power to a single server.",
    readingTime: "7 min read",
    diagramType: "tierComparison",
    beginnerNote: "Tier II has spare parts sitting in the room, but you have to turn off the power to swap them. Tier III has duplicate active plumbing and wiring so you can replace anything while the server runs live.",
    deepContext: {
      ruleOfThumb: "To claim Tier III compliance, every IT rack must have two independent power feeds (ePDU-A and ePDU-B) connected to distinct UPS systems and switchboards.",
      formula: "Availability = (MTBF / (MTBF + MTTR)) × 100% (Tier III requires >= 99.982%)"
    },
    codeSnippet: {
      platform: "Uptime Institute Guideline",
      code: `Requirement 4.2.1: Concurrent Maintainability
"Each and every capacity component and elements of the distribution paths 
shall be able to be removed from service on a planned basis without 
affecting the critical IT load in any way."`
    },
    quiz: {
      question: "Which of the following scenarios is strictly permitted in a Tier III Concurrently Maintainable data center during scheduled maintenance?",
      options: [
        "Taking down half the servers for 1 hour to service the primary transformer",
        "Transferring an entire row of servers to a single power path while the alternate busway is serviced",
        "Disconnecting the only water cooling line for 15 minutes",
        "Running the entire facility on utility power without generator backup for 48 hours"
      ],
      correctIndex: 1,
      explanation: "Tier III requires dual distribution paths (1 active, 1 alternate). Taking Path A offline while all dual-corded servers remain powered via Path B is the definition of concurrent maintainability."
    }
  },
  {
    id: "daily-vxlan-encapsulation",
    track: "Network Fabric",
    domain: "Overlay & Protocols",
    title: "Why VXLAN Adds 50 Bytes and Requires MTU 9216 (Jumbo Frames)",
    summary: "Layer 2 Ethernet over Layer 3 UDP tunneling requires expanding the packet envelope. Forgetting to bump the underlay MTU is the #1 cause of silent fabric drops.",
    readingTime: "5 min read",
    diagramType: "vxlanPacketHeader",
    beginnerNote: "Think of VXLAN as putting an envelope inside another courier box. The inner letter is your VM traffic; the outer box has the delivery address for the destination Leaf switch.",
    deepContext: {
      ruleOfThumb: "Always configure 'mtu 9216' on all inter-switch physical interfaces in the underlay before configuring any BGP EVPN overlays.",
      formula: "Outer Ethernet (14B) + Outer IP (20B) + Outer UDP (8B) + VXLAN Header (8B) = 50 Bytes Overhead"
    },
    codeSnippet: {
      platform: "Arista EOS",
      code: `Leaf-1(config)# interface Ethernet 1-32
Leaf-1(config-if-Et1-32)# mtu 9216
Leaf-1(config-if-Et1-32)# description Underlay Uplinks with Jumbo Frames`
    },
    quiz: {
      question: "What is the destination UDP port number used by standard VXLAN encapsulation according to IETF RFC 7348?",
      options: [
        "Port 4789",
        "Port 4791",
        "Port 8472",
        "Port 179"
      ],
      correctIndex: 0,
      explanation: "RFC 7348 standardized destination UDP port 4789 for VXLAN. (Port 4791 is RoCEv2; Port 8472 was early pre-standard Linux VXLAN; Port 179 is BGP)."
    }
  },
  {
    id: "daily-direct-to-chip-cooling",
    track: "Facilities & Physical",
    domain: "Cooling & Thermal",
    title: "Direct-to-Chip Liquid Cooling: Handling 80kW+ AI Racks",
    summary: "Air cooling can no longer remove 700W+ per chip in modern AI GPU nodes. Direct-to-Chip cold plates capture up to 85% of heat directly into circulating fluid.",
    readingTime: "7 min read",
    diagramType: "liquidCoolingLoop",
    beginnerNote: "Water conducts heat over 3,500 times better than air. Instead of blowing noisy tornado-force fans across the GPUs, copper cold plates touch the silicon directly.",
    deepContext: {
      ruleOfThumb: "Maintain secondary loop supply temperature at 30°C-35°C to allow warm-water free cooling year-round, eliminating mechanical chillers.",
      formula: "Heat Removal Rate Q = m_dot × C_p × ΔT"
    },
    codeSnippet: {
      platform: "Thermal Engineering Standard",
      code: `Coolant Distribution Unit (CDU) Setpoint:
- Secondary Loop Coolant: Propylene Glycol 25% (PG25) + Corrosion Inhibitor
- Supply Temperature: 32.0°C (89.6°F)
- Return Temperature: 52.5°C (126.5°F) -> ΔT = 20.5°C`
    },
    quiz: {
      question: "What primary component separates the facility's raw chilled water loop from the ultra-clean dielectric coolant circulating through server cold plates?",
      options: [
        "A CRAC DX Compressor",
        "A Coolant Distribution Unit (CDU) Plate Heat Exchanger",
        "An Automatic Transfer Switch (ATS)",
        "A Reverse Osmosis Filtration Tower"
      ],
      correctIndex: 1,
      explanation: "The Coolant Distribution Unit (CDU) contains a stainless-steel plate-and-frame heat exchanger that transfers thermal energy between the primary facility water and the treated secondary IT fluid without mixing them."
    }
  }
];

const DailyEngine = {
  getTodayConcept: function(date = new Date()) {
    // Determine day of year to rotate automatically
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const index = Math.abs(dayOfYear) % DAILY_CONCEPTS.length;
    return DAILY_CONCEPTS[index];
  },

  checkQuizAnswer: function(selectedIndex, correctIndex) {
    const feedbackEl = document.getElementById("daily-quiz-feedback");
    if (!feedbackEl) return;

    if (selectedIndex === correctIndex) {
      feedbackEl.className = "p-3 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs mt-3 block animate-fadeIn";
      feedbackEl.innerHTML = `<strong>✅ Spot on! Excellent engineering intuition!</strong>`;
    } else {
      feedbackEl.className = "p-3 rounded-xl bg-amber-950/80 border border-amber-700/80 text-amber-300 text-xs mt-3 block animate-fadeIn";
      feedbackEl.innerHTML = `<strong>Not quite. Look closely at the architectural standard rules above and review the explanation!</strong>`;
    }

    const explanationEl = document.getElementById("daily-quiz-explanation");
    if (explanationEl) explanationEl.classList.remove("hidden");
  }
};
