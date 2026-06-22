(function () {
  // Ensure campusData is loaded, if not, wait
  document.addEventListener("DOMContentLoaded", () => {
    initChatbot();
  });

  function initChatbot() {
    // 1. Create and inject style link or just HTML structure
    const chatbotHtml = `
      <div id="pdacek-chatbot-widget" class="pdacek-chatbot-widget">
        <!-- Floating Chat Button -->
        <button id="pdacek-chatbot-toggle" class="chatbot-toggle-btn" aria-label="Open campus assistant">
          <span class="chat-icon">💬</span>
          <span class="close-icon">✕</span>
        </button>

        <!-- Chat Window -->
        <div id="pdacek-chatbot-window" class="chatbot-window">
          <!-- Header -->
          <div class="chatbot-header">
            <div class="d-flex align-items-center gap-2">
              <span class="bot-avatar">🤖</span>
              <div>
                <h4 class="chatbot-title m-0">PDA Campus Assistant</h4>
                <small class="chatbot-status">Online · Ready to help</small>
              </div>
            </div>
            <button id="pdacek-chatbot-close" class="chatbot-close-btn" aria-label="Close assistant">✕</button>
          </div>

          <!-- Messages Log -->
          <div id="pdacek-chat-messages" class="chat-messages-log">
            <div class="chat-message bot-msg">
              <div class="msg-bubble">
                Hi there! 🎓 I am your <strong>PDACEK Campus Assistant</strong>. Ask me anything like <em>"Where is CSE?"</em> or <em>"Who is the HOD of Civil?"</em>!
              </div>
            </div>
          </div>

          <!-- Quick Suggestions -->
          <div class="chat-suggestions-container">
            <div class="chat-suggestions-scroll">
              <button type="button" class="suggestion-chip" data-query="Where is CSE department?">🏫 Where is CSE?</button>
              <button type="button" class="suggestion-chip" data-query="Where is Canteen?">🍔 Canteen?</button>
              <button type="button" class="suggestion-chip" data-query="Who is HOD of Civil?">👨‍🏫 Civil HOD?</button>
              <button type="button" class="suggestion-chip" data-query="Where is Physics lab?">🔬 Physics Lab?</button>
              <button type="button" class="suggestion-chip" data-query="Where is Library?">📚 Library?</button>
            </div>
          </div>

          <!-- Input Area -->
          <form id="pdacek-chat-form" class="chat-input-form">
            <input type="text" id="pdacek-chat-input" class="chat-input-field" placeholder="Ask about departments, labs..." required autocomplete="off">
            <button type="submit" class="chat-submit-btn" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    `;

    // Append to body
    const div = document.createElement("div");
    div.innerHTML = chatbotHtml;
    document.body.appendChild(div.firstElementChild);

    // Get elements
    const widget = document.getElementById("pdacek-chatbot-widget");
    const toggleBtn = document.getElementById("pdacek-chatbot-toggle");
    const closeBtn = document.getElementById("pdacek-chatbot-close");
    const chatForm = document.getElementById("pdacek-chat-form");
    const chatInput = document.getElementById("pdacek-chat-input");
    const messagesLog = document.getElementById("pdacek-chat-messages");

    // Toggle Chat window
    toggleBtn.addEventListener("click", () => {
      widget.classList.toggle("chatbot-open");
      if (widget.classList.contains("chatbot-open")) {
        chatInput.focus();
        scrollToBottom();
      }
    });

    closeBtn.addEventListener("click", () => {
      widget.classList.remove("chatbot-open");
    });

    // Handle suggestion chips
    document.querySelectorAll(".suggestion-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const query = chip.getAttribute("data-query");
        if (query) {
          submitUserMessage(query);
        }
      });
    });

    // Form submit
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (!message) return;
      submitUserMessage(message);
      chatInput.value = "";
    });

    function scrollToBottom() {
      messagesLog.scrollTop = messagesLog.scrollHeight;
    }

    function appendMessage(sender, text, isHtml = false) {
      const msgDiv = document.createElement("div");
      msgDiv.className = `chat-message ${sender}-msg`;
      
      const bubble = document.createElement("div");
      bubble.className = "msg-bubble";
      if (isHtml) {
        bubble.innerHTML = text;
      } else {
        bubble.textContent = text;
      }
      
      msgDiv.appendChild(bubble);
      messagesLog.appendChild(msgDiv);
      scrollToBottom();
      return msgDiv;
    }

    function showTypingIndicator() {
      const indicator = document.createElement("div");
      indicator.className = "chat-message bot-msg typing-indicator-msg";
      indicator.innerHTML = `
        <div class="msg-bubble d-flex gap-1 align-items-center">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      `;
      messagesLog.appendChild(indicator);
      scrollToBottom();
      return indicator;
    }

    function submitUserMessage(message) {
      appendMessage("user", message);
      const indicator = showTypingIndicator();

      setTimeout(() => {
        // Remove typing indicator
        indicator.remove();
        const responseHtml = generateBotResponse(message);
        appendMessage("bot", responseHtml, true);
      }, 700);
    }

    function normalizeText(str) {
      return (str || "").toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
    }

    function generateBotResponse(userMsg) {
      const msg = normalizeText(userMsg);
      
      // 1. Basic Greetings
      const greetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy", "sup"];
      if (greetings.some(g => msg === g || msg.startsWith(g + " "))) {
        return `Hello! How can I assist you today? You can ask about department locations (e.g., <em>"Where is ISE?"</em>), faculty contacts, HODs, or lab locations.`;
      }

      // 2. Help query
      if (msg.includes("help") || msg.includes("what can you do")) {
        return `I can help you navigate the campus! Try asking:
          <ul class="mb-0 mt-1 ps-3">
            <li>"Where is the Civil department?"</li>
            <li>"Who is the HOD of Mech?"</li>
            <li>"Tell me about the history of the college"</li>
            <li>"What is the vision and mission?"</li>
          </ul>`;
      }

      // 2.5. Official College Background Queries
      const col = window.campusData?.college;
      if (col) {
        if (msg.includes("vision")) {
          return `<strong>Institution Vision:</strong><br>"${col.vision}"`;
        }
        if (msg.includes("mission")) {
          return `<strong>Institution Mission:</strong><br><ul class="mb-0 mt-1 ps-3">${col.mission.map(m => `<li>${m}</li>`).join("")}</ul>`;
        }
        if (msg.includes("history") || msg.includes("established") || msg.includes("founded") || msg.includes("founder") || msg.includes("hke")) {
          return `<strong>PDACEK History & Foundation:</strong><br>${col.history}<br><br><strong>Founder:</strong> ${col.founder}<br><strong>Established:</strong> ${col.established} under ${col.society}.`;
        }
        if (msg.includes("achievement") || msg.includes("record") || msg.includes("first")) {
          return `<strong>PDACEK Key Achievements:</strong><br><ul class="mb-0 mt-1 ps-3">${col.achievements.map(a => `<li>${a}</li>`).join("")}</ul>`;
        }
        if (msg.includes("about") || msg.includes("college") || msg.includes("address") || msg.includes("pdacek")) {
          return `<strong>About ${col.name} (${col.shortName}):</strong><br>
            Established in ${col.established} by the ${col.society}, ${col.shortName} is a premier autonomous institution in Kalaburagi, Karnataka.<br><br>
            <strong>Founder:</strong> ${col.founder}<br>
            <strong>Website:</strong> <a href="${col.website}" target="_blank">${col.website}</a><br>
            <strong>Address:</strong> ${col.address}`;
        }
      }

      // Filter stop words to avoid noise
      const stopwords = ["where", "is", "the", "a", "an", "of", "to", "in", "at", "for", "find", "locate", "directions", "tell", "me", "about", "show", "who", "what", "please", "can", "you", "go", "near"];
      const words = msg.split(/\s+/).filter(w => w.length > 1 && !stopwords.includes(w));

      // 3. Search FAQ database first
      let bestFaqMatch = null;
      let bestFaqScore = 0;
      if (window.campusData?.faqs) {
        window.campusData.faqs.forEach(faq => {
          let score = 0;
          const qText = faq.q.toLowerCase();
          const keywords = faq.keywords.map(k => k.toLowerCase());
          
          if (msg.includes(qText) || qText.includes(msg)) {
            score += 40;
          }
          
          words.forEach(w => {
            if (qText.includes(w)) {
              score += 15;
            }
            if (keywords.includes(w)) {
              score += 20;
            } else if (keywords.some(k => k.includes(w))) {
              score += 8;
            }
          });
          
          if (score > bestFaqScore) {
            bestFaqScore = score;
            bestFaqMatch = faq;
          }
        });
      }

      // 4. Search Location database
      if (typeof window.getAllSearchableItems !== "function") {
        return `Sorry, I am having trouble fetching the campus database right now. Please try again.`;
      }

      const items = window.getAllSearchableItems();
      const matched = [];

      // Heuristics flags
      const isLookingForLab = msg.includes("lab") || msg.includes("laboratory") || msg.includes("practical");
      const isLookingForHOD = msg.includes("hod") || msg.includes("head") || msg.includes("professor") || msg.includes("faculty") || msg.includes("teacher") || msg.includes("role") || msg.includes("sir") || msg.includes("mam");
      const isLookingForClassroom = msg.includes("room") || msg.includes("classroom") || msg.includes("class") || msg.includes("lh-") || msg.includes("ce-") || msg.includes("me-") || msg.includes("ec-") || msg.includes("cs-") || msg.includes("is-") || msg.includes("fy-");
      const isLookingForFacility = msg.includes("facility") || msg.includes("canteen") || msg.includes("library") || msg.includes("xerox") || msg.includes("bank") || msg.includes("post") || msg.includes("sports") || msg.includes("hostel");

      items.forEach(item => {
        let score = 0;
        const name = item.name.toLowerCase();
        const type = item.type.toLowerCase();
        const keywords = (item.keywords || []).map(k => k.toLowerCase());
        
        // Exact name match
        if (msg.includes(name) || name.includes(msg)) {
          score += 40;
        }
        
        // Match individual words
        words.forEach(w => {
          if (name.includes(w)) {
            score += 15;
            // Exact word match in name
            const nameWords = name.split(/\s+/);
            if (nameWords.includes(w)) score += 15;
          }
          if (keywords.includes(w)) {
            score += 20;
          } else if (keywords.some(k => k.includes(w))) {
            score += 8;
          }
          if (item.floor && item.floor.toLowerCase().includes(w)) {
            score += 5;
          }
        });

        // Heuristics Boosting/Penalties
        if (isLookingForLab) {
          if (type === "lab") score += 30;
          else score -= 15;
        }
        if (isLookingForHOD) {
          if (type === "faculty") {
            score += 30;
            // Extra boost if matching HOD specifically
            if (msg.includes("hod") && name.includes("hod")) {
              score += 20;
            }
          }
          else score -= 15;
        }
        if (isLookingForClassroom) {
          if (type === "classroom") score += 30;
          else score -= 15;
        }
        if (isLookingForFacility) {
          if (type === "facility") score += 30;
          else score -= 15;
        }

        if (score > 5) {
          matched.push({ item, score });
        }
      });

      // Sort by score
      matched.sort((a, b) => b.score - a.score);

      // Respond with FAQ if it's the strongest match
      if (bestFaqMatch && bestFaqScore > 15 && (matched.length === 0 || bestFaqScore >= matched[0].score)) {
        return `<strong>${bestFaqMatch.q}</strong><br><br>${bestFaqMatch.a}`;
      }

      if (matched.length === 0) {
        return `I couldn't find a clear match for <strong>"${escapeHtml(userMsg)}"</strong>. <br><br>
          Try asking direct questions like:
          <ul class="mb-0 mt-1 ps-3">
            <li><em>"Where is CSE department?"</em></li>
            <li><em>"Who is HOD of Civil?"</em></li>
            <li><em>"Where is the chemistry lab?"</em></li>
            <li><em>"Directions to canteen"</em></li>
          </ul>`;
      }

      // Format response based on top matches (limit to top 3)
      const topMatches = matched.slice(0, 3);
      let reply = `Here is what I found matching <strong>"${escapeHtml(userMsg)}"</strong>:<br><br>`;
      
      topMatches.forEach(({ item }) => {
        const block = typeof window.getBlock === "function" ? window.getBlock(item.blockId) : null;
        const blockName = block ? block.name : item.blockId;
        const emoji = item.type === "department" ? "🏫" 
                    : item.type === "facility" ? "🏢" 
                    : item.type === "lab" ? "🔬" 
                    : item.type === "classroom" ? "🚪" 
                    : "👨‍🏫";

        reply += `<div class="bot-search-result-item mb-2">`;
        reply += `<div class="fw-bold">${emoji} ${item.name}</div>`;
        reply += `<div class="small text-muted-pdacek">Block: ${blockName} · Floor: ${item.floor || "Ground"}</div>`;
        if (item.directions) {
          reply += `<div class="small mt-1 text-light-directions">📍 <em>Directions: ${item.directions}</em></div>`;
        }
        reply += `<div class="d-flex gap-1 mt-1">`;
        reply += `<a href="${item.url}" class="btn btn-sm btn-outline-primary py-0 px-2" style="font-size: 11px;">View Page</a>`;
        reply += `<a href="map.html?highlight=${encodeURIComponent(item.blockId)}" class="btn btn-sm btn-primary py-0 px-2 text-white" style="font-size: 11px;">Show on Map</a>`;
        reply += `</div>`;
        reply += `</div>`;
      });

      return reply;
    }

    function escapeHtml(str) {
      const div = document.createElement("div");
      div.textContent = str;
      return div.innerHTML;
    }
  }
})();
