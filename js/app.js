/**
 * DataCenterCore.io - Main Application Controller
 * Handles Navigation, Search, Modal Rendering, Bookmarks, and Dynamic Filtering
 */

const App = {
  activeFacilitiesDomain: "all",
  activeNetworkDomain: "all",
  searchQuery: "",
  bookmarks: JSON.parse(localStorage.getItem("dccore_bookmarks") || "[]"),
  currentDailyOffset: 0,
  allTopics: [...FACILITIES_TOPICS, ...NETWORKING_TOPICS],

  init: function() {
    this.renderDailySpotlight();
    RoadmapEngine.init();
    this.renderFacilitiesTopics();
    this.renderNetworkTopics();

    // Render Hands-on Simulators
    InteractiveTools.renderPueCalculator("pue-calculator-container");
    InteractiveTools.renderSpineLeafCalculator("spineleaf-calculator-container");
    InteractiveTools.renderTierSimulator("tier-simulator-container");

    this.setupEventListeners();
    this.updateBookmarkCount();
  },

  setupEventListeners: function() {
    // Search input
    const searchInput = document.getElementById("global-search-input");
    const mobileSearchInput = document.getElementById("mobile-search-input");

    const handleSearch = (val) => {
      this.searchQuery = val.trim().toLowerCase();
      if (searchInput && searchInput.value !== val) searchInput.value = val;
      if (mobileSearchInput && mobileSearchInput.value !== val) mobileSearchInput.value = val;
      
      // Also pass to roadmap engine
      RoadmapEngine.searchQuery = this.searchQuery;
      RoadmapEngine.render();

      this.renderFacilitiesTopics();
      this.renderNetworkTopics();
    };

    searchInput?.addEventListener("input", (e) => handleSearch(e.target.value));
    mobileSearchInput?.addEventListener("input", (e) => handleSearch(e.target.value));

    // Mobile Drawer Toggle
    const mobileBtn = document.getElementById("mobile-menu-toggle-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    mobileBtn?.addEventListener("click", () => {
      const isHidden = mobileDrawer.classList.contains("hidden");
      if (isHidden) {
        mobileDrawer.classList.remove("hidden");
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
        mobileSearchInput?.focus();
      } else {
        mobileDrawer.classList.add("hidden");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }
    });

    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer?.classList.add("hidden");
        hamburgerIcon?.classList.remove("hidden");
        closeIcon?.classList.add("hidden");
      });
    });

    // Keyboard shortcut '/' or 'Ctrl+K'
    window.addEventListener("keydown", (e) => {
      if ((e.key === "/" && document.activeElement !== searchInput && document.activeElement !== mobileSearchInput) ||
          (e.ctrlKey && e.key === "k") || 
          (e.metaKey && e.key === "k")) {
        e.preventDefault();
        searchInput?.focus();
      }
      if (e.key === "Escape") {
        this.closeModal();
      }
    });

    // Modal background click
    document.getElementById("topic-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "topic-modal") {
        this.closeModal();
      }
    });
  },

  renderDailySpotlight: function() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + this.currentDailyOffset);
    const daily = DailyEngine.getTodayConcept(targetDate);

    const container = document.getElementById("daily-spotlight-card");
    if (!container) return;

    let diagramSvg = "";
    if (daily.diagramType && DataCenterDiagrams[daily.diagramType]) {
      diagramSvg = DataCenterDiagrams[daily.diagramType]();
    }

    const badgeClass = daily.track.includes("Facilities") ? "badge-dc-facilities" : "badge-dc-network";
    const ctx = daily.deepContext || {};

    container.innerHTML = `
      <div class="relative overflow-hidden rounded-2xl glass-panel-elevated p-6 lg:p-8 border border-cyan-500/20 shadow-2xl space-y-6">
        <!-- Background Ambient Glow -->
        <div class="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Top Header & Offset Controls -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${badgeClass}">
              <span class="w-2 h-2 rounded-full bg-cyan-400 led-active"></span>
              ${daily.track} Spotlight
            </span>
            <span class="text-xs text-slate-400 font-mono">${daily.domain}</span>
            <span class="text-xs text-slate-500 font-mono hidden sm:inline">&bull; ${daily.readingTime}</span>
          </div>

          <!-- Date Navigation buttons -->
          <div class="flex items-center gap-1.5 text-xs">
            <button onclick="App.changeDailyOffset(-1)" class="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition" title="Previous Day">
              &larr; Prev
            </button>
            <span class="px-2.5 py-1 rounded bg-slate-950 font-mono text-cyan-400 border border-slate-800">
              ${this.currentDailyOffset === 0 ? "Today" : (this.currentDailyOffset > 0 ? `+${this.currentDailyOffset}d` : `${this.currentDailyOffset}d`)}
            </span>
            <button onclick="App.changeDailyOffset(1)" class="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition" title="Next Day">
              Next &rarr;
            </button>
          </div>
        </div>

        <!-- Title & Summary -->
        <div>
          <h3 class="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
            ${daily.title}
          </h3>
          <p class="text-sm text-slate-300 mt-2 leading-relaxed">
            ${daily.summary}
          </p>
        </div>

        <!-- Beginner Intuition Box -->
        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-slate-300 space-y-1">
          <span class="font-bold text-cyan-300 uppercase tracking-wider block">💡 Core Mental Model:</span>
          <p class="leading-relaxed">${daily.beginnerNote}</p>
        </div>

        <!-- Dynamic Architectural Diagram -->
        ${diagramSvg ? `
          <div class="my-4">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Architectural Blueprint:</span>
            ${diagramSvg}
          </div>
        ` : ""}

        <!-- Deep Context Grid: Formula + CLI Snippet -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Formula & Rules -->
          <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-amber-400 block">📐 Design Rule & Metric:</span>
            <p class="text-xs text-slate-300 font-mono bg-slate-950 p-2.5 rounded border border-slate-800/80">${ctx.ruleOfThumb || "Concurrently maintainable dual feeds."}</p>
            ${ctx.formula ? `
              <div class="pt-2">
                <span class="text-[10px] text-slate-500 uppercase tracking-wider block">Calculation Formula:</span>
                <p class="text-xs text-cyan-300 font-mono">${ctx.formula}</p>
              </div>
            ` : ""}
          </div>

          <!-- CLI / Config Standard -->
          <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">💻 ${daily.codeSnippet?.platform || "Configuration Syntax"}</span>
            </div>
            <pre class="dc-terminal p-3 text-[11px] text-slate-200 overflow-x-auto"><code>${daily.codeSnippet?.code || "# Standard configuration"}</code></pre>
          </div>
        </div>

        <!-- Daily Interactive Challenge / Quiz -->
        <div class="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-base">🧠</span>
            <h4 class="text-xs font-bold uppercase tracking-wider text-cyan-400">Daily Engineering Challenge</h4>
          </div>
          <p class="text-xs text-white font-medium">${daily.quiz.question}</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            ${daily.quiz.options.map((opt, i) => `
              <button 
                onclick="DailyEngine.checkQuizAnswer(${i}, ${daily.quiz.correctIndex})" 
                class="p-2.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-left text-xs text-slate-300 border border-slate-800 hover:border-cyan-500/50 transition flex items-start gap-2"
              >
                <span class="font-mono text-cyan-400 font-bold">${String.fromCharCode(65 + i)}.</span>
                <span>${opt}</span>
              </button>
            `).join("")}
          </div>

          <div id="daily-quiz-feedback" class="hidden"></div>
          <div id="daily-quiz-explanation" class="hidden p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 mt-2">
            <strong class="text-slate-200 block mb-1">Architectural Explanation:</strong>
            ${daily.quiz.explanation}
          </div>
        </div>
      </div>
    `;
  },

  changeDailyOffset: function(delta) {
    this.currentDailyOffset += delta;
    this.renderDailySpotlight();
  },

  filterFacilitiesDomain: function(domain) {
    this.activeFacilitiesDomain = domain;
    document.querySelectorAll(".facilities-filter-btn").forEach(btn => {
      const isSelected = btn.dataset.domain === domain;
      btn.className = `facilities-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 transition ${
        isSelected
          ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
          : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
      }`;
    });
    this.renderFacilitiesTopics();
  },

  filterNetworkDomain: function(domain) {
    this.activeNetworkDomain = domain;
    document.querySelectorAll(".network-filter-btn").forEach(btn => {
      const isSelected = btn.dataset.domain === domain;
      btn.className = `network-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 transition ${
        isSelected
          ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
          : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
      }`;
    });
    this.renderNetworkTopics();
  },

  renderFacilitiesTopics: function() {
    const container = document.getElementById("facilities-cards-grid");
    if (!container) return;

    const filtered = FACILITIES_TOPICS.filter(t => {
      const matchDomain = this.activeFacilitiesDomain === "all" || t.domain === this.activeFacilitiesDomain;
      const q = this.searchQuery;
      const matchSearch = !q ||
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q));

      return matchDomain && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-400 text-xs">
          No facilities topics match your filter or search query.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(topic => this.createTopicCard(topic, "facilities")).join("");
  },

  renderNetworkTopics: function() {
    const container = document.getElementById("network-cards-grid");
    if (!container) return;

    const filtered = NETWORKING_TOPICS.filter(t => {
      const matchDomain = this.activeNetworkDomain === "all" || t.domain === this.activeNetworkDomain;
      const q = this.searchQuery;
      const matchSearch = !q ||
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q));

      return matchDomain && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-8 text-center text-slate-400 text-xs">
          No network fabric topics match your filter or search query.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(topic => this.createTopicCard(topic, "networking")).join("");
  },

  createTopicCard: function(topic, category) {
    const isBookmarked = this.bookmarks.includes(topic.id);
    const badgeColor = category === "facilities" ? "badge-dc-facilities" : "badge-dc-network";

    return `
      <div class="glass-card rounded-2xl p-5 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition group">
        <div>
          <!-- Header: Category & Bookmark -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs px-2.5 py-0.5 rounded-full font-semibold ${badgeColor}">
              ${topic.domain}
            </span>
            <button 
              onclick="App.toggleBookmark('${topic.id}')"
              class="text-sm p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition"
              title="${isBookmarked ? "Remove Bookmark" : "Save Topic"}"
            >
              ${isBookmarked ? "⭐" : "☆"}
            </button>
          </div>

          <!-- Title -->
          <h3 
            class="text-base font-bold text-white group-hover:text-cyan-400 transition cursor-pointer leading-snug"
            onclick="App.openTopicModal('${topic.id}')"
          >
            ${topic.title}
          </h3>
          <p class="text-xs text-slate-400 mt-1 line-clamp-1 font-mono">${topic.subtitle}</p>

          <!-- Summary -->
          <p class="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
            ${topic.summary}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1 mt-4">
            ${topic.tags.slice(0, 3).map(tag => `
              <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                #${tag}
              </span>
            `).join("")}
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span class="text-slate-500 text-[11px] font-mono">🕒 ${topic.readingTime}</span>
          <button 
            onclick="App.openTopicModal('${topic.id}')"
            class="px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-800/60 font-semibold transition flex items-center gap-1 text-xs"
          >
            <span>Deep Dive</span> &rarr;
          </button>
        </div>
      </div>
    `;
  },

  openTopicModal: function(topicId) {
    const topic = this.allTopics.find(t => t.id === topicId);
    if (!topic) return;

    const modal = document.getElementById("topic-modal");
    const content = document.getElementById("topic-modal-content");
    if (!modal || !content) return;

    let diagramHtml = "";
    if (topic.diagramType && DataCenterDiagrams[topic.diagramType]) {
      diagramHtml = `
        <div class="my-6">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Architectural Blueprint:</span>
          ${DataCenterDiagrams[topic.diagramType]()}
        </div>
      `;
    }

    content.innerHTML = `
      <div class="p-6 sm:p-8 space-y-6 text-slate-200">
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs px-2.5 py-0.5 rounded-full font-bold ${topic.track === "facilities" ? "badge-dc-facilities" : "badge-dc-network"}">
                ${topic.domain}
              </span>
              <span class="text-xs text-slate-400 font-mono">🕒 ${topic.readingTime}</span>
            </div>
            <h2 class="text-2xl font-extrabold text-white">${topic.title}</h2>
            <p class="text-xs text-cyan-400 font-mono mt-1">${topic.subtitle}</p>
          </div>
          <button onclick="App.closeModal()" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition" aria-label="Close modal">
            ✕
          </button>
        </div>

        <!-- Embedded Diagram -->
        ${diagramHtml}

        <!-- Topic Body Content -->
        <div class="space-y-4 text-sm leading-relaxed text-slate-300">
          ${topic.content}
        </div>

        <!-- Tags & Actions -->
        <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap gap-1.5">
            ${topic.tags.map(t => `<span class="text-xs px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">#${t}</span>`).join("")}
          </div>
          <button 
            onclick="App.toggleBookmark('${topic.id}'); App.openTopicModal('${topic.id}');"
            class="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-amber-300 transition flex items-center gap-1.5"
          >
            <span>${this.bookmarks.includes(topic.id) ? "⭐ Bookmarked" : "☆ Save Topic"}</span>
          </button>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  },

  closeModal: function() {
    const modal = document.getElementById("topic-modal");
    if (modal) modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  },

  toggleBookmark: function(id) {
    if (this.bookmarks.includes(id)) {
      this.bookmarks = this.bookmarks.filter(b => b !== id);
    } else {
      this.bookmarks.push(id);
    }
    localStorage.setItem("dccore_bookmarks", JSON.stringify(this.bookmarks));
    this.updateBookmarkCount();
    this.renderFacilitiesTopics();
    this.renderNetworkTopics();
  },

  updateBookmarkCount: function() {
    const count = this.bookmarks.length;
    const badge = document.getElementById("bookmark-count-badge");
    const mobileBadge = document.getElementById("mobile-bookmark-count-badge");
    if (badge) badge.textContent = count;
    if (mobileBadge) mobileBadge.textContent = count;
  }
};

// Auto-run on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
