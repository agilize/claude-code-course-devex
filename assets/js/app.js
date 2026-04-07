// Claude Code Course — Main App JS
(function() {
  'use strict';

  // ============================================================
  // MODULE DATA
  // ============================================================
  const MODULES = [
    { id: 1, title: 'O que é Claude Code', path: '/modules/01-fundacoes/', part: 1 },
    { id: 2, title: 'CLI Completo', path: '/modules/01-fundacoes/02-cli.html', part: 1 },
    { id: 3, title: 'CLAUDE.md', path: '/modules/01-fundacoes/claude-md.html', part: 1 },
    { id: 4, title: 'Ferramentas (Tools)', path: '/modules/02-config/tools.html', part: 2 },
    { id: 5, title: 'Settings & Permissões', path: '/modules/02-config/settings.html', part: 2 },
    { id: 6, title: 'Skills (Slash Commands)', path: '/modules/02-config/skills.html', part: 2 },
    { id: 7, title: 'Hooks', path: '/modules/02-config/hooks.html', part: 2 },
    { id: 8, title: 'Keybindings', path: '/modules/02-config/keybindings.html', part: 2 },
    { id: 9, title: 'Sistema de Memória', path: '/modules/03-memoria-contexto/memory.html', part: 3 },
    { id: 10, title: 'Gestão de Contexto', path: '/modules/03-memoria-contexto/context.html', part: 3 },
    { id: 11, title: 'MCP Servers', path: '/modules/03-memoria-contexto/mcp.html', part: 3 },
    { id: 12, title: 'Agent Tool', path: '/modules/04-agentes/agent-tool.html', part: 4 },
    { id: 13, title: 'Subagentes & Agent Teams', path: '/modules/04-agentes/subagents.html', part: 4 },
    { id: 14, title: 'Plan Mode', path: '/modules/04-agentes/plan-mode.html', part: 4 },
    { id: 15, title: 'CLI Corporativo', path: '/modules/05-avancado/cli-corporate.html', part: 5 },
    { id: 16, title: 'IDE Integration', path: '/modules/05-avancado/ide.html', part: 5 },
    { id: 17, title: 'Seleção de Modelos', path: '/modules/05-avancado/models.html', part: 5 },
    { id: 18, title: 'Claude API & Agent SDK', path: '/modules/05-avancado/api-sdk.html', part: 5 },
    { id: 19, title: 'Boas Práticas', path: '/modules/05-avancado/best-practices.html', part: 5 },
    { id: 20, title: 'Recursos & Referências', path: '/modules/05-avancado/resources.html', part: 5 },
    { id: 21, title: 'RTK — Economia de Tokens', path: '/modules/05-avancado/rtk.html', part: 5 },
  ];

  // Search keywords per module
  const SEARCH_KEYWORDS = {
    1: ['instalação', 'install', 'o que é', 'introdução', 'anthropic', 'terminal'],
    2: ['cli', 'comandos', 'flags', 'bash', 'linha de comando', '--model', 'slash', '/help', '/clear'],
    3: ['claude.md', 'instruções', 'projeto', 'global', 'convenções', 'import', '@'],
    4: ['tools', 'ferramentas', 'read', 'write', 'edit', 'bash', 'grep', 'glob', 'agent'],
    5: ['settings', 'permissões', 'allow', 'deny', 'configuração', 'settings.json'],
    6: ['skills', 'slash commands', 'skill.md', 'custom commands', '/commit', '/test'],
    7: ['hooks', 'pretooluse', 'posttooluse', 'sessionstart', 'automação', 'eventos'],
    8: ['keybindings', 'atalhos', 'teclado', 'ctrl', 'shortcuts'],
    9: ['memória', 'memory', 'persistente', 'memory.md', 'user', 'feedback', 'project'],
    10: ['contexto', 'context', 'tokens', '/compact', '/clear', 'janela', 'window'],
    11: ['mcp', 'model context protocol', 'servidor', 'server', 'ferramentas externas', 'github', 'postgres'],
    12: ['agent', 'subagente', 'agent tool', 'spawn', 'paralelo'],
    13: ['agent teams', 'subagentes', 'paralelo', 'orquestrador', 'handoff', 'worktree'],
    14: ['plan mode', 'planejamento', 'aprovação', 'exitplanmode', 'revisão'],
    15: ['cli corporativo', 'ci/cd', 'automação', 'pipelines', 'github actions', 'empresa'],
    16: ['ide', 'vs code', 'vscode', 'jetbrains', 'intellij', 'extensão', 'plugin'],
    17: ['modelos', 'models', 'opus', 'sonnet', 'haiku', 'custo', 'velocidade'],
    18: ['api', 'sdk', 'anthropic sdk', 'agent sdk', 'tool use', 'streaming'],
    19: ['boas práticas', 'patterns', 'segurança', 'dicas', 'prompt', 'eficiente'],
    20: ['recursos', 'referências', 'documentação', 'docs', 'vídeos', 'comunidade', 'links'],
    21: ['rtk', 'tokens', 'economia', 'proxy', 'rust', 'otimização', 'savings', 'hook', 'filtro', 'gain'],
  };

  // ============================================================
  // THEME (3-theme: dark / light / terminal)
  // ============================================================
  let currentTheme = 'dark';
  // Track which non-terminal theme was last used
  let lastBaseTheme = 'dark';

  function applyTheme(t) {
    currentTheme = t;
    document.documentElement.className = t;
    localStorage.setItem('cc-theme', t);
    if (t !== 'terminal') {
      lastBaseTheme = t;
      localStorage.setItem('cc-theme-base', t);
    }
  }

  function initTheme() {
    const saved = localStorage.getItem('cc-theme') || 'dark';
    lastBaseTheme = (saved === 'terminal')
      ? (localStorage.getItem('cc-theme-base') || 'dark')
      : saved;
    applyTheme(saved);
  }

  function toggleTheme() {
    if (currentTheme === 'terminal') {
      applyTheme(lastBaseTheme === 'dark' ? 'light' : 'dark');
    } else {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }
  }

  function activateTerminal() {
    if (currentTheme !== 'terminal') applyTheme('terminal');
  }

  // ============================================================
  // PROGRESS
  // ============================================================
  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem('cc-progress') || '{}');
    } catch { return {}; }
  }

  function getCompletedCount() {
    const p = getProgress();
    return Object.values(p).filter(Boolean).length;
  }

  function isCompleted(moduleId) {
    return !!getProgress()[moduleId];
  }

  function markComplete(moduleId) {
    const p = getProgress();
    p[moduleId] = true;
    localStorage.setItem('cc-progress', JSON.stringify(p));
    updateAllProgress();
    updateSidebarDone();
  }

  function toggleComplete(moduleId) {
    const p = getProgress();
    p[moduleId] = !p[moduleId];
    localStorage.setItem('cc-progress', JSON.stringify(p));
    updateAllProgress();
    updateSidebarDone();
    // Update button state
    const btn = document.querySelector('[data-testid="btn-complete"]');
    if (btn) {
      if (p[moduleId]) {
        btn.classList.add('completed');
        btn.innerHTML = '<i class="uil uil-check-circle"></i> Concluído!';
      } else {
        btn.classList.remove('completed');
        btn.innerHTML = '<i class="uil uil-check-circle"></i> Marcar como concluído';
      }
    }
  }

  function updateAllProgress() {
    const count = getCompletedCount();
    const pct = Math.round((count / MODULES.length) * 100);
    // Homepage progress bar
    const bar = document.querySelector('[data-testid="progress-bar"] .progress-fill');
    if (bar) bar.style.width = pct + '%';
    const text = document.querySelector('[data-testid="progress-text"]');
    if (text) text.textContent = pct + '%';
    // Sidebar mini progress
    const sbar = document.getElementById('sidebar-progress-bar');
    if (sbar) sbar.style.width = pct + '%';
    const stxt = document.getElementById('sidebar-progress-text');
    if (stxt) stxt.textContent = count + ' / ' + MODULES.length;
    // Module cards (homepage)
    MODULES.forEach(m => {
      const card = document.querySelector('[data-module-id="' + m.id + '"]');
      if (card) card.classList.toggle('completed', !!getProgress()[m.id]);
    });
  }

  function updateSidebarDone() {
    MODULES.forEach(m => {
      const link = document.querySelector('[data-testid="nav-module-' + m.id + '"]');
      if (link) link.classList.toggle('done', isCompleted(m.id));
    });
  }

  // ============================================================
  // SEARCH
  // ============================================================
  function initSearch() {
    document.querySelectorAll('.search-container').forEach(function(container) {
      var input = container.querySelector('.search-input');
      var results = container.querySelector('.search-results');
      if (!input || !results) return;

      input.addEventListener('input', function() {
        var query = this.value.trim().toLowerCase();
        if (!query) {
          results.style.display = 'none';
          results.innerHTML = '';
          return;
        }
        var matches = MODULES.filter(function(m) {
          var keywords = SEARCH_KEYWORDS[m.id] || [];
          return m.title.toLowerCase().includes(query) ||
            keywords.some(function(k) { return k.toLowerCase().includes(query); });
        });
        if (matches.length === 0) {
          results.style.display = 'none';
          return;
        }
        results.innerHTML = matches.slice(0, 6).map(function(m) {
          return '<a data-testid="search-result-item" href="' + m.path + '" class="search-result-item">' +
            '<span class="result-num">' + String(m.id).padStart(2, '0') + '</span>' +
            '<span class="result-title">' + m.title + '</span>' +
            '</a>';
        }).join('');
        results.style.display = 'block';
      });

      document.addEventListener('click', function(e) {
        if (!input.contains(e.target) && !results.contains(e.target)) {
          results.style.display = 'none';
        }
      });

      input.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          results.style.display = 'none';
          input.value = '';
        }
      });
    });
  }

  // ============================================================
  // CODE COPY BUTTONS
  // ============================================================
  function initCopyButtons() {
    document.querySelectorAll('.code-block-wrapper').forEach(wrapper => {
      const btn = wrapper.querySelector('[data-testid="copy-btn"]');
      const code = wrapper.querySelector('code');
      if (!btn || !code) return;
      if (btn.dataset.copyInit) return; // prevent duplicate listeners
      btn.dataset.copyInit = '1';
      btn.addEventListener('click', function() {
        // Update text immediately (synchronous) so tests can assert right away
        btn.textContent = 'Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copiar';
          btn.classList.remove('copied');
        }, 2000);
        // Also attempt clipboard write
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(code.textContent).catch(() => {});
          } else {
            const ta = document.createElement('textarea');
            ta.value = code.textContent;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
          }
        } catch (e) {}
      });
    });
  }

  // ============================================================
  // SIDEBAR ACTIVE STATE
  // ============================================================
  function initSidebarActive() {
    const currentPath = window.location.pathname;
    MODULES.forEach(m => {
      const link = document.querySelector('[data-testid="nav-module-' + m.id + '"]');
      if (!link) return;
      // Check if current path matches this module
      const isActive = currentPath === m.path ||
        currentPath === m.path.replace(/\/$/, '/index.html') ||
        (m.path.endsWith('/') && currentPath.startsWith(m.path));
      if (isActive) link.classList.add('active');
    });
  }

  // ============================================================
  // COMPLETE BUTTON (module pages)
  // ============================================================
  function initCompleteButton() {
    const btn = document.querySelector('[data-testid="btn-complete"]');
    if (!btn) return;
    // Determine current module ID from URL
    const path = window.location.pathname;
    const mod = MODULES.find(m => path.includes(m.path.replace(/\/$/, '')) ||
      (m.path.endsWith('/') && path + '/' === m.path));
    if (!mod) return;
    // Set initial state
    if (isCompleted(mod.id)) {
      btn.classList.add('completed');
      btn.innerHTML = '<i class="uil uil-check-circle"></i> Concluído!';
    }
    btn.addEventListener('click', () => toggleComplete(mod.id));
  }

  // ============================================================
  // INIT
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initSearch();
    initSidebarActive();
    updateSidebarDone();
    updateAllProgress();
    initCompleteButton();
    initCopyButtons();
    // Also re-init after Prism highlights (doesn't re-add listeners if already added)
    setTimeout(initCopyButtons, 200);

    // Theme toggle (sun/moon button)
    const themeToggleBar = document.getElementById('themeToggleBar');
    if (themeToggleBar) themeToggleBar.addEventListener('click', toggleTheme);

    // Terminal toggle button
    const terminalToggle = document.getElementById('terminalToggle');
    if (terminalToggle) terminalToggle.addEventListener('click', activateTerminal);

    // CLI typing animation for terminal button
    (function typeCliLabel() {
      var el = document.querySelector('.cli-text');
      if (!el) return;
      var word = 'CLI', i = 0, erasing = false;
      function tick() {
        if (!erasing) {
          el.textContent = word.slice(0, i);
          if (i < word.length) { i++; setTimeout(tick, 150); }
          else { erasing = true; setTimeout(tick, 2000); }
        } else {
          i--;
          el.textContent = word.slice(0, i);
          if (i > 0) setTimeout(tick, 100);
          else { erasing = false; setTimeout(tick, 800); }
        }
      }
      tick();
    })();

    // Mobile sidebar toggle with backdrop
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.querySelector('.sidebar');
    if (hamburger && sidebar) {
      // Create backdrop if not exists
      let backdrop = document.querySelector('.sidebar-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'sidebar-backdrop';
        document.body.appendChild(backdrop);
      }
      function openSidebar() {
        sidebar.classList.add('open');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
      function closeSidebar() {
        sidebar.classList.remove('open');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
      hamburger.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
      });
      backdrop.addEventListener('click', closeSidebar);
      // Close sidebar when nav link clicked on mobile
      sidebar.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) closeSidebar();
        });
      });
    }
  });

  // Expose for inline handlers
  window.ccApp = { toggleTheme, activateTerminal, toggleComplete, markComplete };
})();
