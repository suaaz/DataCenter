# 🏢 DataCenterCore.io — Data Center Architecture, Facilities & Fabric Visual Playbook

An interactive, visual-first personal website designed to explore and master **Mission-Critical Data Center Engineering** by **Abdul-Azeez Sulaimon**. Covers everything from physical facilities (Uptime Tier I-IV, 2N power paths, liquid cooling thermodynamics, ANSI/TIA-942) to high-speed networking (Clos Spine-Leaf, BGP EVPN, RoCEv2 AI clusters, SAN/NVMe-oF).

Features an interactive **Certification Roadmap (Beginner to Expert)** across Facilities, Networking, and Systems with persistent local-storage milestone tracking!

![DataCenter Banner](https://img.shields.io/badge/Data%20Center-Facilities%20%7C%20Spine--Leaf%20%7C%20EVPN-06b6d4?style=for-the-badge&logo=cisco&logoColor=white)
![Hosted on GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-10b981?style=for-the-badge&logo=github&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## ✨ Features

- 🎓 **Interactive Certification Roadmap (Beginner to Expert)**:
  - Multi-track career paths across:
    - **Facilities & Physical Infrastructure** (Schneider Electric DCCA, EPI CDCP & CDCS, BICSI DCDC, Uptime Institute ATS & ATD, and world-class EPI CDCE)
    - **Network & High-Speed Fabric** (Cisco CCNA, CCNP DCCOR, DCID, DCACI, CCIE Data Center, Juniper JNCIE-DC)
    - **Systems & Virtualization/Storage** (CompTIA Server+, VMware VCP-DCV, VCDX-DCV, Nutanix NCP-MCI)
  - Interactive status dropdowns (`Not Started`, `🎯 Target`, `⏳ In Progress`, `✅ Certified`) with **real-time career completion percentage** and persistent `localStorage` saving.
  - Deep-dive blueprints for each certification detailing syllabus weights, prerequisites, duration, salary ranges, and study traps.

- 📐 **Vector Architectural Blueprints (SVG)**:
  - **2-Stage Clos Spine-Leaf Fabric**: Dynamic non-blocking bisectional bandwidth with animated East-West packet traces.
  - **2N Dual Power Path**: Complete distribution chain from Medium Voltage substation to dual server PSUs.
  - **Thermodynamic Airflow Containment**: Hot Aisle vs. Cold Aisle physics (HAC vs CAC) with CRAH coils and chimney plenums.
  - **Direct-to-Chip (D2C) Liquid Cooling**: Coolant Distribution Unit (CDU) closed loop handling 80kW-100kW+ GPU racks.
  - **Uptime Tier I-IV Comparator**: Side-by-side single-line comparison of N, N+1, concurrently maintainable, and 2N topologies.
  - **VXLAN Packet Encapsulation Breakdown**: 50-byte header anatomy and 24-bit VNI bit mapping.

- 🔬 **Interactive Data Center Simulators & Calculators**:
  - **Data Center PUE, Carbon & TCO Calculator**: Model critical IT loads (100kW to 20MW), cooling architectures (CRAC, HAC, Economizers, Liquid Immersion), and compute annual electricity costs, savings, and CO₂ emissions.
  - **Clos Spine-Leaf Bandwidth & Oversubscription Analyzer**: Dimension leaf/spine counts, port speeds (25G to 800G), and verify non-blocking (1:1) line-rate compliance for AI clusters.
  - **Uptime Tier Resiliency & Live Fault Simulator**: Inject grid outages, UPS trips, cooling failures, and busway maintenance to test whether servers stay 100% online based on Uptime Institute rules.

- 🕒 **Automated Daily Concept Spotlight**:
  - Rotates daily through mission-critical topics with core mental models, formulas, Cisco NX-OS / Arista EOS CLI commands, and an interactive multiple-choice quiz.
  - Previous/Next day calendar browser.

- 🌐 **Sister Platform Ecosystem**:
  - Cross-linked directly to Abdul-Azeez's sister hubs:
    - [NetEngineer.io (CCNA & ENCOR)](https://suaaz.github.io/CCNA/)
    - [CloudArchitect.io (AWS, Azure & GCP)](https://suaaz.github.io/Cloud/)
    - [DevOpsMastery.io (CI/CD, K8s & SRE)](https://suaaz.github.io/DevOps/)

- ⚡ **Zero-Build Architecture**:
  - Runs instantly in any browser. No build steps, Node.js, or bundlers required. 100% compatible with GitHub Pages.

---

## 🚀 Quick Start (Local)

Simply double-click `index.html` or open it in your browser:

```powershell
# Open directly in default browser on Windows
start index.html
```

---

## 🌐 Deploy to GitHub Pages (Live Website)

For a complete step-by-step tutorial, see [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md).

```powershell
git init
git add .
git commit -m "feat: Launch DataCenterCore.io facilities, fabric & certification hub"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Then in GitHub: **Repository Settings ➔ Pages ➔ Source: GitHub Actions** (uses `.github/workflows/deploy.yml`).

---

## 📁 Repository Structure

```
Data center/
├── index.html                   # Main single-page application
├── daily-status.json            # Automated daily timestamp status
├── README.md                    # Project documentation
├── DEPLOYMENT_GUIDE.md          # Step-by-step GitHub Pages setup
├── css/
│   └── styles.css               # Data center grid, LED blinkers, glassmorphism
├── js/
│   ├── app.js                   # Application controller, modal, search, bookmarks
│   ├── roadmap.js               # Beginner-to-Expert certification roadmap & tracker
│   ├── diagrams.js              # SVG vector diagrams (Power, Clos, Thermal, Liquid)
│   ├── topics-facilities.js     # Facilities curriculum (Power, Cooling, Cabling, Tiers)
│   ├── topics-networking.js     # Fabric curriculum (Spine-Leaf, EVPN, RoCEv2, SAN)
│   ├── interactive-tools.js     # PUE Calculator, Clos Sizer, Tier Fault Simulator
│   └── daily.js                 # Daily concept rotation engine & quiz
└── .github/
    └── workflows/
        ├── deploy.yml           # Automated GitHub Pages CI/CD workflow
        └── daily-update.yml     # Automated daily cron refresh
```

---

## 📜 Standards & RFC References

- **Uptime Institute**: Data Center Site Infrastructure Tier Standard: Topology & Operational Sustainability
- **ANSI/TIA-942-B**: Telecommunications Infrastructure Standard for Data Centers
- **ASHRAE TC 9.9**: Thermal Guidelines for Data Processing Environments
- **IETF RFC 7938**: Use of BGP for Routing in Large-Scale Data Centers
- **IETF RFC 7348**: Virtual eXtensible Local Area Network (VXLAN)
- **IETF RFC 7432 / 8365**: BGP MPLS-Based Ethernet VPN (BGP EVPN)
- **IEEE 802.1Qbb**: Priority-based Flow Control (PFC) for Lossless Fabrics

---

Crafted with ❤️ by **Abdul-Azeez Sulaimon**.
