/* ==========================================================================
   DevNotes & IT Dashboard — Lógica Principal en JavaScript
   Desarrollador: Marc Sancho (DAM + DAW)
   ========================================================================== */

// 1. DATOS INICIALES DE EJEMPLO (Seed Data)
const initialCommands = [
  {
    id: "cmd-1",
    title: "Ver procesos escuchando en un puerto (Windows)",
    category: "Sistema / IT",
    code: "netstat -ano | findstr :8080",
    description: "Útil para cuando un servidor web o Java bloquea el puerto 8080."
  },
  {
    id: "cmd-2",
    title: "Descartar cambios locales no guardados",
    category: "Git",
    code: "git restore . && git clean -fd",
    description: "Limpia el directorio de trabajo y restaura los archivos modificados."
  },
  {
    id: "cmd-3",
    title: "Consulta JOIN rápida para relaciones en MySQL",
    category: "SQL",
    code: "SELECT u.nombre, p.titulo FROM usuarios u INNER JOIN proyectos p ON u.id = p.usuario_id;",
    description: "Plantilla básica de consulta SQL con clave foránea."
  },
  {
    id: "cmd-4",
    title: "Iniciar servidor local rápido de pruebas en Python",
    category: "Dev / Web",
    code: "python -m http.server 8000",
    description: "Abre un servidor HTTP en el puerto 8000 apuntando a la carpeta actual."
  },
  {
    id: "cmd-5",
    title: "Liberar y renovar IP por consola (Windows)",
    category: "Sistema / IT",
    code: "ipconfig /release && ipconfig /renew",
    description: "Reinicia la dirección IP asignada por DHCP al adaptador de red."
  },
  {
    id: "cmd-6",
    title: "Deshacer el último commit (sin perder cambios)",
    category: "Git",
    code: "git reset --soft HEAD~1",
    description: "Deshace el último commit pero mantiene los archivos modificados listos para volver a hacer commit."
  },
  {
    id: "cmd-7",
    title: "Forzar actualización remota (sobrescribir local)",
    category: "Git",
    code: "git fetch --all && git reset --hard origin/main",
    description: "Cuidado: Sobrescribe todos los cambios locales con la versión exacta de la rama principal remota."
  },
  {
    id: "cmd-8",
    title: "Ver historial en un gráfico resumido",
    category: "Git",
    code: "git log --graph --oneline --decorate --all",
    description: "Muestra el árbol de ramas y commits de forma visual y compacta en la consola."
  },
  {
    id: "cmd-9",
    title: "Modificar el mensaje del último commit",
    category: "Git",
    code: "git commit --amend -m \"Nuevo mensaje\"",
    description: "Cambia el mensaje del último commit (siempre que no se haya subido al repositorio remoto)."
  },
  {
    id: "cmd-10",
    title: "Limpiar la caché de Docker",
    category: "Sistema / IT",
    code: "docker system prune -a --volumes",
    description: "Elimina contenedores, redes y volúmenes detenidos para liberar espacio en disco."
  },
  {
    id: "cmd-11",
    title: "Matar proceso en un puerto (Mac/Linux)",
    category: "Sistema / IT",
    code: "kill -9 $(lsof -t -i:3000)",
    description: "Fuerza el cierre del proceso que esté utilizando el puerto 3000."
  }
];

const initialTasks = [
  {
    id: "task-1",
    title: "Revisar arquitectura del patrón MVC en Java (DAM)",
    category: "DAM - Acceso a Datos",
    priority: "Alta",
    status: "pending"
  },
  {
    id: "task-2",
    title: "Diseñar interfaz responsive para cliente en DAW",
    category: "DAW - Diseño Web",
    priority: "Media",
    status: "in-progress"
  },
  {
    id: "task-3",
    title: "Configurar repositorio Git para DevNotes App",
    category: "Proyectos Personal",
    priority: "Alta",
    status: "completed"
  }
];

const initialNotes = `// ==========================================
// BLOC DE NOTAS Y APUNTES RÁPIDOS
// ==========================================

// Ejemplo de función en JS para probar snippets:
function calcularPorcentaje(total, parte) {
  return ((parte / total) * 100).toFixed(2) + '%';
}

console.log("Progreso del curso:", calcularPorcentaje(20, 5));
`;

// 2. ESTADO GLOBAL DE LA APLICACIÓN
let appState = {
  commands: [],
  tasks: [],
  notes: "",
  activeTab: "commandsTab",
  activeCategory: "all",
  searchQuery: ""
};

// 3. INICIALIZACIÓN DE LA APLICACIÓN
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

// 4. GESTIÓN DE LOCALSTORAGE (Persistencia de datos)
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

// 5. MÓDULO DE NAVEGACIÓN Y PESTAÑAS
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

  // Botón de restablecimiento de datos
  document.getElementById("resetDataBtn").addEventListener("click", () => {
    if (confirm("¿Deseas restablecer los datos de ejemplo iniciales?")) {
      localStorage.clear();
      appState.commands = [...initialCommands];
      appState.tasks = [...initialTasks];
      appState.notes = initialNotes;
      saveState();
      renderAll();
      showToast("Datos restablecidos con éxito");
    }
  });
}

// 6. MÓDULO DE COMANDOS RÁPIDOS
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

  // Filtrado por categoría y búsqueda
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
            <button class="btn-copy" data-code="${escapeAttribute(cmd.code)}">Copiar</button>
          </div>
        </div>
        <div class="cmd-card-footer">
          <button class="btn-delete-card" data-id="${cmd.id}">Eliminar</button>
        </div>
      `;

      // Evento de copia al portapapeles
      card.querySelector(".btn-copy").addEventListener("click", (e) => {
        const codeText = e.target.getAttribute("data-code");
        navigator.clipboard.writeText(codeText).then(() => {
          showToast("¡Comando copiado al portapapeles!");
        });
      });

      // Evento de eliminación
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
  showToast("Comando eliminado");
}

// 7. MÓDULO DE TAREAS (Task Tracker)
function initTasksModule() {
  // Los eventos se manejan al renderizar
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
    // Filtrar por búsqueda global
    const q = appState.searchQuery.toLowerCase();
    const matchesSearch = !q || task.title.toLowerCase().includes(q) || task.category.toLowerCase().includes(q);

    if (!matchesSearch) return;

    const card = document.createElement("div");
    card.className = "task-card animate-in";

    let moveButtons = "";
    if (task.status === "pending") {
      pendingCount++;
      moveButtons = `<button class="task-move-btn" onclick="moveTask('${task.id}', 'in-progress')">A En Proceso ➔</button>`;
    } else if (task.status === "in-progress") {
      inProgressCount++;
      moveButtons = `
        <button class="task-move-btn" onclick="moveTask('${task.id}', 'pending')">⬅ Pendiente</button>
        <button class="task-move-btn" onclick="moveTask('${task.id}', 'completed')">Completar ✔</button>
      `;
    } else if (task.status === "completed") {
      completedCount++;
      moveButtons = `<button class="task-move-btn" onclick="moveTask('${task.id}', 'in-progress')">⬅ Reabrir</button>`;
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
    showToast(`Tarea movida a ${newStatus === 'completed' ? 'Completadas' : newStatus === 'in-progress' ? 'En Proceso' : 'Pendientes'}`);
  }
};

window.deleteTask = function(id) {
  appState.tasks = appState.tasks.filter(t => t.id !== id);
  saveState();
  renderTasks();
  showToast("Tarea eliminada");
};

// 8. MÓDULO DE NOTAS / SCRATCHPAD
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

    // Indicador visual de autoguardado
    saveStatusText.textContent = "Guardando...";
    saveIndicator.classList.add("saving");

    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      saveState();
      saveStatusText.textContent = "Guardado en disco";
      saveIndicator.classList.remove("saving");
    }, 600);
  });

  clearBtn.addEventListener("click", () => {
    if (confirm("¿Estás seguro de vaciar el bloc de notas?")) {
      notesArea.value = "";
      appState.notes = "";
      saveState();
      updateNotesCount();
      showToast("Bloc de notas limpiado");
    }
  });

  function updateNotesCount() {
    charCount.textContent = `${notesArea.value.length} caracteres`;
  }
}

// 9. GESTIÓN DE MODALES
function initModals() {
  const commandModal = document.getElementById("commandModal");
  const taskModal = document.getElementById("taskModal");

  // Abrir modales
  document.getElementById("addCommandBtn").addEventListener("click", () => openModal(commandModal));
  document.getElementById("addTaskBtn").addEventListener("click", () => openModal(taskModal));

  document.getElementById("quickAddBtn").addEventListener("click", () => {
    if (appState.activeTab === "tasksTab") openModal(taskModal);
    else openModal(commandModal);
  });

  // Cerrar modales
  document.getElementById("closeCommandModalBtn").addEventListener("click", () => closeModal(commandModal));
  document.getElementById("cancelCommandModalBtn").addEventListener("click", () => closeModal(commandModal));

  document.getElementById("closeTaskModalBtn").addEventListener("click", () => closeModal(taskModal));
  document.getElementById("cancelTaskModalBtn").addEventListener("click", () => closeModal(taskModal));

  // Envío Formulario Comando
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
    showToast("Comando guardado exitosamente");
  });

  // Envío Formulario Tarea
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
    showToast("Tarea creada exitosamente");
  });
}

function openModal(modalEl) {
  modalEl.classList.remove("hidden");
  // Pequeño retardo para que la transición de CSS surta efecto tras quitar el display:none
  setTimeout(() => modalEl.classList.add("active"), 10);
}

function closeModal(modalEl) {
  modalEl.classList.remove("active");
  setTimeout(() => modalEl.classList.add("hidden"), 300);
}

// 10. BÚSQUEDA GLOBAL
function initSearch() {
  const searchInput = document.getElementById("globalSearchInput");

  searchInput.addEventListener("input", (e) => {
    appState.searchQuery = e.target.value;
    renderCommands();
    renderTasks();
  });
}

// 11. ATAJOS DE TECLADO
function initShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ctrl + K para enfocar la búsqueda
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      document.getElementById("globalSearchInput").focus();
    }
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m));
    }
  });
}

// 12. AUXILIARES DE RENDERIZADO
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
