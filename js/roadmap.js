/**
 * DataCenterCore.io - Certification Roadmap Engine
 * Complete guide from Beginner to Expert across Facilities, Network Fabric & Virtualization
 */

const CERT_ROADMAP = [
  // ================= LEVEL 1: BEGINNER / FOUNDATIONS =================
  {
    id: "cert-dcca",
    name: "Data Center Certified Associate (DCCA)",
    code: "Schneider Electric Energy University",
    vendor: "Schneider Electric",
    vendorIcon: "⚡",
    track: "facilities",
    trackLabel: "Facilities & Physical Infrastructure",
    level: "beginner",
    levelLabel: "Level 1: Beginner",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    experienceRecommended: "0 - 1 Year",
    examDuration: "Online assessment / Self-paced",
    cost: "Free (Self-study & Certificate)",
    prerequisites: "None",
    shortDesc: "The premier baseline credential covering core physical infrastructure concepts: electrical distribution, cooling fundamentals, fire safety, and rack layouts.",
    skillsLearned: [
      "AC vs DC power flow & UPS battery backup basics",
      "CRAC vs CRAH cooling cycles and airflow management",
      "Hot Aisle and Cold Aisle containment principles",
      "PUE calculation fundamentals and power density"
    ],
    syllabus: [
      { domain: "Data Center Power Fundamentals", weight: "30%" },
      { domain: "Cooling & Airflow Dynamics", weight: "25%" },
      { domain: "Racks, Cabling & Physical Security", weight: "25%" },
      { domain: "Fire Suppression & Life Safety", weight: "20%" }
    ],
    careerRoles: ["Data Center Technician", "Junior Facilities Tech", "NOC Operator"],
    salaryRange: "$50,000 - $75,000 / year",
    officialUrl: "https://www.schneider-electric.com",
    studyTips: "Complete Schneider Electric Energy University modules on power efficiency, harmonic distortion, and cooling airflow basics. Perfect 1st step if transitioning from general IT."
  },
  {
    id: "cert-server-plus",
    name: "CompTIA Server+",
    code: "SK0-005",
    vendor: "CompTIA",
    vendorIcon: "🖥️",
    track: "systems",
    trackLabel: "Systems & Virtualization/Storage",
    level: "beginner",
    levelLabel: "Level 1: Beginner",
    badgeColor: "bg-purple-950/60 text-purple-300 border-purple-800/60",
    experienceRecommended: "1 - 2 Years IT hands-on",
    examDuration: "90 minutes (up to 90 questions)",
    cost: "$358 USD",
    prerequisites: "CompTIA A+ or equivalent experience recommended",
    shortDesc: "Vendor-neutral validation of high-density server hardware, blade chassis, enterprise storage, virtualization, and data center disaster recovery.",
    skillsLearned: [
      "Server hardware installation, IPMI/iLO/iDRAC management",
      "RAID arrays (RAID 10, 5, 6), SAS/SATA/NVMe drives",
      "Hypervisor deployment (ESXi, KVM, Hyper-V)",
      "Disaster recovery planning, RTO/RPO, out-of-band management"
    ],
    syllabus: [
      { domain: "Server Hardware Installation & Management", weight: "18%" },
      { domain: "Server Administration", weight: "30%" },
      { domain: "Security & Disaster Recovery", weight: "24%" },
      { domain: "Troubleshooting", weight: "28%" }
    ],
    careerRoles: ["Data Center Hardware Engineer", "Server Administrator", "Systems Specialist"],
    salaryRange: "$60,000 - $85,000 / year",
    officialUrl: "https://www.comptia.org/certifications/server",
    studyTips: "Practice blade server seating, hot-plug power supply swaps, and IPMI bios network configurations. Understand SAS backplanes and RAID rebuild penalties."
  },
  {
    id: "cert-ccna",
    name: "Cisco Certified Network Associate (CCNA)",
    code: "200-301 CCNA",
    vendor: "Cisco",
    vendorIcon: "🌐",
    track: "networking",
    trackLabel: "Network & High-Speed Fabric",
    level: "beginner",
    levelLabel: "Level 1: Beginner",
    badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
    experienceRecommended: "6 - 12 Months networking",
    examDuration: "120 minutes (100-105 questions)",
    cost: "$300 USD",
    prerequisites: "None",
    shortDesc: "The essential foundational credential for enterprise networking, routing, switching, IP services, and network automation required before entering Data Center fabric technologies.",
    skillsLearned: [
      "TCP/IP, subnetting, VLANs, 802.1Q trunking, EtherChannel (LACP)",
      "OSPF routing protocol, equal-cost multi-pathing (ECMP)",
      "Network security, ACLs, SSH, port security",
      "Basic programmability (REST APIs, JSON, Python automation)"
    ],
    syllabus: [
      { domain: "Network Fundamentals", weight: "20%" },
      { domain: "Network Access (Switching & VLANs)", weight: "20%" },
      { domain: "IP Connectivity (Routing & OSPF)", weight: "25%" },
      { domain: "IP Services (DHCP, DNS, NAT, NTP)", weight: "10%" },
      { domain: "Security Fundamentals", weight: "15%" },
      { domain: "Automation & Programmability", weight: "10%" }
    ],
    careerRoles: ["Junior Network Engineer", "NOC Engineer", "Data Center Associate"],
    salaryRange: "$65,000 - $90,000 / year",
    officialUrl: "https://www.cisco.com/c/en/us/training-events/career-certifications/certifications/associate/ccna.html",
    studyTips: "Master binary subnetting without a calculator and build packet flow mental models. Practice CLI labs for VLAN trunks, OSPF adjacency, and default routing."
  },
  {
    id: "cert-cdcp",
    name: "Certified Data Center Professional (CDCP)",
    code: "EPI / EXIN CDCP",
    vendor: "EPI (Enterprise培培训)",
    vendorIcon: "🏛️",
    track: "facilities",
    trackLabel: "Facilities & Physical Infrastructure",
    level: "beginner",
    levelLabel: "Level 1: Beginner",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    experienceRecommended: "1 - 2 Years in Data Center/IT",
    examDuration: "60 minutes (40 multiple choice)",
    cost: "$495 - $1,200 USD (Includes Course)",
    prerequisites: "None",
    shortDesc: "The globally recognized premier foundational certification covering high-availability Data Center design standards aligned with ANSI/TIA-942 and EN 50600.",
    skillsLearned: [
      "ANSI/TIA-942 Tier / Rating structure (Rated 1 to 4)",
      "Electrical infrastructure sizing (kVA, kW, power factor, harmonics)",
      "HVAC and Precision cooling calculation (Sensible heat ratio, CFM)",
      "Fire detection (VESDA) and clean agent gas suppression (FM200, Novec)",
      "Earthing, bonding, and EMI shielding for mission-critical rooms"
    ],
    syllabus: [
      { domain: "Data Center Location, Building & Structural", weight: "15%" },
      { domain: "Electrical & Power Systems Redundancy", weight: "30%" },
      { domain: "Cooling & Airflow Containment", weight: "25%" },
      { domain: "Telecommunications & Structured Cabling", weight: "15%" },
      { domain: "Fire Safety, Security & Monitoring", weight: "15%" }
    ],
    careerRoles: ["Data Center Facilities Engineer", "Data Center Operations Specialist", "Site Engineer"],
    salaryRange: "$70,000 - $95,000 / year",
    officialUrl: "https://www.epi-ap.com/services/1/2/CDCP",
    studyTips: "Memorize ANSI/TIA-942 Rated 1 through Rated 4 criteria, static transfer switch operations, and earthing busbar topologies."
  },

  // ================= LEVEL 2: INTERMEDIATE / ASSOCIATE =================
  {
    id: "cert-dccor",
    name: "Cisco CCNP Data Center Core (DCCOR)",
    code: "350-601 DCCOR",
    vendor: "Cisco",
    vendorIcon: "⚡",
    track: "networking",
    trackLabel: "Network & High-Speed Fabric",
    level: "intermediate",
    levelLabel: "Level 2: Intermediate",
    badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
    experienceRecommended: "3 - 5 Years networking/DC",
    examDuration: "120 minutes (90-110 questions)",
    cost: "$400 USD",
    prerequisites: "None formal (CCNA level knowledge strongly recommended)",
    shortDesc: "The core milestone exam for Cisco Data Center architecture, qualifying candidates for CCNP Data Center and acting as the written prerequisite for the CCIE Data Center Lab.",
    skillsLearned: [
      "Cisco Nexus 9000/7000 NX-OS architecture & vPC (Virtual Port Channel)",
      "Overlay networks: VXLAN BGP EVPN spine-leaf fabric setup",
      "Unified Computing System (Cisco UCS B-Series / C-Series, Intersight)",
      "Storage Area Networks: Fibre Channel, FCoE, VSANs, FLOGI, zoning",
      "Data Center automation using Python, Ansible, and NX-OS REST APIs"
    ],
    syllabus: [
      { domain: "Network Architecture & Fabric", weight: "25%" },
      { domain: "Compute (Cisco UCS & Intersight)", weight: "25%" },
      { domain: "Storage Network (Fibre Channel / VSAN)", weight: "20%" },
      { domain: "Automation & Programmability", weight: "15%" },
      { domain: "Security & Operations", weight: "15%" }
    ],
    careerRoles: ["Data Center Network Engineer", "Cisco Nexus Specialist", "Fabric Infrastructure Engineer"],
    salaryRange: "$95,000 - $130,000 / year",
    officialUrl: "https://www.cisco.com/c/en/us/training-events/career-certifications/certifications/professional/ccnp-data-center.html",
    studyTips: "Lab Nexus 9000v in CML or EVE-NG. Master vPC peer-link/keepalive mechanics, VXLAN VTEP encapsulation, and Fibre Channel zoning (default zone, hard vs soft zoning)."
  },
  {
    id: "cert-uptime-ats",
    name: "Accredited Tier Specialist (ATS)",
    code: "Uptime Institute ATS",
    vendor: "Uptime Institute",
    vendorIcon: "🏆",
    track: "facilities",
    trackLabel: "Facilities & Physical Infrastructure",
    level: "intermediate",
    levelLabel: "Level 2: Intermediate",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    experienceRecommended: "2 - 4 Years in Data Center operations",
    examDuration: "Proctored course exam",
    cost: "$4,950 USD (Includes 3-day executive training)",
    prerequisites: "Data Center management or facilities background",
    shortDesc: "Authorized by the global authority for data center availability. Teaches management and technical teams how to operate and maintain Tier I through Tier IV data centers without compromising uptime.",
    skillsLearned: [
      "Uptime Institute Tier Standard: Topology & Operational Sustainability",
      "Concurrent Maintainability vs Fault Tolerance requirements",
      "Operational human error mitigation and standard operating procedures (MOPs/SOPs)",
      "Continuous cooling and autonomous response during utility failures"
    ],
    syllabus: [
      { domain: "Tier Classification Definitions (Tier I-IV)", weight: "35%" },
      { domain: "Mechanical Cooling Topology & Thermal Storage", weight: "25%" },
      { domain: "Electrical Distribution & Topology Failover", weight: "25%" },
      { domain: "Operational Sustainability & Human Error", weight: "15%" }
    ],
    careerRoles: ["Critical Facilities Manager", "Data Center Operations Lead", "Director of Infrastructure"],
    salaryRange: "$100,000 - $140,000 / year",
    officialUrl: "https://uptimeinstitute.com/accredited-tier-specialist",
    studyTips: "Memorize the strict differences between N+1 and 2N, continuous cooling ride-through requirements for Tier III/IV, and concurrent maintenance of busways."
  },
  {
    id: "cert-vcp-dcv",
    name: "VMware Certified Professional - DCV",
    code: "2V0-21.23 / VCP-DCV",
    vendor: "VMware / Broadcom",
    vendorIcon: "☁️",
    track: "systems",
    trackLabel: "Systems & Virtualization/Storage",
    level: "intermediate",
    levelLabel: "Level 2: Intermediate",
    badgeColor: "bg-purple-950/60 text-purple-300 border-purple-800/60",
    experienceRecommended: "1 - 3 Years vSphere experience",
    examDuration: "135 minutes (70 questions)",
    cost: "$250 USD + mandatory training course",
    prerequisites: "VMware vSphere: Install, Configure, Manage course",
    shortDesc: "The industry standard certification for enterprise hypervisor infrastructure, managing vSphere 8 clusters, DRS, High Availability (HA), and vSAN storage.",
    skillsLearned: [
      "ESXi host deployment and vCenter Server appliance configuration",
      "Distributed Virtual Switches (vDS) and port group isolation",
      "vSphere High Availability (HA) heartbeats & Distributed Resource Scheduler (DRS)",
      "vSAN architecture: disk groups, cache tier, witness appliances"
    ],
    syllabus: [
      { domain: "Architecture and Technologies", weight: "22%" },
      { domain: "VMware Products and Solutions", weight: "18%" },
      { domain: "Installing, Configuring, and Setup", weight: "26%" },
      { domain: "Performance-tuning, Optimization and Upgrades", weight: "16%" },
      { domain: "Troubleshooting and Repairing", weight: "18%" }
    ],
    careerRoles: ["Virtualization Engineer", "Cloud Infrastructure Administrator", "Data Center Systems Engineer"],
    salaryRange: "$85,000 - $120,000 / year",
    officialUrl: "https://www.broadcom.com/products/software/virtualization",
    studyTips: "Set up a nested ESXi home lab. Understand split-brain scenarios in HA clusters, vMotion network requirements, and storage policy-based management (SPBM)."
  },
  {
    id: "cert-bicsi-dcdc",
    name: "Data Center Design Consultant (DCDC)",
    code: "BICSI DCDC",
    vendor: "BICSI",
    vendorIcon: "📐",
    track: "facilities",
    trackLabel: "Facilities & Physical Infrastructure",
    level: "intermediate",
    levelLabel: "Level 2: Intermediate",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    experienceRecommended: "2 - 3 Years in Data Center engineering",
    examDuration: "120 minutes (100 multiple choice)",
    cost: "$510 - $725 USD",
    prerequisites: "Documented Data Center design experience",
    shortDesc: "The premier engineering standard for physical Data Center architectural design, structured telecommunication pathways, spatial planning, and mechanical/electrical coordination.",
    skillsLearned: [
      "BICSI-002 Data Center Design Standard and best practices",
      "Structured cabling topologies: MDA, HDA, EDA, and ZDA design",
      "Architectural site selection, floor load calculation, and structural resilience",
      "Power redundancy paths, generator fuel storage, and grounding (ANSI/TIA-607)"
    ],
    syllabus: [
      { domain: "Site Selection & Space Planning", weight: "15%" },
      { domain: "Electrical Systems & UPS Redundancy", weight: "25%" },
      { domain: "Mechanical, HVAC & Fire Safety", weight: "25%" },
      { domain: "Telecommunications & Structured Cabling Pathways", weight: "25%" },
      { domain: "Commissioning & Security", weight: "10%" }
    ],
    careerRoles: ["Data Center Design Engineer", "Infrastructure Consultant", "Senior Cabling Architect"],
    salaryRange: "$95,000 - $135,000 / year",
    officialUrl: "https://www.bicsi.org/education-certification/certification/dcdc",
    studyTips: "Study the ANSI/BICSI 002-2024 manual deeply. Memorize maximum channel lengths for OM4/OM5 fiber and structured cabling separation from power busways."
  },

  // ================= LEVEL 3: ADVANCED / SPECIALIST =================
  {
    id: "cert-dcid",
    name: "Designing Cisco Data Center Infrastructure (DCID)",
    code: "300-610 DCID",
    vendor: "Cisco",
    vendorIcon: "🏗️",
    track: "networking",
    trackLabel: "Network & High-Speed Fabric",
    level: "advanced",
    levelLabel: "Level 3: Advanced",
    badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
    experienceRecommended: "4 - 7 Years DC architecture",
    examDuration: "90 minutes (55-65 questions)",
    cost: "$300 USD",
    prerequisites: "CCNP DCCOR or equivalent background",
    shortDesc: "Advanced design concentration for architects engineering multi-tenant Spine-Leaf fabrics, Data Center Interconnect (DCI), Cisco ACI policy fabrics, and multi-tier SAN storage.",
    skillsLearned: [
      "Clos 2-stage and 3-stage Spine-Leaf fabric dimensioning and oversubscription calculation",
      "EVPN VXLAN fabric design, Anycast Gateways, distributed routing",
      "DCI topologies: OTV, VXLAN EVPN Multi-Site, MPLS Layer 3 VPN",
      "Cisco UCS fabric interconnects, vMedia, policy-driven compute profiles",
      "Storage design: FC Director redundancy, FCIP extension, NVMe-oF adoption"
    ],
    syllabus: [
      { domain: "Network Design (Spine-Leaf & Overlays)", weight: "35%" },
      { domain: "Compute Design (Cisco UCS)", weight: "25%" },
      { domain: "Storage Network Design (SAN / NVMe-oF)", weight: "20%" },
      { domain: "Automation & Security Design", weight: "20%" }
    ],
    careerRoles: ["Principal Data Center Architect", "Lead Solutions Architect", "Enterprise Network Designer"],
    salaryRange: "$125,000 - $165,000 / year",
    officialUrl: "https://www.cisco.com/c/en/us/training-events/career-certifications/certifications/professional/ccnp-data-center.html",
    studyTips: "Focus on design trade-offs: when to choose eBGP vs iBGP underlay, symmetric vs asymmetric IRB, and calculating bisectional fabric bandwidth without blocking."
  },
  {
    id: "cert-dcaci",
    name: "Implementing Cisco Application Centric Infrastructure (DCACI)",
    code: "300-620 DCACI",
    vendor: "Cisco",
    vendorIcon: "🤖",
    track: "networking",
    trackLabel: "Network & High-Speed Fabric",
    level: "advanced",
    levelLabel: "Level 3: Advanced",
    badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
    experienceRecommended: "3 - 6 Years network engineering",
    examDuration: "90 minutes (55-65 questions)",
    cost: "$300 USD",
    prerequisites: "CCNP DCCOR or equivalent background",
    shortDesc: "Dedicated specialty certification on Cisco's SDN flagship fabric: Cisco ACI, APIC controllers, Endpoint Groups (EPGs), Contracts, and microsegmentation.",
    skillsLearned: [
      "APIC clustering, fabric discovery, LLDP bootstrapping",
      "ACI policy object model: Tenants, VRFs, Bridge Domains (BD), Subnets, EPGs",
      "Contracts, Subjects, Filters, and hardware TCAM policy enforcement",
      "External L2/L3 connectivity: L2Out, L3Out (OSPF, BGP)",
      "ACI Multi-Pod and Multi-Site orchestration"
    ],
    syllabus: [
      { domain: "ACI Fabric Infrastructure & APIC Setup", weight: "20%" },
      { domain: "ACI Logical Object Configuration", weight: "25%" },
      { domain: "External Network Connectivity (L3Out/L2Out)", weight: "20%" },
      { domain: "VMM Integration (vCenter, OpenStack)", weight: "15%" },
      { domain: "ACI Management, Troubleshooting & Security", weight: "20%" }
    ],
    careerRoles: ["Cisco ACI Specialist", "SDN Network Architect", "Data Center Fabric Engineer"],
    salaryRange: "$120,000 - $160,000 / year",
    officialUrl: "https://www.cisco.com/c/en/us/training-events/career-certifications/certifications/professional/ccnp-data-center.html",
    studyTips: "Understand how Bridge Domains map to VXLAN VNIs under the hood. Practice configuring L3Out with BGP peering to external perimeter firewalls."
  },
  {
    id: "cert-cdcs",
    name: "Certified Data Center Specialist (CDCS)",
    code: "EPI / EXIN CDCS",
    vendor: "EPI",
    vendorIcon: "⚙️",
    track: "facilities",
    trackLabel: "Facilities & Physical Infrastructure",
    level: "advanced",
    levelLabel: "Level 3: Advanced",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    experienceRecommended: "3 - 5 Years in mission-critical facilities",
    examDuration: "90 minutes (60 questions)",
    cost: "$650 - $1,600 USD (Includes advanced course)",
    prerequisites: "Must hold valid CDCP certification",
    shortDesc: "Advanced physical infrastructure certification diving deep into engineering calculations for mechanical cooling, electrical transformers, short-circuit calculations, and CFD modeling.",
    skillsLearned: [
      "Fault tree analysis and single point of failure (SPOF) identification",
      "Advanced thermal calculations: Sensible Heat Ratio, psychrometric charts",
      "Rotary vs Static UPS efficiency curves and harmonic mitigation (THD)",
      "Computational Fluid Dynamics (CFD) air recirculation mitigation"
    ],
    syllabus: [
      { domain: "Advanced Power & Electrical Engineering", weight: "35%" },
      { domain: "Advanced Cooling Systems & Thermodynamics", weight: "30%" },
      { domain: "Structured Cabling & High-Density Plant", weight: "15%" },
      { domain: "Fire Protection, Earthing & Building Automation", weight: "20%" }
    ],
    careerRoles: ["Senior Critical Facilities Engineer", "Data Center Infrastructure Architect", "Technical Director"],
    salaryRange: "$115,000 - $155,000 / year",
    officialUrl: "https://www.epi-ap.com/services/1/2/CDCS",
    studyTips: "Practice reading electrical single-line diagrams (SLDs) and calculating voltage drops, fault currents, and chiller delta-T values."
  },
  {
    id: "cert-uptime-atd",
    name: "Accredited Tier Designer (ATD)",
    code: "Uptime Institute ATD",
    vendor: "Uptime Institute",
    vendorIcon: "📐",
    track: "facilities",
    trackLabel: "Facilities & Physical Infrastructure",
    level: "advanced",
    levelLabel: "Level 3: Advanced",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    experienceRecommended: "Licensed Professional Engineer (PE) or equivalent",
    examDuration: "Intensive 3-day course + examination",
    cost: "$4,950 USD",
    prerequisites: "Professional Engineering license or registered architectural credentials",
    shortDesc: "The global gold-standard credential for professional engineers who design physical Tier-certified data centers to ensure blueprints comply with Uptime Tier Standards without costly site remediation.",
    skillsLearned: [
      "Rigorous Tier I-IV engineering blueprint validation",
      "Elimination of subtle architectural and structural SPOFs",
      "Continuous cooling ride-through design: chilled water buffer tanks, thermal storage",
      "Autonomous electrical failover during emergency generator transition"
    ],
    syllabus: [
      { domain: "Tier System Mechanics & Rules", weight: "35%" },
      { domain: "Electrical Design Compliance", weight: "25%" },
      { domain: "Mechanical & Cooling Compliance", weight: "25%" },
      { domain: "Architectural, Civil & Structural Standards", weight: "15%" }
    ],
    careerRoles: ["Principal MEP Engineer", "Data Center Consulting Architect", "Lead Infrastructure Designer"],
    salaryRange: "$130,000 - $180,000 / year",
    officialUrl: "https://uptimeinstitute.com/accredited-tier-designer",
    studyTips: "Examine common design pitfalls that cause Uptime Institute audit failures, such as shared bypass circuits or water top-up dependency during utility outages."
  },

  // ================= LEVEL 4: EXPERT / MASTER / ARCHITECT =================
  {
    id: "cert-ccie-dc",
    name: "Cisco Certified Internetwork Expert - Data Center",
    code: "CCIE Data Center v3.1",
    vendor: "Cisco",
    vendorIcon: "👑",
    track: "networking",
    trackLabel: "Network & High-Speed Fabric",
    level: "expert",
    levelLabel: "Level 4: Expert",
    badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
    experienceRecommended: "7 - 10+ Years enterprise DC fabric engineering",
    examDuration: "Core written exam + 8-Hour Hands-On Lab Exam",
    cost: "$400 (Written) + $1,600 USD (8-hr Practical Lab)",
    prerequisites: "Passing score on DCCOR 350-601",
    shortDesc: "The pinnacle engineering credential in Data Center networking worldwide. Tests real-time design, deployment, automation, and troubleshooting of complex Nexus EVPN fabrics and Cisco ACI SDN under rigorous 8-hour lab conditions.",
    skillsLearned: [
      "End-to-end VXLAN BGP EVPN fabric deployment from bare metal",
      "Cisco ACI Multi-Site architecture and cross-fabric microsegmentation",
      "Cisco UCS server profile orchestration and Intersight workflow automation",
      "SAN fabric integration: Fibre Channel zoning, NPV, NPIV, NVMe-oF",
      "Network programmability: Python, Ansible, YANG models, and telemetry pipelines"
    ],
    syllabus: [
      { domain: "Module 1: Design (Scenario-based)", weight: "3 hours / 30%" },
      { domain: "Module 2: Deploy, Operate and Optimize (Hands-on CLI/API)", weight: "5 hours / 70%" },
      { subdomains: [
        "Data Center L2/L3 Fabrics (vPC, EVPN, RoCEv2)",
        "Data Center Interconnect (DCI)",
        "Cisco ACI & Cloud-Scale Fabrics",
        "Data Center Storage Networking",
        "Data Center Compute (UCS & Hyperflex)",
        "Data Center Automation & Telemetry"
      ]}
    ],
    careerRoles: ["CCIE Principal Network Architect", "Chief Network Architect", "Distinguished Engineer"],
    salaryRange: "$160,000 - $240,000+ / year",
    officialUrl: "https://www.cisco.com/c/en/us/training-events/career-certifications/certifications/expert/ccie-data-center.html",
    studyTips: "Build speed on the CLI and APIC GUI. Set up automated mock labs with timer limits. Master EVPN Type-2 and Type-5 route debugging, and Python SDK scripts for APIC."
  },
  {
    id: "cert-cdce",
    name: "Certified Data Center Expert (CDCE)",
    code: "EPI / EXIN CDCE",
    vendor: "EPI",
    vendorIcon: "🏛️",
    track: "facilities",
    trackLabel: "Facilities & Physical Infrastructure",
    level: "expert",
    levelLabel: "Level 4: Expert",
    badgeColor: "bg-amber-950/60 text-amber-300 border-amber-800/60",
    experienceRecommended: "5 - 10+ Years in critical facility design",
    examDuration: "90 minutes multiple choice + Real-life business case assignment",
    cost: "$1,800 - $3,200 USD (Includes masterclass)",
    prerequisites: "Must hold valid CDCP and CDCS credentials",
    shortDesc: "The world's highest physical Data Center engineering credential. Validates candidates who can design, validate, and audit multi-megawatt Tier IV / Rated 4 facilities from architectural conception through commissioning.",
    skillsLearned: [
      "Mastery of ANSI/TIA-942, EN 50600, and ISO/IEC 22237 design standards",
      "Advanced business case and CapEx / OpEx lifecycle modeling for hyperscalers",
      "Complete site audit, gap analysis, and mission-critical risk mitigation",
      "Comprehensive electrical, mechanical, and civil engineering verification"
    ],
    syllabus: [
      { domain: "Comprehensive Facility Design & Standards (TIA-942)", weight: "30%" },
      { domain: "Advanced Commissioning (Level 1 to 5 IST)", weight: "25%" },
      { domain: "Operations, Maintenance & SLA Engineering", weight: "25%" },
      { domain: "Capstone Real-World Data Center Blueprint Defense", weight: "20%" }
    ],
    careerRoles: ["Chief Facilities Architect", "VP of Data Center Infrastructure", "Master Data Center Consultant"],
    salaryRange: "$150,000 - $220,000+ / year",
    officialUrl: "https://www.epi-ap.com/services/1/2/CDCE",
    studyTips: "Learn the exact commissioning levels (Level 1 Factory Acceptance to Level 5 Integrated Systems Testing - IST) and black-building pull-the-plug test procedures."
  },
  {
    id: "cert-vcdx-dcv",
    name: "VMware Certified Design Expert (VCDX-DCV)",
    code: "VCDX-DCV",
    vendor: "VMware / Broadcom",
    vendorIcon: "🛡️",
    track: "systems",
    trackLabel: "Systems & Virtualization/Storage",
    level: "expert",
    levelLabel: "Level 4: Expert",
    badgeColor: "bg-purple-950/60 text-purple-300 border-purple-800/60",
    experienceRecommended: "8 - 12+ Years enterprise architecture",
    examDuration: "Design Defense Panel: 75-min presentation + 45-min scenario defense",
    cost: "$3,000+ USD application & defense fee",
    prerequisites: "VCAP-DCV Design + VCAP-DCV Deploy",
    shortDesc: "One of the most prestigious designations in enterprise IT. Requires submitting an exhaustive production data center architecture design package and defending it live before a panel of veteran VCDX panelists.",
    skillsLearned: [
      "Translating complex business requirements into resilient architectural designs",
      "AMPRS framework: Availability, Manageability, Performance, Recoverability, Security",
      "Defending architectural trade-offs, storage latency bounds, and failure domains live",
      "Multi-site active-active stretched clusters and disaster recovery orchestration"
    ],
    syllabus: [
      { domain: "Comprehensive Design Documentation Submission (200+ pages)", weight: "50%" },
      { domain: "Live Oral Defense & Panel Cross-Examination", weight: "30%" },
      { domain: "Unseen Architecture Scenario Problem Solving", weight: "20%" }
    ],
    careerRoles: ["Chief Technology Officer (CTO)", "Enterprise Principal Architect", "VP of Cloud Architecture"],
    salaryRange: "$175,000 - $260,000+ / year",
    officialUrl: "https://www.broadcom.com",
    studyTips: "Document every architectural decision with clear business justification, assumptions, risks, and constraints. Practice whiteboard mock defenses with existing VCDX holders."
  },
  {
    id: "cert-jncie-dc",
    name: "Juniper Networks Certified Expert - Data Center",
    code: "JNCIE-DC",
    vendor: "Juniper Networks",
    vendorIcon: "🌲",
    track: "networking",
    trackLabel: "Network & High-Speed Fabric",
    level: "expert",
    levelLabel: "Level 4: Expert",
    badgeColor: "bg-cyan-950/60 text-cyan-300 border-cyan-800/60",
    experienceRecommended: "6 - 10 Years Junos Data Center architecture",
    examDuration: "6-Hour Hands-On Practical Lab Exam",
    cost: "$1,600 USD",
    prerequisites: "JNCIP-DC",
    shortDesc: "The pinnacle engineering credential for Juniper QFX series switches, Junos OS, EVPN-VXLAN IP fabric engineering, and Apstra intent-based automation.",
    skillsLearned: [
      "Junos OS Underlay & Overlay configuration on QFX5120/QFX10000",
      "EVPN Multi-Chassis Link Aggregation (ESI-LAG) and Anycast Gateway",
      "Data Center Interconnect (DCI) using EVPN Over-the-Top and Seamless MPLS",
      "Juniper Apstra fabric management and intent validation"
    ],
    syllabus: [
      { domain: "Data Center Infrastructure & IP Fabrics", weight: "25%" },
      { domain: "Overlay Fabrics (EVPN-VXLAN, ESI)", weight: "35%" },
      { domain: "Data Center Interconnect (DCI)", weight: "20%" },
      { domain: "Security, Class of Service (CoS) & Telemetry", weight: "20%" }
    ],
    careerRoles: ["Principal Network Engineer", "Juniper DC Specialist", "Cloud Backbone Architect"],
    salaryRange: "$150,000 - $210,000 / year",
    officialUrl: "https://www.juniper.net/us/en/training/certification/tracks/data-center/jncie-dc.html",
    studyTips: "Master ESI-LAG multi-homing type 1 and type 4 routes, and CoS queue scheduling for RoCEv2 loss-sensitive storage traffic."
  }
];

/**
 * Roadmap Controller
 */
const RoadmapEngine = {
  activeTrack: "all",
  activeLevel: "all",
  searchQuery: "",
  
  // Progress tracker stored in localStorage: { certId: 'not_started' | 'target' | 'in_progress' | 'completed' }
  progress: JSON.parse(localStorage.getItem("dccore_cert_progress") || "{}"),

  init: function() {
    this.render();
    this.updateStats();
  },

  setProgress: function(certId, status) {
    this.progress[certId] = status;
    localStorage.setItem("dccore_cert_progress", JSON.stringify(this.progress));
    this.render();
    this.updateStats();
  },

  filterTrack: function(track) {
    this.activeTrack = track;
    // Update button styles
    document.querySelectorAll(".roadmap-track-btn").forEach(btn => {
      const isSelected = btn.dataset.track === track;
      btn.className = `roadmap-track-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
        isSelected 
          ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30" 
          : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
      }`;
    });
    this.render();
  },

  filterLevel: function(level) {
    this.activeLevel = level;
    document.querySelectorAll(".roadmap-level-btn").forEach(btn => {
      const isSelected = btn.dataset.level === level;
      btn.className = `roadmap-level-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
        isSelected 
          ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30" 
          : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
      }`;
    });
    this.render();
  },

  getFilteredCerts: function() {
    return CERT_ROADMAP.filter(c => {
      const matchTrack = this.activeTrack === "all" || c.track === this.activeTrack;
      const matchLevel = this.activeLevel === "all" || c.level === this.activeLevel;
      const q = this.searchQuery.toLowerCase();
      const matchSearch = !q || 
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.vendor.toLowerCase().includes(q) ||
        c.shortDesc.toLowerCase().includes(q) ||
        c.skillsLearned.some(s => s.toLowerCase().includes(q));

      return matchTrack && matchLevel && matchSearch;
    });
  },

  updateStats: function() {
    const total = CERT_ROADMAP.length;
    let completed = 0;
    let inProgress = 0;
    let target = 0;

    CERT_ROADMAP.forEach(c => {
      const st = this.progress[c.id];
      if (st === "completed") completed++;
      else if (st === "in_progress") inProgress++;
      else if (st === "target") target++;
    });

    const percent = Math.round((completed / total) * 100);

    const percentEl = document.getElementById("roadmap-progress-percent");
    const barEl = document.getElementById("roadmap-progress-bar");
    const completedEl = document.getElementById("roadmap-stat-completed");
    const inProgressEl = document.getElementById("roadmap-stat-inprogress");
    const targetEl = document.getElementById("roadmap-stat-target");
    const totalEl = document.getElementById("roadmap-stat-total");

    if (percentEl) percentEl.textContent = `${percent}% Completed`;
    if (barEl) barEl.style.width = `${percent}%`;
    if (completedEl) completedEl.textContent = completed;
    if (inProgressEl) inProgressEl.textContent = inProgress;
    if (targetEl) targetEl.textContent = target;
    if (totalEl) totalEl.textContent = total;
  },

  render: function() {
    const container = document.getElementById("roadmap-cards-container");
    if (!container) return;

    const certs = this.getFilteredCerts();

    if (certs.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <p class="text-4xl mb-2">🔍</p>
          <p class="font-medium text-slate-300">No certifications match your filter criteria.</p>
          <p class="text-xs text-slate-500 mt-1">Try clearing your search or switching tracks/levels.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = certs.map(cert => {
      const currentStatus = this.progress[cert.id] || "not_started";
      
      const statusBadge = {
        not_started: `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Not Started</span>`,
        target: `<span class="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">🎯 Target</span>`,
        in_progress: `<span class="text-[10px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">⏳ In Progress</span>`,
        completed: `<span class="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">✅ Certified</span>`
      }[currentStatus];

      return `
        <div class="glass-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition group">
          <div>
            <!-- Header: Vendor & Level -->
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${cert.badgeColor}">
                <span>${cert.vendorIcon}</span> ${cert.vendor}
              </span>
              <div class="flex items-center gap-2">
                ${statusBadge}
                <span class="text-[11px] font-mono text-slate-400 uppercase tracking-wider">${cert.level}</span>
              </div>
            </div>

            <!-- Title & Code -->
            <h3 class="text-base font-bold text-white group-hover:text-cyan-400 transition cursor-pointer" onclick="RoadmapEngine.openModal('${cert.id}')">
              ${cert.name}
            </h3>
            <p class="text-xs font-mono text-slate-400 mt-0.5">${cert.code}</p>

            <!-- Short Desc -->
            <p class="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
              ${cert.shortDesc}
            </p>

            <!-- Key Info Pills -->
            <div class="grid grid-cols-2 gap-2 mt-4 text-[11px]">
              <div class="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80">
                <span class="text-slate-500 block text-[10px]">Track</span>
                <span class="font-medium text-slate-200 truncate block">${cert.trackLabel}</span>
              </div>
              <div class="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80">
                <span class="text-slate-500 block text-[10px]">Experience</span>
                <span class="font-medium text-slate-200 truncate block">${cert.experienceRecommended}</span>
              </div>
            </div>

            <!-- Core Skills List -->
            <div class="mt-3.5 space-y-1">
              <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Key Competencies:</span>
              <ul class="text-[11px] text-slate-300 space-y-1 list-disc pl-4">
                ${cert.skillsLearned.slice(0, 2).map(skill => `<li class="truncate">${skill}</li>`).join("")}
              </ul>
            </div>
          </div>

          <!-- Bottom Footer: Status Selector & Details CTA -->
          <div class="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <!-- Status Dropdown Selector -->
            <div class="flex items-center gap-1.5">
              <label for="status-${cert.id}" class="text-[10px] text-slate-400">My Status:</label>
              <select 
                id="status-${cert.id}"
                onchange="RoadmapEngine.setProgress('${cert.id}', this.value)"
                class="bg-slate-900 border border-slate-700 rounded-md text-[11px] text-white px-2 py-1 focus:outline-none focus:border-cyan-500"
              >
                <option value="not_started" ${currentStatus === "not_started" ? "selected" : ""}>Not Started</option>
                <option value="target" ${currentStatus === "target" ? "selected" : ""}>🎯 Target</option>
                <option value="in_progress" ${currentStatus === "in_progress" ? "selected" : ""}>⏳ In Progress</option>
                <option value="completed" ${currentStatus === "completed" ? "selected" : ""}>✅ Certified</option>
              </select>
            </div>

            <!-- Open Deep Dive Modal -->
            <button 
              onclick="RoadmapEngine.openModal('${cert.id}')"
              class="px-3 py-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/70 text-xs font-semibold transition flex items-center gap-1 shadow-sm"
            >
              <span>Blueprint</span> &rarr;
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  openModal: function(certId) {
    const cert = CERT_ROADMAP.find(c => c.id === certId);
    if (!cert) return;

    const modal = document.getElementById("topic-modal");
    const content = document.getElementById("topic-modal-content");
    if (!modal || !content) return;

    const currentStatus = this.progress[cert.id] || "not_started";

    content.innerHTML = `
      <div class="p-6 sm:p-8 space-y-6 text-slate-200">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs px-2.5 py-0.5 rounded-full border ${cert.badgeColor}">
                ${cert.vendorIcon} ${cert.vendor}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                ${cert.code}
              </span>
              <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                ${cert.levelLabel}
              </span>
            </div>
            <h2 class="text-2xl font-extrabold text-white">${cert.name}</h2>
            <p class="text-xs text-slate-400 mt-1">${cert.trackLabel}</p>
          </div>
          <button onclick="App.closeModal()" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition" aria-label="Close modal">
            ✕
          </button>
        </div>

        <!-- Overview Quick Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span class="text-slate-500 block text-[10px] uppercase font-bold">Exam Duration</span>
            <span class="font-bold text-white text-sm mt-0.5 block">${cert.examDuration}</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span class="text-slate-500 block text-[10px] uppercase font-bold">Estimated Cost</span>
            <span class="font-bold text-emerald-400 text-sm mt-0.5 block">${cert.cost}</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span class="text-slate-500 block text-[10px] uppercase font-bold">Experience Guide</span>
            <span class="font-bold text-cyan-400 text-sm mt-0.5 block">${cert.experienceRecommended}</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <span class="text-slate-500 block text-[10px] uppercase font-bold">Salary Expectation</span>
            <span class="font-bold text-amber-300 text-sm mt-0.5 block">${cert.salaryRange}</span>
          </div>
        </div>

        <!-- Description -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">Certification Scope</h3>
          <p class="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            ${cert.shortDesc}
          </p>
        </div>

        <!-- Syllabus Breakdown -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">Exam Blueprint & Domain Weights</h3>
          <div class="space-y-2">
            ${cert.syllabus.map(item => `
              <div class="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between gap-4">
                <span class="text-xs font-medium text-slate-200">${item.domain || item.subdomains?.join(", ")}</span>
                <span class="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/60">${item.weight || "Core"}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- What You Will Master -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">Hands-on Skills & Competencies</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            ${cert.skillsLearned.map(skill => `
              <li class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2">
                <span class="text-emerald-400 font-bold">✓</span>
                <span>${skill}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Target Job Titles -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">Target Roles & Career Paths</h3>
          <div class="flex flex-wrap gap-2">
            ${cert.careerRoles.map(role => `
              <span class="text-xs px-3 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700">
                💼 ${role}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Study Strategy & Pro-Tips -->
        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/60">
          <h4 class="text-xs font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5 uppercase tracking-wider">
            <span>💡</span> Architect Study Strategy & Traps
          </h4>
          <p class="text-xs text-slate-300 leading-relaxed">
            ${cert.studyTips}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400">Set Personal Tracker:</span>
            <select 
              onchange="RoadmapEngine.setProgress('${cert.id}', this.value); RoadmapEngine.openModal('${cert.id}');"
              class="bg-slate-900 border border-slate-700 rounded-lg text-xs text-white px-3 py-1.5 focus:outline-none focus:border-cyan-500"
            >
              <option value="not_started" ${currentStatus === "not_started" ? "selected" : ""}>Not Started</option>
              <option value="target" ${currentStatus === "target" ? "selected" : ""}>🎯 Target Certification</option>
              <option value="in_progress" ${currentStatus === "in_progress" ? "selected" : ""}>⏳ In Progress</option>
              <option value="completed" ${currentStatus === "completed" ? "selected" : ""}>✅ Certified</option>
            </select>
          </div>

          <div class="flex items-center gap-2">
            <a 
              href="${cert.officialUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
            >
              <span>Official Vendor Page</span> &rarr;
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }
};
