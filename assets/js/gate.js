(function() {
  function createGate() {
    var overlay = document.createElement('div');
    overlay.className = 'cc-gate';
    overlay.innerHTML =
      '<div class="cc-gate-box">' +
        '<div class="cc-gate-logo">' +
          '<img src="/assets/img/claudecode.png" alt="Claude Code" width="48" height="48">' +
          '<span>Claude Code<br><small>Course</small></span>' +
        '</div>' +
        '<form class="cc-gate-form" id="cc-gate-form">' +
          '<input type="password" id="cc-gate-pwd" class="cc-gate-input" placeholder="Senha de acesso" autocomplete="current-password" autofocus>' +
          '<button type="submit" class="cc-gate-btn">Entrar</button>' +
          '<p class="cc-gate-error" id="cc-gate-error"></p>' +
        '</form>' +
      '</div>';
    document.body.appendChild(overlay);

    document.getElementById('cc-gate-form').addEventListener('submit', function(e) {
      e.preventDefault();
      var pwd = document.getElementById('cc-gate-pwd').value;
      var err = document.getElementById('cc-gate-error');
      var btn = this.querySelector('button');
      btn.disabled = true;
      btn.textContent = '...';

      fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd })
      })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.ok) {
          window.location.reload();
        } else {
          err.textContent = 'Senha incorreta';
          btn.disabled = false;
          btn.textContent = 'Entrar';
        }
      })
      .catch(function() {
        err.textContent = 'Erro de conexão';
        btn.disabled = false;
        btn.textContent = 'Entrar';
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createGate);
  } else {
    createGate();
  }
})();
