/**
 * DataCenterCore.io - Network Fabric & Storage Topics
 * Spine-Leaf Clos, BGP Underlay, VXLAN EVPN, RoCEv2 for AI, SAN, and Cisco ACI
 */

const NETWORKING_TOPICS = [
  {
    id: "net-spine-leaf-clos",
    track: "networking",
    domain: "Fabric Architecture",
    title: "Clos Spine-Leaf Architecture vs. Traditional 3-Tier",
    subtitle: "Eliminating Spanning Tree Bottlenecks with Non-Blocking Bisectional Bandwidth",
    summary: "Why Charles Clos's 1953 telephony switching matrix replaced legacy Core-Aggregation-Access tiers to power high-speed East-West traffic in modern clouds.",
    diagramType: "spineLeafFabric",
    readingTime: "11 min read",
    tags: ["Spine-Leaf", "Clos Fabric", "ECMP", "East-West Traffic", "NX-OS", "Arista EOS", "Non-Blocking"],
    content: `
      <h3>1. The Demise of the Traditional 3-Tier Campus Model in the DC</h3>
      <p>Traditional data centers utilized a 3-tier hierarchical design: <strong>Core &rarr; Aggregation &rarr; Access</strong>. While effective for North-South client-to-server traffic, this topology collapses under modern cloud workloads:</p>
      <ul class="list-disc pl-6 space-y-1.5 text-slate-300">
        <li><strong>East-West Traffic Dominance:</strong> Microservices, container meshes, Hadoop/Spark big data, and distributed databases produce over <strong>80% of all traffic East-to-West</strong> (server-to-server within the same data center).</li>
        <li><strong>Spanning Tree Protocol (STP) Inefficiency:</strong> STP blocks redundant links to prevent Layer 2 switching loops, stranding up to 50% of costly fiber bandwidth.</li>
        <li><strong>Variable Latency Jitter:</strong> Packets crossing between racks could traverse 2, 4, or 6 hops depending on core switch paths, degrading distributed database consensus algorithms (Raft, Paxos).</li>
      </ul>

      <h3 class="mt-6">2. The 2-Stage Clos (Spine-Leaf) Architecture</h3>
      <p>Invented by Charles Clos in 1953 for telephone crossbar exchanges, a Clos network guarantees predictable, uniform latency:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-cyan-400 font-bold mb-1">Leaf Switches (ToR / MoR)</h4>
          <ul class="text-xs space-y-1 text-slate-300">
            <li>• Servers connect strictly to leaf switches.</li>
            <li>• Every leaf connects to <strong>every single spine switch</strong>.</li>
            <li>• Leafs NEVER connect directly to other leafs (except optional vPC peer links).</li>
            <li>• Acts as Layer 2/3 boundary and VXLAN VTEP gateway.</li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-emerald-400 font-bold mb-1">Spine Switches (High-Speed Core)</h4>
          <ul class="text-xs space-y-1 text-slate-300">
            <li>• Spine switches connect to all leaf switches.</li>
            <li>• Spines NEVER connect to other spine switches.</li>
            <li>• No servers or storage arrays ever connect to a spine.</li>
            <li>• Acts as a purely high-speed Layer 3 transport transit plane.</li>
          </ul>
        </div>
      </div>

      <div class="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 my-3">
        <span class="text-xs font-bold text-cyan-300 block mb-1">The Golden Rule of Spine-Leaf:</span>
        <p class="text-xs text-slate-300">Any server connected to any leaf switch is <strong>always exactly 3 hops away</strong> from any other server in the entire data center: <em>Server A &rarr; Leaf 1 &rarr; Spine X &rarr; Leaf 2 &rarr; Server B</em>. Latency is deterministic and consistent.</p>
      </div>

      <h3 class="mt-6">3. Calculating Oversubscription Ratio</h3>
      <p>The oversubscription ratio determines whether the fabric is non-blocking:</p>
      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 my-3">
        <p class="text-amber-400 font-bold">Oversubscription Ratio = Total Downlink Bandwidth : Total Uplink Bandwidth</p>
        <p class="mt-2 text-slate-400">Example: A 48-port 25Gbps Leaf switch with 6x 100Gbps uplinks to Spines:</p>
        <p class="text-slate-300">• Downlink Bandwidth: 48 ports &times; 25 Gbps = <strong>1,200 Gbps</strong></p>
        <p class="text-slate-300">• Uplink Bandwidth: 6 ports &times; 100 Gbps = <strong>600 Gbps</strong></p>
        <p class="text-emerald-400 font-bold">• Oversubscription = 1,200 : 600 = 2:1 ratio (Acceptable for general cloud; AI clusters demand 1:1 non-blocking)</p>
      </div>
    `
  },
  {
    id: "net-bgp-underlay",
    track: "networking",
    domain: "Fabric Architecture",
    title: "BGP Underlay Design in Data Centers (RFC 7938)",
    subtitle: "Deploying eBGP as the High-Scale IP Fabric Routing Protocol",
    summary: "How hyperscalers like Microsoft, Meta, and Google discarded OSPF and IS-IS in favor of external BGP (eBGP) to build resilient, loop-free data center fabrics.",
    diagramType: "spineLeafFabric",
    readingTime: "12 min read",
    tags: ["BGP", "RFC 7938", "eBGP", "Underlay", "ECMP", "ASN", "NX-OS", "Arista EOS"],
    content: `
      <h3>1. Why eBGP Over Traditional IGPs (OSPF / IS-IS)?</h3>
      <p>For decades, internal gateway protocols (IGPs) like OSPF were default. However, at hyperscale data center dimensions (thousands of switches), link-state IGPs exhibit major flaws:</p>
      <ul class="list-disc pl-6 space-y-1.5 text-slate-300">
        <li><strong>Link-State Blast Radius:</strong> A flapping fiber link triggers flooding of Link-State Advertisements (LSAs) across the entire OSPF Area 0, forcing every switch CPU to recompute Dijkstra's Shortest Path First (SPF) algorithm simultaneously.</li>
        <li><strong>Limited ECMP Hashing:</strong> Traditional IGPs max out at 8 or 16 ECMP paths, while modern chassis feature 64 to 128 parallel spines.</li>
        <li><strong>Explicit AS-Path Loop Prevention:</strong> BGP uses the simple AS-PATH attribute: if a switch receives an update containing its own ASN, it drops the route instantly with zero computational overhead.</li>
      </ul>

      <h3 class="mt-6">2. Autonomous System Number (ASN) Allocation Model</h3>
      <p>RFC 7938 outlines the standard ASN allocation scheme using 4-byte private ASNs (64512 to 65534, or 4200000000 to 4294967294):</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-cyan-400 font-bold text-xs mb-1">Spine ASN Scheme</h4>
          <p class="text-xs text-slate-300">All Spine switches share the exact same ASN (e.g., <strong>ASN 65100</strong>). Since spines never connect directly to other spines, they never drop each other's routes, and leafs see equal AS-path lengths.</p>
        </div>
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-emerald-400 font-bold text-xs mb-1">Leaf ASN Scheme</h4>
          <p class="text-xs text-slate-300">Each Leaf switch (or pair in a MLAG/vPC domain) is assigned a unique ASN (e.g., <strong>Leaf-1 = 65001, Leaf-2 = 65002</strong>). When Leaf-1 advertises its local loopback to Spine, Spine advertises it to Leaf-2.</p>
        </div>
      </div>

      <h3 class="mt-6">3. Cisco NX-OS Underlay Configuration Snippet</h3>
      <div class="dc-terminal p-4 my-3 text-xs overflow-x-auto">
        <p class="cli-comment">! Leaf-1 Nexus 9300 Underlay Configuration</p>
        <p><span class="cli-prompt">Leaf-1(config)#</span> <span class="cli-command">feature bgp</span></p>
        <p><span class="cli-prompt">Leaf-1(config)#</span> <span class="cli-command">router bgp 65001</span></p>
        <p><span class="cli-prompt">Leaf-1(config-router)#</span> <span class="cli-command">router-id 10.0.0.1</span></p>
        <p class="cli-comment">! Peer with Spine-1 (ASN 65100)</p>
        <p><span class="cli-prompt">Leaf-1(config-router)#</span> <span class="cli-command">neighbor 192.168.1.1 remote-as 65100</span></p>
        <p><span class="cli-prompt">Leaf-1(config-router-neighbor)#</span> <span class="cli-command">address-family ipv4 unicast</span></p>
        <p><span class="cli-prompt">Leaf-1(config-router-neighbor-af)#</span> <span class="cli-command">maximum-paths 64</span> <span class="cli-highlight">! Enable 64-way ECMP</span></p>
        <p class="cli-comment">! Advertise Loopback 0 (VTEP IP address)</p>
        <p><span class="cli-prompt">Leaf-1(config-router-af)#</span> <span class="cli-command">network 10.0.0.1/32</span></p>
      </div>
    `
  },
  {
    id: "net-vxlan-evpn",
    track: "networking",
    domain: "Overlay & Protocols",
    title: "VXLAN Overlays & BGP EVPN Control Plane (RFC 7432)",
    subtitle: "Eliminating Flood-and-Learn with Anycast Gateways and Type-2/Type-5 Routes",
    summary: "The definitive enterprise standard for multi-tenant overlay networking: bridging Layer 2 across routed Layer 3 fabrics with hardware VTEPs.",
    diagramType: "vxlanPacketHeader",
    readingTime: "14 min read",
    tags: ["VXLAN", "BGP EVPN", "VTEP", "VNI", "Type-2", "Type-5", "IRB", "RFC 7432", "Multi-Tenancy"],
    content: `
      <h3>1. The Limitations of Traditional VLANs</h3>
      <p>Standard 802.1Q Ethernet headers allocate a 12-bit VLAN identifier, creating an absolute theoretical maximum of <strong>4,096 VLANs</strong>. In cloud environments where single hypervisors host thousands of isolated tenant virtual machines, 4,096 VLANs are exhausted immediately. Furthermore, traditional VLANs require extending brittle Layer 2 broadcast domains across core cables.</p>

      <h3 class="mt-6">2. VXLAN Encapsulation & Packet Header Format</h3>
      <p>VXLAN solves this by wrapping original Layer 2 Ethernet frames into standard Layer 3 UDP datagrams (UDP Destination Port <strong>4789</strong>):</p>

      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 my-4 space-y-1.5 overflow-x-auto">
        <p class="text-cyan-400 font-bold">VXLAN Packet Encapsulation Structure (+50 bytes total overhead):</p>
        <div class="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] space-y-1">
          <p><span class="text-amber-400">[Outer Ethernet Header]</span>: Dest Leaf MAC | Source Leaf MAC | 802.1Q (14 bytes)</p>
          <p><span class="text-emerald-400">[Outer IP Header]</span>: Dest VTEP IP | Source VTEP IP | Protocol 17 UDP (20 bytes)</p>
          <p><span class="text-purple-400">[Outer UDP Header]</span>: Source Port (ECMP Hash) | Dest Port 4789 (8 bytes)</p>
          <p><span class="text-cyan-400">[VXLAN Header]</span>: Flags | <strong>24-bit VXLAN Network Identifier (VNI)</strong> = <strong>16,777,216 Segments!</strong> (8 bytes)</p>
          <p><span class="text-slate-400">[Inner Original L2 Frame]</span>: Inner Dest VM MAC | Inner Source VM MAC | Original IP Payload</p>
        </div>
      </div>

      <div class="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 my-3">
        <span class="text-xs font-bold text-amber-300 block mb-1">Mandatory MTU Rule for VXLAN Fabrics:</span>
        <p class="text-xs text-slate-300">Because VXLAN encapsulation adds 50 bytes (or 54 bytes with outer dot1q), underlay fabric interfaces must be configured with <strong>Jumbo Frames (MTU 9216 bytes)</strong> to prevent fragmentation of 1500-byte VM packets.</p>
      </div>

      <h3 class="mt-6">3. Why BGP EVPN? The Five Route Types (RFC 7432)</h3>
      <p>Original VXLAN used multicast "flood-and-learn" to discover remote MAC addresses, burdening data center switches. <strong>BGP EVPN</strong> introduces a formal control plane where leafs exchange MAC and IP reachability via MP-BGP update messages:</p>

      <div class="space-y-2.5 my-3 text-xs">
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-cyan-400 font-bold font-mono">EVPN Route Type-1 (Ethernet Auto-Discovery)</span>
          <p class="text-slate-300 mt-1">Used for multi-homing fast convergence and Split-Horizon filtering across dual-attached servers (ESI-LAG).</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-cyan-800/40">
          <span class="text-emerald-400 font-bold font-mono">EVPN Route Type-2 (MAC / IP Advertisement) - THE CORE WORKHORSE</span>
          <p class="text-slate-300 mt-1">Advertises a host's MAC address and optional IP address along with its associated VNI and next-hop VTEP IP. Completely eliminates unknown unicast flooding across the fabric.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-amber-400 font-bold font-mono">EVPN Route Type-3 (Inclusive Multicast Ethernet Tag - IMET)</span>
          <p class="text-slate-300 mt-1">Used to establish ingress replication lists for handling broadcast, unknown unicast, and multicast (BUM) traffic without needing PIM multicast in the underlay.</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-slate-800">
          <span class="text-purple-400 font-bold font-mono">EVPN Route Type-4 (Ethernet Segment Route)</span>
          <p class="text-slate-300 mt-1">Discovers peer leafs attached to the exact same multi-homed server and elects a Designated Forwarder (DF).</p>
        </div>
        <div class="p-3 rounded-lg bg-slate-900 border border-cyan-800/40">
          <span class="text-cyan-300 font-bold font-mono">EVPN Route Type-5 (IP Prefix Route)</span>
          <p class="text-slate-300 mt-1">Advertises routed subnets, summary routes, and external default routes across tenant VRFs for inter-subnet and external North-South communication.</p>
        </div>
      </div>
    `
  },
  {
    id: "net-roce-lossless-ai",
    track: "networking",
    domain: "AI / HPC Fabrics",
    title: "RoCEv2 & Lossless Ethernet for AI / GPU Clusters",
    subtitle: "RDMA over Converged Ethernet, Priority Flow Control (PFC), and ECN Congestion Control",
    summary: "How modern AI superclusters (NVIDIA HGX/DGX) bypass the OS CPU kernel to stream terabits of tensor weights directly between GPU memories over standard Ethernet.",
    diagramType: "roceFlowControl",
    readingTime: "13 min read",
    tags: ["RoCEv2", "RDMA", "AI SuperPOD", "PFC 802.1Qbb", "ECN", "DCQCN", "Lossless Ethernet", "InfiniBand"],
    content: `
      <h3>1. The Remote Direct Memory Access (RDMA) Paradigm</h3>
      <p>Training large language models (LLMs like GPT-4 or Gemini) requires distributing billions of parameters across thousands of GPUs. Traditional TCP/IP network stacks introduce crushing bottlenecks:</p>
      <ul class="list-disc pl-6 space-y-1.5 text-slate-300">
        <li><strong>Host CPU Interrupt Overheads:</strong> Every incoming packet triggers OS kernel context switches and multiple memory copies (NIC ring buffer &rarr; kernel socket buffer &rarr; user application space).</li>
        <li><strong>High Tail Latency:</strong> TCP packet drops cause timeout backoffs (RTO) and retransmission spikes that stall synchronized GPU gradient calculations (AllReduce barrier synchronization).</li>
      </ul>
      <p class="mt-2 text-slate-300"><strong>RDMA</strong> enables direct memory-to-memory data transfers between remote GPU memories without involving either host's operating system kernel or CPU.</p>

      <h3 class="mt-6">2. RoCEv2 (RDMA over Converged Ethernet) Protocol Stack</h3>
      <p>RoCEv2 encapsulates InfiniBand transport architecture over standard IP and UDP (destination UDP port <strong>4791</strong>). Because the InfiniBand transport layer has no built-in retransmission windowing mechanism like TCP, <strong>the underlying Ethernet fabric must be strictly 100% lossless</strong>—a single dropped packet degrades GPU cluster training efficiency by up to 40%.</p>

      <h3 class="mt-6">3. Building the Lossless Fabric: PFC + ECN</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-cyan-400 font-bold mb-1">Priority Flow Control (PFC, IEEE 802.1Qbb)</h4>
          <p class="text-xs text-slate-300 mb-2">Standard Ethernet pause frames (802.3x) stop all traffic on a physical cable. PFC operates on 8 independent Class of Service (CoS) priority queues. When an egress switch buffer fills up to threshold, it sends a pause frame ONLY for priority queue 3 (RoCEv2 traffic), while standard management traffic continues uninterrupted.</p>
          <span class="text-[11px] text-amber-400 font-mono">Risk: PFC Deadlocks if looped!</span>
        </div>
        <div class="p-4 rounded-lg bg-slate-900 border border-slate-800">
          <h4 class="text-emerald-400 font-bold mb-1">Explicit Congestion Notification (ECN, RFC 3168)</h4>
          <p class="text-xs text-slate-300 mb-2">PFC is a reactive emergency brake. ECN is proactive: switches monitor internal WRED queue depths. When queues begin filling, the switch sets the 2-bit CE (Congestion Experienced) field in the IP header of transit packets without dropping them. The receiving GPU detects the CE bits and sends a Congestion Notification Packet (CNP) back to the sender, which throttles its transmission rate (DCQCN algorithm).</p>
        </div>
      </div>

      <h3 class="mt-6">4. InfiniBand vs. RoCEv2 / Ultra Ethernet Consortium (UEC)</h3>
      <p>While proprietary NVIDIA Quantum InfiniBand has historically dominated AI supercomputing due to ultra-low switch latency (130ns), the industry is aggressively rallying around open 800G/1.6T RoCEv2 Ethernet fabrics via the <strong>Ultra Ethernet Consortium (UEC)</strong>. Ethernet leverages massive worldwide commodity manufacturing scale, interoperability, and existing network operations talent.</p>
    `
  },
  {
    id: "net-san-storage-fabric",
    track: "networking",
    domain: "Storage & SAN",
    title: "Storage Area Networks (SAN): Fibre Channel to NVMe-oF",
    subtitle: "FC-SW Fabric Switching, Zoning, VSANs, and NVMe over Fabrics Performance",
    summary: "Deep dive into mission-critical block storage networks: comparing 32G/64G Fibre Channel directors against modern NVMe over RoCEv2/TCP fabrics.",
    diagramType: "sanFabricZoning",
    readingTime: "11 min read",
    tags: ["SAN", "Fibre Channel", "NVMe-oF", "Zoning", "VSAN", "FLOGI", "iSCSI", "FCoE"],
    content: `
      <h3>1. Dedicated Storage Fabrics: Why Not General LAN?</h3>
      <p>Mission-critical relational databases (Oracle RAC, Microsoft SQL Server, SAP HANA) demand sub-millisecond I/O response times and guaranteed block storage delivery. Dropping a SCSI block or corrupting a write cache causes severe database table corruption. Dedicated SAN fabrics provide lossless credit-based flow control (Buffer-to-Buffer credits).</p>

      <h3 class="mt-6">2. Fibre Channel (FC-SW) Architecture & Login Process</h3>
      <p>Fibre Channel uses a 24-bit Fibre Channel ID (FCID) divided into Domain ID (switch identifier), Area ID, and Port ID:</p>
      
      <div class="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 my-4 space-y-2">
        <p class="text-cyan-400 font-bold">The Three-Step Fibre Channel Login Sequence:</p>
        <p class="pl-4">1. <span class="text-emerald-400 font-bold">FLOGI (Fabric Login):</span> Host HBA logs into the Fabric Controller (0xFFFFFE) to receive its 24-bit FCID address and negotiate Buffer-to-Buffer flow credits.</p>
        <p class="pl-4">2. <span class="text-amber-400 font-bold">PLOGI (Port Login):</span> Host registers with the Name Server (0xFFFFFC) to discover available storage target World Wide Port Names (WWPNs) allowed by zoning.</p>
        <p class="pl-4">3. <span class="text-purple-400 font-bold">PRLI (Process Login):</span> Host initiates SCSI-3 or NVMe protocol-level connection to the storage controller LUN.</p>
      </div>

      <h3>3. Dual-Fabric Redundancy & Fabric Zoning</h3>
      <p>Best-practice enterprise SAN design mandates <strong>Fabric A and Fabric B (Red and Blue Fabrics)</strong>. The two fabrics are physically isolated with zero interconnection to prevent SAN fabric-wide configuration changes or rogue HBA storms on Fabric A from degrading Fabric B. Multi-pathing software on the host (e.g., MPIO) provides active-active path failover.</p>
      
      <div class="p-3.5 rounded-xl bg-slate-900 border border-slate-800 my-3">
        <span class="text-xs font-bold text-cyan-300 block mb-1">Single-Initiator / Single-Target Zoning:</span>
        <p class="text-xs text-slate-300">Zoning controls which HBAs can communicate. Best practice is strict <em>Smart Zoning</em> or <em>Single-Initiator Zoning</em>: each zone contains exactly one host HBA WWPN and one storage target WWPN. This prevents Registered State Change Notifications (RSCNs) from causing fabric-wide interruptions when a server boots or shuts down.</p>
      </div>

      <h3 class="mt-6">4. The Evolution to NVMe over Fabrics (NVMe-oF)</h3>
      <p>Traditional SAS/SATA and FC SCSI protocols were designed for spinning mechanical disks with a single queue depth of 32 commands. Modern solid-state flash memory operates with NVMe, featuring <strong>64,000 parallel queues with 64,000 commands per queue</strong>. <strong>NVMe-oF</strong> extends NVMe PCIe memory commands across the network fabric using RoCEv2, TCP, or 64G FC, cutting storage latency by more than 50% compared to legacy iSCSI or FCoE.</p>
    `
  }
];
