(function () {
  const TYPE_ORDER = { department: 0, faculty: 1, classroom: 2, facility: 3, lab: 4 };
  const TYPE_LABELS = { department: "Dept", classroom: "Room", facility: "Facility", faculty: "Faculty", lab: "Lab" };

  function normalize(str) {
    return (str || "").toLowerCase().trim();
  }

  function scoreItem(item, query) {
    const q = normalize(query);
    if (!q) return 0;
    const name = normalize(item.name);
    const keywords = (item.keywords || []).map(normalize).join(" ");
    const block = getBlock(item.blockId);
    const blockName = normalize(block?.name || "");

    if (name === q) return 100;
    if (name.startsWith(q)) return 80;
    if (name.includes(q)) return 60;
    if (keywords.includes(q)) return 50;
    if (blockName.includes(q)) return 40;
    const words = q.split(/\s+/);
    if (words.every((w) => name.includes(w) || keywords.includes(w))) return 30;
    return 0;
  }

  function searchLocations(query, filterType) {
    const q = normalize(query);
    if (!q) return [];
    let items = getAllSearchableItems();
    if (filterType && filterType !== "all") {
      const map = { departments: "department", classrooms: "classroom", facilities: "facility", faculty: "faculty", labs: "lab" };
      const type = map[filterType] || filterType;
      items = items.filter((i) => i.type === type);
    }
    return items
      .map((item) => ({ item, score: scoreItem(item, q) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return TYPE_ORDER[a.item.type] - TYPE_ORDER[b.item.type];
      })
      .map(({ item }) => item)
      .slice(0, 24);
  }

  function highlightMatch(text, query) {
    if (!query || !text) return escapeHtml(text);
    const q = normalize(query);
    const lower = text.toLowerCase();
    const idx = lower.indexOf(q);
    if (idx === -1) return escapeHtml(text);
    const before = text.slice(0, idx);
    const match = text.slice(idx, idx + q.length);
    const after = text.slice(idx + q.length);
    return `${escapeHtml(before)}<mark class="search-highlight">${escapeHtml(match)}</mark>${escapeHtml(after)}`;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  const PLACEHOLDER_IMG = typeof getPlaceholderImageUrl === "function"
    ? getPlaceholderImageUrl()
    : "assets/img/buildings/placeholder.svg";

  function renderLocationImage(imageUrl, alt, size) {
    const sz = size || "md";
    const src = escapeHtml(imageUrl || PLACEHOLDER_IMG);
    const altText = escapeHtml(alt || "Building photo");
    const ph = escapeHtml(PLACEHOLDER_IMG);
    return `<img class="location-thumb location-thumb--${sz}" src="${src}" alt="${altText}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${ph}';">`;
  }

  function renderSuggestionHtml(item, query) {
    const block = getBlock(item.blockId);
    return `
      <a href="${item.url}" class="suggestion-item" role="option">
        ${renderLocationImage(item.imageUrl, item.name, "sm")}
        <div class="suggestion-item-body flex-grow-1 min-w-0">
          <span class="badge-type badge-${item.type === "department" ? "dept" : item.type === "faculty" ? "faculty" : item.type === "classroom" ? "classroom" : item.type === "lab" ? "lab" : "facility"}">${TYPE_LABELS[item.type] || item.type}</span>
          <div class="fw-semibold text-truncate">${highlightMatch(item.name, query)}</div>
          <small class="text-muted-pdacek">${escapeHtml(block?.name || "")} · ${escapeHtml(item.floor || "")}</small>
        </div>
      </a>`;
  }

  function renderResultCard(item, query) {
    const block = getBlock(item.blockId);
    return `
      <article class="result-card result-card--with-photo">
        <div class="result-card-photo">
          ${renderLocationImage(item.imageUrl, item.name, "lg")}
        </div>
        <div class="result-card-body">
          <span class="badge-type badge-${item.type === "department" ? "dept" : item.type === "faculty" ? "faculty" : item.type === "classroom" ? "classroom" : item.type === "lab" ? "lab" : "facility"} mb-2">${TYPE_LABELS[item.type] || item.type}</span>
          <h3 class="h5 mb-1">${highlightMatch(item.name, query)}</h3>
          <p class="text-muted-pdacek small mb-2">
            <strong>${escapeHtml(block?.name || "Campus")}</strong> · ${escapeHtml(item.floor || "—")}
          </p>
          <p class="small mb-2">${escapeHtml((item.directions || "").slice(0, 120))}${(item.directions || "").length > 120 ? "…" : ""}</p>
          <div class="d-flex gap-2">
            <a href="map.html?highlight=${encodeURIComponent(item.blockId)}" class="btn btn-sm btn-outline-primary py-1 px-3">🗺️ Show on Map</a>
            <a href="${item.url}" class="btn btn-sm btn-primary py-1 px-3">🔍 View Details</a>
          </div>
        </div>
      </article>`;
  }

  function renderDetailHeroImage(imageUrl, alt) {
    return `<div class="detail-hero-photo mb-3">${renderLocationImage(imageUrl, alt, "hero")}</div>`;
  }

  function setupSearchInput(inputEl, dropdownEl, options) {
    if (!inputEl) return;
    const opts = options || {};
    let debounceTimer;

    function showSuggestions(query) {
      if (!dropdownEl) return;
      const results = searchLocations(query, opts.filterType || "all").slice(0, 8);
      if (!query.trim() || results.length === 0) {
        dropdownEl.classList.remove("show");
        dropdownEl.innerHTML = "";
        return;
      }
      dropdownEl.innerHTML = results.map((r) => renderSuggestionHtml(r, query)).join("");
      dropdownEl.classList.add("show");
    }

    function hideSuggestions() {
      if (dropdownEl) {
        setTimeout(() => dropdownEl.classList.remove("show"), 150);
      }
    }

    inputEl.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      const q = inputEl.value;
      debounceTimer = setTimeout(() => {
        showSuggestions(q);
        if (opts.onSearch) opts.onSearch(q);
      }, 200);
    });

    inputEl.addEventListener("focus", () => showSuggestions(inputEl.value));
    inputEl.addEventListener("blur", hideSuggestions);

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const q = inputEl.value.trim();
        if (q) {
          if (opts.redirectOnEnter) {
            window.location.href = `search.html?q=${encodeURIComponent(q)}`;
          } else if (opts.onSearch) {
            opts.onSearch(q);
          }
        }
      }
    });
  }

  function initHomeSearch() {
    const input = document.getElementById("home-search");
    const dropdown = document.getElementById("home-suggestions");
    setupSearchInput(input, dropdown, { redirectOnEnter: true });
  }

  function initSearchPage() {
    const input = document.getElementById("page-search");
    const dropdown = document.getElementById("page-suggestions");
    const resultsEl = document.getElementById("search-results");
    const emptyEl = document.getElementById("search-empty");
    let currentFilter = "all";

    const params = new URLSearchParams(window.location.search);
    const initialQ = params.get("q") || "";
    if (initialQ && input) input.value = initialQ;

    function runSearch(query) {
      if (!resultsEl) return;
      const results = searchLocations(query, currentFilter);
      if (!query.trim()) {
        resultsEl.innerHTML = "";
        if (emptyEl) {
          emptyEl.classList.add("d-none");
          resultsEl.innerHTML = `<p class="text-muted-pdacek">Type to search departments, classrooms, or facilities.</p>`;
        }
        return;
      }
      if (results.length === 0) {
        resultsEl.innerHTML = "";
        if (emptyEl) emptyEl.classList.remove("d-none");
        return;
      }
      if (emptyEl) emptyEl.classList.add("d-none");
      resultsEl.innerHTML = results.map((r) => renderResultCard(r, query)).join("");
    }

    setupSearchInput(input, dropdown, {
      filterType: currentFilter,
      onSearch: runSearch,
    });

    document.querySelectorAll("[data-filter]").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        currentFilter = chip.dataset.filter;
        runSearch(input?.value || "");
      });
    });

    if (initialQ) runSearch(initialQ);
  }

  function initDepartmentPage() {
    const container = document.getElementById("department-detail");
    if (!container) return;
    const id = new URLSearchParams(window.location.search).get("id");
    const dept = getDepartment(id);
    if (!dept) {
      container.innerHTML = `<div class="empty-state"><div class="empty-icon">🏫</div><h2>Department not found</h2><p><a href="search.html">Search campus locations</a></p></div>`;
      return;
    }
    const block = getBlock(dept.blockId);
    const relatedFacilities = campusData.facilities.filter((f) =>
      ["library", "canteen", "admin"].includes(f.id)
    );

    const deptImage = getRecordImageUrl(dept, "department");
    const deptFaculty = typeof getFacultyByDept === "function" ? getFacultyByDept(id) : [];
    const deptLabs = typeof getLabsByDept === "function" ? getLabsByDept(id) : [];

    let facultyHtml = "";
    if (deptFaculty.length > 0) {
      facultyHtml = `
            <div class="card-pdacek p-4 mb-4">
              <h2 class="h5 section-title">👨‍🏫 Faculty Roster</h2>
              <div class="faculty-roster">
                ${deptFaculty.map((f) => `
                  <div class="faculty-row">
                    <div class="faculty-info">
                      <strong>${escapeHtml(f.name)}</strong>
                      <span class="text-muted-pdacek small">${escapeHtml(f.role)}</span>
                    </div>
                    <div class="faculty-room">
                      <span class="badge bg-secondary bg-opacity-25 text-body">${escapeHtml(f.room)}</span>
                      <small class="text-muted-pdacek">${escapeHtml(f.floor)}</small>
                    </div>
                  </div>`).join("")}
              </div>
            </div>`;
    }

    let labsDetailHtml = "";
    if (deptLabs.length > 0) {
      labsDetailHtml = deptLabs.map((l) => `
            <div class="card-pdacek p-4 mb-4">
              <div class="row g-3 align-items-center">
                <div class="col-md-4">${renderLocationImage(getLabImageUrl(l), l.name, "card")}</div>
                <div class="col-md-8">
                  <h3 class="h6 fw-bold mb-1">${escapeHtml(l.name)}</h3>
                  <p class="small text-muted-pdacek mb-1">${escapeHtml(l.description || "")}</p>
                  <p class="small mb-0"><strong>Equipment:</strong> ${escapeHtml(l.equipment || "—")}</p>
                </div>
              </div>
            </div>`).join("");
    }

    container.innerHTML = `
      <div class="detail-hero mb-4">
        <div class="container">
          ${renderDetailHeroImage(deptImage, dept.name)}
          <span class="badge-type badge-dept mb-2">Department</span>
          <h1 class="display-6 fw-bold">${escapeHtml(dept.name)}</h1>
          <p class="text-muted-pdacek mb-0">${escapeHtml(block?.name || "")} · ${escapeHtml(dept.floor)}</p>
        </div>
      </div>
      <div class="container pb-5">
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="card-pdacek p-4 mb-4">
              <h2 class="h5 section-title">How to reach</h2>
              <p>${escapeHtml(dept.directions)}</p>
              <a href="map.html?highlight=${encodeURIComponent(dept.blockId)}" class="btn btn-pdacek-accent">View on campus map</a>
            </div>
            ${facultyHtml}
            <div class="card-pdacek p-4 mb-4">
              <h2 class="h5 section-title">Classrooms</h2>
              <ul class="mb-0">${dept.classrooms.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
            </div>
            <div class="card-pdacek p-4 mb-4">
              <h2 class="h5 section-title">Laboratories</h2>
              <ul class="mb-0">${dept.labs.map((l) => `<li>${escapeHtml(l)}</li>`).join("")}</ul>
            </div>
            ${labsDetailHtml}
          </div>
          <div class="col-lg-4">
            <div class="card-pdacek p-4 mb-4">
              <h2 class="h6 fw-bold mb-3">Location details</h2>
              <dl class="info-list mb-0">
                <dt>Block</dt><dd>${escapeHtml(block?.name || "—")}</dd>
                <dt>Floor</dt><dd>${escapeHtml(dept.floor)}</dd>
                <dt>HOD</dt><dd>${escapeHtml(dept.hod)}</dd>
              </dl>
            </div>
            <div class="card-pdacek p-4">
              <h2 class="h6 fw-bold mb-3">Nearby facilities</h2>
              <ul class="list-unstyled mb-0">
                ${relatedFacilities
                  .map(
                    (f) =>
                      `<li class="mb-2"><a href="facilities.html?id=${f.id}">${escapeHtml(f.name)}</a><br><small class="text-muted-pdacek">~3–5 min walk</small></li>`
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>`;
    document.title = `${dept.name} — PDACEK Campus Nav`;
  }

  function initFacilityPage() {
    const grid = document.getElementById("facility-grid");
    const detail = document.getElementById("facility-detail");
    const id = new URLSearchParams(window.location.search).get("id");

    if (detail && id) {
      const facility = getFacility(id);
      if (!facility) {
        detail.innerHTML = `<div class="empty-state"><div class="empty-icon">📍</div><h2>Facility not found</h2><p><a href="facilities.html">Browse all facilities</a></p></div>`;
        if (grid) grid.classList.add("d-none");
        return;
      }
      if (grid) grid.classList.add("d-none");
      const block = getBlock(facility.blockId);
      const facilityImage = getRecordImageUrl(facility, "facility");
      detail.innerHTML = `
        <div class="detail-hero mb-4">
          <div class="container">
            <a href="facilities.html" class="small text-muted-pdacek">← All facilities</a>
            ${renderDetailHeroImage(facilityImage, facility.name)}
            <span class="badge-type badge-facility mb-2 d-inline-block ms-0 mt-2">Facility</span>
            <h1 class="display-6 fw-bold">${escapeHtml(facility.name)}</h1>
            <p class="text-muted-pdacek mb-0">${escapeHtml(facility.category)} · ${escapeHtml(block?.name || "")}</p>
          </div>
        </div>
        <div class="container pb-5">
          <div class="row g-4">
            <div class="col-lg-8">
              <div class="card-pdacek p-4 mb-4">
                <h2 class="h5 section-title">About</h2>
                <p>${escapeHtml(facility.description || "")}</p>
                <h2 class="h5 section-title mt-4">Directions</h2>
                <p class="mb-3">${escapeHtml(facility.directions)}</p>
                <a href="map.html?highlight=${encodeURIComponent(facility.blockId)}" class="btn btn-pdacek-accent">View on campus map</a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card-pdacek p-4">
                <dl class="info-list mb-0">
                  <dt>Hours</dt><dd>${escapeHtml(facility.hours || "—")}</dd>
                  <dt>Block</dt><dd>${escapeHtml(block?.name || "—")}</dd>
                  <dt>Floor</dt><dd>${escapeHtml(facility.floor || "—")}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>`;
      document.title = `${facility.name} — PDACEK Campus Nav`;
      return;
    }

    if (grid) {
      grid.innerHTML = campusData.facilities
        .map(
          (f) => {
            const img = getRecordImageUrl(f, "facility");
            return `
        <div class="col-md-6 col-lg-4">
          <a href="facilities.html?id=${f.id}" class="text-decoration-none facility-card-link">
            <div class="card-pdacek card-pdacek--with-photo h-100 overflow-hidden">
              <div class="facility-card-photo">${renderLocationImage(img, f.name, "card")}</div>
              <div class="p-4">
                <span class="badge-type badge-facility mb-2">${escapeHtml(f.category)}</span>
                <h3 class="h5 text-body">${escapeHtml(f.name)}</h3>
                <p class="text-muted-pdacek small mb-0">${escapeHtml((f.description || "").slice(0, 80))}…</p>
              </div>
            </div>
          </a>
        </div>`;
          }
        )
        .join("");
    }
  }

  function initMapPage() {
    const sidebar = document.getElementById("map-sidebar-content");
    const tooltip = document.getElementById("map-tooltip");
    const svg = document.querySelector(".campus-svg");
    if (!sidebar) return;

    const highlightId = new URLSearchParams(window.location.search).get("highlight");

    const routes = {
      "block-gate": {
        path: "M 380 570",
        steps: ["You are at the Main Gate entry point."]
      },
      "block-a": {
        path: "M 380 570 L 380 405",
        steps: [
          "Start at the Main Gate.",
          "Walk straight along the central road for ~50 meters.",
          "The Admin Block is directly in front of you on the central road."
        ]
      },
      "block-l": {
        path: "M 380 570 L 380 530 L 260 530 L 260 490",
        steps: [
          "Start at the Main Gate.",
          "Enter the campus and bear left past Parking 1.",
          "The First Year Block (Block L) is on your left, near the gate area."
        ]
      },
      "block-p": {
        path: "M 380 570 L 380 530 L 510 530 L 510 490",
        steps: [
          "Start at the Main Gate.",
          "Enter the campus and bear right past Parking 2.",
          "The Architecture Block (PDSSSA) is on your right, near the gate area."
        ]
      },
      "block-m": {
        path: "M 380 570 L 380 330",
        steps: [
          "Start at the Main Gate.",
          "Walk straight along the central road (~80 meters).",
          "Pass the Admin Block.",
          "The Central Library is straight ahead on the main road."
        ]
      },
      "block-k": {
        path: "M 380 570 L 380 300 L 535 300 L 535 290",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Admin Block and Library.",
          "At the central junction, turn right (east).",
          "Walk 30 meters. The Basic Sciences Block is on your right."
        ]
      },
      "block-n": {
        path: "M 380 570 L 380 480 L 650 480 L 650 340",
        steps: [
          "Start at the Main Gate.",
          "Walk straight and take the east service road.",
          "Walk along the road toward the east side of campus.",
          "The Canteen & Services Zone is on your right."
        ]
      },
      "block-o": {
        path: "M 380 570 L 380 300 L 660 300 L 660 200",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Library to the central junction.",
          "Turn right and walk east past the Services Zone.",
          "Continue north. The Hostel is ahead on your right."
        ]
      },
      "block-f": {
        path: "M 380 570 L 380 300 L 110 300 L 110 270",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Admin Block and Library to the central junction.",
          "Turn left (west) onto the cross road.",
          "Walk ~100 meters. The CSE Block is on your left in the West Academic Zone."
        ]
      },
      "block-g": {
        path: "M 380 570 L 380 300 L 220 300 L 220 270",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Library to the central junction.",
          "Turn left (west) onto the cross road.",
          "Walk ~60 meters. The ISE Block is on your left, next to CSE."
        ]
      },
      "block-d": {
        path: "M 380 570 L 380 300 L 150 300 L 150 200",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Library to the central junction.",
          "Turn left (west) and take the secondary road north.",
          "Walk past CSE/ISE. The ECE Block is ahead, north of the Academic Zone."
        ]
      },
      "block-e": {
        path: "M 380 570 L 380 300 L 270 300 L 270 200",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Library to the central junction.",
          "Turn left (west).",
          "Walk 40 meters and head north. The EEE Block is next to ECE."
        ]
      },
      "block-b": {
        path: "M 380 570 L 380 300 L 135 300 L 135 190 L 135 110",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Library to the central junction.",
          "Turn left (west) onto the cross road.",
          "Walk to the far west, then turn right (north).",
          "Walk 100 meters north. The Civil Engineering Block is at the far north-west."
        ]
      },
      "block-c": {
        path: "M 380 570 L 380 300 L 270 300 L 270 190 L 270 110",
        steps: [
          "Start at the Main Gate.",
          "Walk straight past the Library to the central junction.",
          "Turn left (west) and head north past EEE.",
          "Continue walking north. The Mechanical Block is in the north zone."
        ]
      },
      "block-i": {
        path: "M 380 570 L 380 300 L 380 190 L 405 190 L 405 110",
        steps: [
          "Start at the Main Gate.",
          "Walk straight along the central road all the way north.",
          "Pass the Library and continue past the central junction.",
          "The CCT Block is at the far north end of the central road."
        ]
      }
    };

    function showBlockInfo(blockId) {
      const block = getBlock(blockId);
      if (!block) return;
      const { departments, facilities, classrooms } = getItemsInBlock(blockId);

      document.querySelectorAll(".map-region").forEach((r) => {
        r.classList.toggle("active", r.dataset.blockId === blockId);
      });

      // SVG path drawing
      if (svg) {
        const existing = document.getElementById("walking-route-line");
        if (existing) existing.remove();

        const routeData = routes[blockId];
        if (routeData) {
          const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
          pathEl.setAttribute("id", "walking-route-line");
          pathEl.setAttribute("class", "map-route-path");
          pathEl.setAttribute("d", routeData.path);
          pathEl.setAttribute("stroke", "var(--pdacek-primary)");
          pathEl.setAttribute("stroke-width", "5");
          pathEl.setAttribute("fill", "none");
          svg.appendChild(pathEl);
        }
      }

      const blockImg = getRecordImageUrl(block, "block");
      let html = `${renderLocationImage(blockImg, block.name, "card")}
        <h3 class="h5 fw-bold mt-3">${escapeHtml(block.name)}</h3>
        <p class="small text-muted-pdacek mb-3">${escapeHtml(block.description)}</p>`;

      const routeData = routes[blockId];
      if (routeData) {
        html += `<div class="card route-steps-card p-3 mb-3">
          <h4 class="h6 fw-bold mb-2">🚶 Walking Route (From Gate)</h4>
          <ol class="list-unstyled mb-0 d-flex flex-column gap-2">`;
        routeData.steps.forEach((step) => {
          let icon = "🐾";
          if (step.includes("straight")) icon = "⬆️";
          else if (step.includes("left")) icon = "👈";
          else if (step.includes("right")) icon = "👉";
          else if (step.includes("Start")) icon = "🚶";
          else if (step.includes("Library") || step.includes("Block") || step.includes("Zone")) icon = "📍";
          
          html += `<li class="route-step-item">
            <span class="route-step-icon">${icon}</span>
            <div>${escapeHtml(step)}</div>
          </li>`;
        });
        html += `</ol></div>`;
      }

      if (departments.length) {
        html += `<h4 class="h6 mt-3">Departments</h4><ul class="small mb-0">`;
        departments.forEach((d) => {
          html += `<li><a href="department.html?id=${d.id}">${escapeHtml(d.name)}</a></li>`;
        });
        html += `</ul>`;
      }
      if (facilities.length) {
        html += `<h4 class="h6 mt-3">Facilities</h4><ul class="small mb-0">`;
        facilities.forEach((f) => {
          html += `<li><a href="facilities.html?id=${f.id}">${escapeHtml(f.name)}</a></li>`;
        });
        html += `</ul>`;
      }
      if (classrooms.length) {
        html += `<h4 class="h6 mt-3">Classrooms</h4><ul class="small mb-0">`;
        classrooms.forEach((c) => {
          html += `<li>${escapeHtml(c.name)}</li>`;
        });
        html += `</ul>`;
      }
      sidebar.innerHTML = html;
    }

    document.querySelectorAll(".map-region").forEach((region) => {
      region.addEventListener("click", () => showBlockInfo(region.dataset.blockId));
      region.addEventListener("mouseenter", (e) => {
        if (!tooltip) return;
        const block = getBlock(region.dataset.blockId);
        tooltip.textContent = block?.name || "";
        tooltip.classList.remove("d-none");
      });
      region.addEventListener("mouseleave", () => tooltip?.classList.add("d-none"));
    });

    if (highlightId) {
      showBlockInfo(highlightId);
      const el = document.querySelector(`[data-block-id="${highlightId}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      sidebar.innerHTML = `<p class="text-muted-pdacek mb-0">Click a building on the map to see departments, facilities, and walking directions from the Main Gate.</p>`;
    }
  }

  function setActiveNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".navbar-pdacek .nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setActiveNav();
    initHomeSearch();
    initSearchPage();
    initDepartmentPage();
    initFacilityPage();
    initMapPage();
  });

  window.pdacekApp = { searchLocations, getBlock, highlightMatch };
})();
