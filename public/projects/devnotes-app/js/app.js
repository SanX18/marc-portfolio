/* ==========================================================================
   DevNotes & IT Dashboard — Main JavaScript Logic
   Developer: Marc Sancho (DAM + DAW)
   ========================================================================== */

// 1. INITIAL EXAMPLE DATA (Seed Data)
const initialCommands = [
  {
    id: "cmd-1",
    title: "View processes listening on a port (Windows)",
    category: "System / IT",
    code: "netstat -ano | findstr :8080",
    description: "Useful for when a web or Java server blocks port 8080."
  },
  {
    id: "cmd-2",
    title: "Discard unsaved local changes",
    category: "Git",
    code: "git restore . && git clean -fd",
    description: "Cleans the working directory and restores modified files."
  },
  {
    id: "cmd-3",
    title: "Quick JOIN query for relationships in MySQL",
    category: "SQL",
    code: "SELECT u.nombre, p.titulo FROM usuarios u INNER JOIN proyectos p ON u.id = p.usuario_id;",
    description: "Basic SQL query template with foreign key."
  },
  {
    id: "cmd-4",
    title: "Start quick local test server in Python",
    category: "Dev / Web",
    code: "python -m http.server 8000",
    description: "Opens an HTTP server on port 8000 pointing to the current folder."
  },
  {
    id: "cmd-5",
    title: "Release and renew IP via console (Windows)",
    category: "System / IT",
    code: "ipconfig /release && ipconfig /renew",
    description: "Restarts the IP address assigned by DHCP to the network adapter."
  },
  {
    id: "cmd-6",
    title: "Undo the last commit (without losing changes)",
    category: "Git",
    code: "git reset --soft HEAD~1",
    description: "Undoes the last commit but keeps modified files ready to commit again."
  },
  {
    id: "cmd-7",
    title: "Force remote update (overwrite local)",
    category: "Git",
    code: "git fetch --all && git reset --hard origin/main",
    description: "Caution: Overwrites all local changes with the exact version of the remote main branch."
  },
  {
    id: "cmd-8",
    title: "View history in a summary graph",
    category: "Git",
    code: "git log --graph --oneline --decorate --all",
    description: "Shows the branch and commit tree visually and compactly in the console."
  },
  {
    id: "cmd-9",
    title: "Modify the message of the last commit",
    category: "Git",
    code: "git commit --amend -m \"New message\"",
    description: "Changes the message of the last commit (provided it hasn't been pushed to the remote repository)."
  },
  {
    id: "cmd-10",
    title: "Clear Docker cache",
    category: "System / IT",
    code: "docker system prune -a --volumes",
    description: "Removes stopped containers, networks, and volumes to free up disk space."
  },
  {
    id: "cmd-11",
    title: "Kill process on a port (Mac/Linux)",
    category: "System / IT",
    code: "kill -9 $(lsof -t -i:3000)",
    description: "Forces the closure of the process using port 3000."
  }
];

const initialTasks = [
  {
    id: "task-1",
    title: "Review MVC pattern architecture in Java (DAM)",
    category: "DAM - Data Access",
    priority: "High",
    status: "pending"
  },
  {
    id: "task-2",
    title: "Design responsive interface for client in DAW",
    category: "DAW - Web Design",
    priority: "Medium",
    status: "in-progress"
  },
  {
    id: "task-3",
    title: "Configure Git repository for DevNotes App",
    category: "Personal Projects",
    priority: "High",
    status: "completed"
  }
];

const initialNotes = `// ==========================================
// NOTEPAD AND QUICK NOTES
// ==========================================

// Example JS function to test snippets:
function calculatePercentage(total, part) {
  return ((part / total) * 100).toFixed(2) + '%';
}

console.log("Course progress:", calculatePercentage(20, 5));
`;

// 2. GLOBAL APPLICATION STATE
let appState = {
  commands: [],
  tasks: [],
  notes: "",
  activeTab: "commandsTab",
  activeCategory: "all",
  searchQuery: ""
};

// 3. APPLICATION INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initNavigation();
  initCommandsModule();
  initTasksModule();
  initNotesModule();
  initModals();
  initSearch();
  initShortcuts();

  renderAll();
});

// 4. LOCALSTORAGE MANAGEMENT (Data persistence)
function initStorage() {
  const storedCommands = localStorage.getItem("devdash_commands");
  const storedTasks = localStorage.getItem("devdash_tasks");
  const storedNotes = localStorage.getItem("devdash_notes");

  appState.commands = storedCommands ? JSON.parse(storedCommands) : initialCommands;
  appState.tasks = storedTasks ? JSON.parse(storedTasks) : initialTasks;
  appState.notes = storedNotes !== null ? storedNotes : initialNotes;

  saveState();
}

function saveState() {
  localStorage.setItem("devdash_commands", JSON.stringify(appState.commands));
  localStorage.setItem("devdash_tasks", JSON.stringify(appState.tasks));
  localStorage.setItem("devdash_notes", appState.notes);

  updateBadges();
}

function updateBadges() {
  document.getElementById("commandCountBadge").textContent = appState.commands.length;
  document.getElementById("taskCountBadge").textContent = appState.tasks.length;
}

// 5. NAVIGATION AND TABS MODULE
function initNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      navButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(t => t.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(targetTab).classList.add("active");

      appState.activeTab = targetTab;
    });
  });

  // Reset data button
  document.getElementById("resetDataBtn").addEventListener("click", () => {
    if (confirm("Do you want to reset the initial example data?")) {
      localStorage.clear();
      appState.commands = [...initialCommands];
      appState.tasks = [...initialTasks];
      appState.notes = initialNotes;
      saveState();
      renderAll();
      showToast("Data reset successfully");
    }
  });
}

// 6. QUICK COMMANDS MODULE
function initCommandsModule() {
  const categoryFilters = document.querySelectorAll(".cat-filter");

  categoryFilters.forEach(filterBtn => {
    filterBtn.addEventListener("click", () => {
      categoryFilters.forEach(b => b.classList.remove("active"));
      filterBtn.classList.add("active");

      appState.activeCategory = filterBtn.getAttribute("data-cat");
      renderCommands();
    });
  });
}

function renderCommands() {
  const grid = document.getElementById("commandsGrid");
  const emptyState = document.getElementById("emptyCommandsState");

  grid.innerHTML = "";

  // Category and search filtering
  const filteredCommands = appState.commands.filter(cmd => {
    const matchesCategory = appState.activeCategory === "all" || cmd.category === appState.activeCategory;
    const q = appState.searchQuery.toLowerCase();
    const matchesSearch = !q || cmd.title.toLowerCase().includes(q) || cmd.code.toLowerCase().includes(q) || (cmd.description && cmd.description.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  if (filteredCommands.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");

      filteredCommands.forEach(cmd => {
        const card = document.createElement("div");
        card.className = "command-card animate-in";
        card.innerHTML = `
        <div>
          <div class="cmd-card-header">
            <h3 class="cmd-card-title">${escapeHTML(cmd.title)}</h3>
            <span class="cmd-tag" data-cat="${cmd.category}">${escapeHTML(cmd.category)}</span>
          </div>
          ${cmd.description ? `<p class="cmd-desc">${escapeHTML(cmd.description)}</p>` : ''}
          <div class="cmd-code-block">
            <code>${escapeHTML(cmd.code)}</code>
            <button class="btn-copy" data-code="${escapeAttribute(cmd.code)}">Copy</button>
          </div>
        </div>
        <div class="cmd-card-footer">
          <button class="btn-delete-card" data-id="${cmd.id}">Delete</button>
        </div>
      `;

      // Copy to clipboard event
      card.querySelector(".btn-copy").addEventListener("click", (e) => {
        const codeText = e.target.getAttribute("data-code");
        navigator.clipboard.writeText(codeText).then(() => {
          showToast("Command copied to clipboard!");
        });
      });

      // Delete event
      card.querySelector(".btn-delete-card").addEventListener("click", () => {
        deleteCommand(cmd.id);
      });

      grid.appendChild(card);
    });
  }
}

function deleteCommand(id) {
  appState.commands = appState.commands.filter(c => c.id !== id);
  saveState();
  renderCommands();
  showToast("Command deleted");
}

// 7. TASKS MODULE (Task Tracker)
function initTasksModule() {
  // Events are handled on render
}

function renderTasks() {
  const pendingList = document.getElementById("pendingList");
  const inProgressList = document.getElementById("inProgressList");
  const completedList = document.getElementById("completedList");

  pendingList.innerHTML = "";
  inProgressList.innerHTML = "";
  completedList.innerHTML = "";

  let pendingCount = 0;
  let inProgressCount = 0;
  let completedCount = 0;

  appState.tasks.forEach(task => {
    // Filter by global search
    const q = appState.searchQuery.toLowerCase();
    const matchesSearch = !q || task.title.toLowerCase().includes(q) || task.category.toLowerCase().includes(q);

    if (!matchesSearch) return;

    const card = document.createElement("div");
    card.className = "task-card animate-in";

    let moveButtons = "";
    if (task.status === "pending") {
      pendingCount++;
      moveButtons = `<button class="task-move-btn" onclick="moveTask('${task.id}', 'in-progress')">To In Progress ➔</button>`;
    } else if (task.status === "in-progress") {
      inProgressCount++;
      moveButtons = `
        <button class="task-move-btn" onclick="moveTask('${task.id}', 'pending')">⬅ Pending</button>
        <button class="task-move-btn" onclick="moveTask('${task.id}', 'completed')">Complete ✔</button>
      `;
    } else if (task.status === "completed") {
      completedCount++;
      moveButtons = `<button class="task-move-btn" onclick="moveTask('${task.id}', 'in-progress')">⬅ Reopen</button>`;
    }

    card.innerHTML = `
      <div class="task-title">${escapeHTML(task.title)}</div>
      <div class="task-meta">
        <span class="priority-badge ${task.priority}">● ${task.priority}</span>
        <span class="task-cat-name">${escapeHTML(task.category)}</span>
      </div>
      <div class="task-actions">
        <div class="move-group">${moveButtons}</div>
        <button class="btn-delete-card" onclick="deleteTask('${task.id}')">✕</button>
      </div>
    `;

    if (task.status === "pending") pendingList.appendChild(card);
    else if (task.status === "in-progress") inProgressList.appendChild(card);
    else if (task.status === "completed") completedList.appendChild(card);
  });

  document.getElementById("pendingCount").textContent = pendingCount;
  document.getElementById("inProgressCount").textContent = inProgressCount;
  document.getElementById("completedCount").textContent = completedCount;
}

window.moveTask = function(id, newStatus) {
  const task = appState.tasks.find(t => t.id === id);
  if (task) {
    task.status = newStatus;
    saveState();
    renderTasks();
    showToast(`Task moved to ${newStatus === 'completed' ? 'Completed' : newStatus === 'in-progress' ? 'In Progress' : 'Pending'}`);
  }
};

window.deleteTask = function(id) {
  appState.tasks = appState.tasks.filter(t => t.id !== id);
  saveState();
  renderTasks();
  showToast("Task deleted");
};

// 8. NOTES / SCRATCHPAD MODULE
function initNotesModule() {
  const notesArea = document.getElementById("notesArea");
  const charCount = document.getElementById("charCount");
  const saveStatusText = document.getElementById("saveStatusText");
  const saveIndicator = document.querySelector(".save-indicator");
  const clearBtn = document.getElementById("clearNotesBtn");

  notesArea.value = appState.notes;
  updateNotesCount();

  let saveTimeout;

  notesArea.addEventListener("input", () => {
    appState.notes = notesArea.value;
    updateNotesCount();

    // Visual autosave indicator
    saveStatusText.textContent = "Saving...";
    saveIndicator.classList.add("saving");

    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      saveState();
      saveStatusText.textContent = "Saved to disk";
      saveIndicator.classList.remove("saving");
    }, 600);
  });

  clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear the notepad?")) {
      notesArea.value = "";
      appState.notes = "";
      saveState();
      updateNotesCount();
      showToast("Notepad cleared");
    }
  });

  function updateNotesCount() {
    charCount.textContent = `${notesArea.value.length} characters`;
  }
}

// 9. MODALS MANAGEMENT
function initModals() {
  const commandModal = document.getElementById("commandModal");
  const taskModal = document.getElementById("taskModal");

  // Open modals
  document.getElementById("addCommandBtn").addEventListener("click", () => openModal(commandModal));
  document.getElementById("addTaskBtn").addEventListener("click", () => openModal(taskModal));

  document.getElementById("quickAddBtn").addEventListener("click", () => {
    if (appState.activeTab === "tasksTab") openModal(taskModal);
    else openModal(commandModal);
  });

  // Close modals
  document.getElementById("closeCommandModalBtn").addEventListener("click", () => closeModal(commandModal));
  document.getElementById("cancelCommandModalBtn").addEventListener("click", () => closeModal(commandModal));

  document.getElementById("closeTaskModalBtn").addEventListener("click", () => closeModal(taskModal));
  document.getElementById("cancelTaskModalBtn").addEventListener("click", () => closeModal(taskModal));

  // Command Form Submit
  document.getElementById("commandForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newCommand = {
      id: "cmd-" + Date.now(),
      title: document.getElementById("cmdTitle").value.trim(),
      category: document.getElementById("cmdCategory").value,
      code: document.getElementById("cmdCode").value.trim(),
      description: document.getElementById("cmdDesc").value.trim()
    };

    appState.commands.unshift(newCommand);
    saveState();
    renderCommands();
    closeModal(commandModal);
    e.target.reset();
    showToast("Command saved successfully");
  });

  // Task Form Submit
  document.getElementById("taskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = {
      id: "task-" + Date.now(),
      title: document.getElementById("taskTitle").value.trim(),
      category: document.getElementById("taskCategory").value.trim(),
      priority: document.getElementById("taskPriority").value,
      status: document.getElementById("taskStatus").value
    };

    appState.tasks.unshift(newTask);
    saveState();
    renderTasks();
    closeModal(taskModal);
    e.target.reset();
    showToast("Task created successfully");
  });
}

function openModal(modalEl) {
  modalEl.classList.remove("hidden");
  // Short delay for CSS transition to take effect after removing display:none
  setTimeout(() => modalEl.classList.add("active"), 10);
}

function closeModal(modalEl) {
  modalEl.classList.remove("active");
  setTimeout(() => modalEl.classList.add("hidden"), 300);
}

// 10. GLOBAL SEARCH
function initSearch() {
  const searchInput = document.getElementById("globalSearchInput");

  searchInput.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;
    renderCommands();
    renderTasks();
  });
}

// 11. KEYBOARD SHORTCUTS
function initShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ctrl + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      document.getElementById("globalSearchInput").focus();
    }
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m));
    }
  });
}

// 12. RENDER HELPERS
function renderAll() {
  renderCommands();
  renderTasks();
  updateBadges();
}

function showToast(message) {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");

  toastMsg.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("show"), 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 2600);
}

function escapeHTML(str) {
  return str ? str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  ) : '';
}

function escapeAttribute(str) {
  return str ? str.replace(/"/g, '&quot;') : '';
}
