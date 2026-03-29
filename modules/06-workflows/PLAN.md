# PLAN.md — Módulo 6: Workflows de Desenvolvimento
> Documento de planejamento para execução paralela via agent teams.
> Cada agente pode trabalhar independentemente a partir desta spec.
> **Não implementar nada sem ler este documento por completo.**

---

## 1. CONTEXTO DO PROJETO

**Projeto:** Claude Code Course — app educacional em HTML/CSS/JS puro
**Repo:** afialho/claude-code-course
**URL prod:** https://a-five-dusky-49.vercel.app
**Stack:** HTML estático, CSS custom properties, Vanilla JS, Prism.js, Unicons, Mermaid.js
**Versão atual:** v1.8.3 (hardcoded em todos os HTMLs — NÃO alterar durante execução deste módulo)
**Versão após conclusão:** v1.9.0 (bump só quando TODOS os arquivos estiverem prontos)

**Módulos existentes:** 20 módulos em 5 partes (`modules/01-fundacoes/` a `modules/05-avancado/`)
**Novo módulo:** Parte 6 — módulos 21 a 28 em `modules/06-workflows/`

---

## 2. ARQUIVOS A CRIAR

```
modules/06-workflows/
├── index.html           Módulo 21 — Visão Geral dos Workflows
├── 00-fundamentos.html  Módulo 22 — Fundamentos de Qualidade de Software
├── 01-solo.html         Módulo 23 — W1: Claude Code Solo
├── 02-gsd.html          Módulo 24 — W2: Claude Code + GSD
├── 03-cortex.html       Módulo 25 — W3: Claude Code + Cortex
├── 04-feature-dev.html  Módulo 26 — W4: /feature-dev (Anthropic-verified)
├── 05-agentic.html      Módulo 27 — W5: 100% Agentic Pipeline
└── 06-ideal-stack.html  Módulo 28 — W6: O Stack Ideal
```

**Arquivo adicional a atualizar:** `index.html` (raiz do projeto) — adicionar card da Parte 6 no grid

**Arquivos a atualizar (navegação):** todos os 20 HTMLs existentes precisam do novo bloco `nav-part` da Parte 6

---

## 3. TEMPLATE HTML BASE

Todo arquivo novo deve seguir exatamente este esqueleto. Não inventar estrutura nova.

```html
<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[TITULO_MODULO] — Claude Code Course</title>
  <link rel="stylesheet" href="/assets/css/base.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <link rel="stylesheet" href="/assets/css/modules.css">
  <link rel="stylesheet" href="/assets/css/prism.css">
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css">
  <link rel="stylesheet" href="/assets/css/additional.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* Mermaid container styling */
    .mermaid-wrapper {
      background: var(--surface-2, #1a1a2e);
      border: 1px solid var(--border, #2a2a3e);
      border-radius: 8px;
      padding: 1.5rem;
      margin: 1.5rem 0;
      overflow-x: auto;
    }
    .mermaid-wrapper .mermaid { display: flex; justify-content: center; }
    .mermaid svg { max-width: 100%; height: auto; }
    .diagram-caption {
      text-align: center;
      font-size: 0.8rem;
      color: var(--text-muted, #888);
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>
  <aside data-testid="sidebar" class="sidebar">
    <div class="sidebar-logo">
      <a href="/" class="logo-link">
        <span class="logo-icon"><i class="uil uil-bolt-alt"></i></span>
        <span class="logo-text">Claude Code<br><small>Course</small></span>
      </a>
      <div class="progress-mini"><div class="progress-mini-bar" id="sidebar-progress-bar"></div></div>
      <span class="progress-mini-text" id="sidebar-progress-text">0 / 28</span>
    </div>
    <nav class="sidebar-nav">

      <div class="nav-part"><span class="nav-part-label">PARTE 1 — FUNDAÇÕES</span>
        <a data-testid="nav-module-1" href="/modules/01-fundacoes/" class="nav-link"><span class="nav-num">01</span><span class="nav-title">O que é Claude Code</span></a>
        <a data-testid="nav-module-2" href="/modules/01-fundacoes/02-cli.html" class="nav-link"><span class="nav-num">02</span><span class="nav-title">CLI Completo</span></a>
        <a data-testid="nav-module-3" href="/modules/01-fundacoes/claude-md.html" class="nav-link"><span class="nav-num">03</span><span class="nav-title">CLAUDE.md</span></a>
      </div>

      <div class="nav-part"><span class="nav-part-label">PARTE 2 — CONFIGURAÇÃO</span>
        <a data-testid="nav-module-4" href="/modules/02-config/tools.html" class="nav-link"><span class="nav-num">04</span><span class="nav-title">Ferramentas (Tools)</span></a>
        <a data-testid="nav-module-5" href="/modules/02-config/settings.html" class="nav-link"><span class="nav-num">05</span><span class="nav-title">Settings & Permissões</span></a>
        <a data-testid="nav-module-6" href="/modules/02-config/skills.html" class="nav-link"><span class="nav-num">06</span><span class="nav-title">Skills (Slash Commands)</span></a>
        <a data-testid="nav-module-7" href="/modules/02-config/hooks.html" class="nav-link"><span class="nav-num">07</span><span class="nav-title">Hooks</span></a>
        <a data-testid="nav-module-8" href="/modules/02-config/keybindings.html" class="nav-link"><span class="nav-num">08</span><span class="nav-title">Keybindings</span></a>
      </div>

      <div class="nav-part"><span class="nav-part-label">PARTE 3 — MEMÓRIA & CONTEXTO</span>
        <a data-testid="nav-module-9" href="/modules/03-memoria-contexto/memory.html" class="nav-link"><span class="nav-num">09</span><span class="nav-title">Sistema de Memória</span></a>
        <a data-testid="nav-module-10" href="/modules/03-memoria-contexto/context.html" class="nav-link"><span class="nav-num">10</span><span class="nav-title">Gestão de Contexto</span></a>
        <a data-testid="nav-module-11" href="/modules/03-memoria-contexto/mcp.html" class="nav-link"><span class="nav-num">11</span><span class="nav-title">MCP Servers</span></a>
      </div>

      <div class="nav-part"><span class="nav-part-label">PARTE 4 — AGENTES</span>
        <a data-testid="nav-module-12" href="/modules/04-agentes/agent-tool.html" class="nav-link"><span class="nav-num">12</span><span class="nav-title">Agent Tool</span></a>
        <a data-testid="nav-module-13" href="/modules/04-agentes/subagents.html" class="nav-link"><span class="nav-num">13</span><span class="nav-title">Subagentes & Agent Teams</span></a>
        <a data-testid="nav-module-14" href="/modules/04-agentes/plan-mode.html" class="nav-link"><span class="nav-num">14</span><span class="nav-title">Plan Mode</span></a>
      </div>

      <div class="nav-part"><span class="nav-part-label">PARTE 5 — AVANÇADO</span>
        <a data-testid="nav-module-15" href="/modules/05-avancado/cli-corporate.html" class="nav-link"><span class="nav-num">15</span><span class="nav-title">CLI Corporativo</span></a>
        <a data-testid="nav-module-16" href="/modules/05-avancado/ide.html" class="nav-link"><span class="nav-num">16</span><span class="nav-title">IDE Integration</span></a>
        <a data-testid="nav-module-17" href="/modules/05-avancado/models.html" class="nav-link"><span class="nav-num">17</span><span class="nav-title">Seleção de Modelos</span></a>
        <a data-testid="nav-module-18" href="/modules/05-avancado/api-sdk.html" class="nav-link"><span class="nav-num">18</span><span class="nav-title">Claude API & Agent SDK</span></a>
        <a data-testid="nav-module-19" href="/modules/05-avancado/best-practices.html" class="nav-link"><span class="nav-num">19</span><span class="nav-title">Boas Práticas</span></a>
        <a data-testid="nav-module-20" href="/modules/05-avancado/resources.html" class="nav-link"><span class="nav-num">20</span><span class="nav-title">Recursos & Referências</span></a>
      </div>

      <div class="nav-part"><span class="nav-part-label">PARTE 6 — WORKFLOWS</span>
        <a data-testid="nav-module-21" href="/modules/06-workflows/" class="nav-link"><span class="nav-num">21</span><span class="nav-title">Visão Geral</span></a>
        <a data-testid="nav-module-22" href="/modules/06-workflows/00-fundamentos.html" class="nav-link"><span class="nav-num">22</span><span class="nav-title">Fundamentos de Qualidade</span></a>
        <a data-testid="nav-module-23" href="/modules/06-workflows/01-solo.html" class="nav-link"><span class="nav-num">23</span><span class="nav-title">W1: Claude Code Solo</span></a>
        <a data-testid="nav-module-24" href="/modules/06-workflows/02-gsd.html" class="nav-link"><span class="nav-num">24</span><span class="nav-title">W2: GSD</span></a>
        <a data-testid="nav-module-25" href="/modules/06-workflows/03-cortex.html" class="nav-link"><span class="nav-num">25</span><span class="nav-title">W3: Cortex</span></a>
        <a data-testid="nav-module-26" href="/modules/06-workflows/04-feature-dev.html" class="nav-link"><span class="nav-num">26</span><span class="nav-title">W4: Feature Dev</span></a>
        <a data-testid="nav-module-27" href="/modules/06-workflows/05-agentic.html" class="nav-link"><span class="nav-num">27</span><span class="nav-title">W5: 100% Agentic</span></a>
        <a data-testid="nav-module-28" href="/modules/06-workflows/06-ideal-stack.html" class="nav-link"><span class="nav-num">28</span><span class="nav-title">W6: Stack Ideal</span></a>
      </div>

    </nav>
    <div class="sidebar-version"><i class="uil uil-tag-alt"></i><span>v1.8.3</span></div>
  </aside>

  <div class="main-content">
    <header class="mobile-header">
      <button id="hamburger" class="hamburger"><i class="uil uil-bars"></i></button>
      <span class="mobile-title">[TITULO_CURTO]</span>
      <button data-testid="theme-toggle" class="theme-toggle"><i class="uil uil-moon"></i></button>
    </header>
    <div class="topbar">
      <nav data-testid="breadcrumb" class="breadcrumb">
        <a href="/">Início</a> › <span>Parte 6</span> › <span>[TITULO_CURTO]</span>
      </nav>
      <div class="topbar-right">
        <div class="search-container">
          <input data-testid="search-input" type="text" class="search-input" placeholder="Buscar...">
          <div data-testid="search-results" class="search-results"></div>
        </div>
        <button data-testid="theme-toggle" class="theme-toggle desktop-only"><i class="uil uil-moon"></i></button>
      </div>
    </div>

    <article class="module-body">

      <div class="module-header">
        <div class="module-number">Módulo [N]</div>
        <h1 class="module-title">[TITULO_COMPLETO]</h1>
        <p class="module-description">[DESCRICAO_MODULO]</p>
      </div>

      <!-- CONTEÚDO AQUI — ver spec de cada módulo abaixo -->

    </article>
  </div>

  <script src="/assets/js/app.js"></script>
  <script src="/assets/js/prism.js"></script>
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#6366f1',
        primaryTextColor: '#e2e8f0',
        primaryBorderColor: '#4f46e5',
        lineColor: '#64748b',
        secondaryColor: '#1e293b',
        tertiaryColor: '#0f172a',
        background: '#0f172a',
        mainBkg: '#1e293b',
        nodeBorder: '#4f46e5',
        clusterBkg: '#1e293b',
        titleColor: '#e2e8f0',
        edgeLabelBackground: '#1e293b'
      }
    });
  </script>
</body>
</html>
```

### Regras do template
- O link `active` na nav deve ser o item correspondente ao módulo atual (adicionar `class="nav-link active"`)
- `[TITULO_MODULO]` = título completo para `<title>`
- `[TITULO_CURTO]` = título curto para mobile header e breadcrumb
- `[N]` = número do módulo (21–28)
- Mermaid usa `import` ES module do CDN jsdelivr — não usar tag `<script src>` síncrona
- Não usar emojis em nenhum lugar — apenas ícones Unicons `uil-*` (outlined)

### Componentes disponíveis (CSS existente)

```html
<!-- Callout informativo -->
<div class="callout callout-info">
  <i class="uil uil-info-circle"></i>
  <div><strong>Label:</strong> Texto do callout.</div>
</div>

<!-- Callout aviso -->
<div class="callout callout-warning">
  <i class="uil uil-exclamation-triangle"></i>
  <div><strong>Label:</strong> Texto do callout.</div>
</div>

<!-- Callout sucesso -->
<div class="callout callout-success">
  <i class="uil uil-check-circle"></i>
  <div><strong>Label:</strong> Texto do callout.</div>
</div>

<!-- Callout erro/perigo -->
<div class="callout callout-error">
  <i class="uil uil-times-circle"></i>
  <div><strong>Label:</strong> Texto do callout.</div>
</div>

<!-- Bloco de código com botão copiar -->
<div class="code-block-wrapper">
  <pre><code class="language-bash">comando aqui</code></pre>
  <button data-testid="copy-btn" class="copy-btn">Copiar</button>
</div>

<!-- Diagrama Mermaid -->
<div class="mermaid-wrapper">
  <div class="mermaid">
flowchart TD
    A[Início] --> B{Decisão}
    B -->|Sim| C[Executar]
    B -->|Não| D[Pular]
  </div>
  <p class="diagram-caption">Legenda do diagrama</p>
</div>

<!-- Seção de conteúdo -->
<section class="content-section">
  <h2><i class="uil uil-ICONE"></i> Título da Seção</h2>
  <p>Texto introdutório.</p>
  <!-- conteúdo -->
</section>
```

---

## 4. CROSS-CUTTING CONCERNS (presentes em TODOS os workflows)

Cada workflow (módulos 23–28) deve demonstrar como aplica todos estes:

### 4.1 Clean Code + SOLID
- **S** — Single Responsibility: uma função, uma razão para mudar
- **O** — Open/Closed: aberto para extensão, fechado para modificação
- **L** — Liskov Substitution: subtipos substituem seus tipos base
- **I** — Interface Segregation: interfaces pequenas e específicas
- **D** — Dependency Inversion: dependa de abstrações, não implementações
- Como mostrar: CLAUDE.md configurado com diretivas de clean code; code-reviewer auditando

### 4.2 Arquitetura Hexagonal (Ports & Adapters)
```
┌─────────────────────────────────────────┐
│               ADAPTERS                  │
│  ┌─────────┐  ┌──────────────────────┐  │
│  │  HTTP   │  │   Database Adapter   │  │
│  │ Adapter │  │  (Postgres/Redis)    │  │
│  └────┬────┘  └──────────┬───────────┘  │
│       │                  │              │
│  ┌────▼──────────────────▼───────────┐  │
│  │          PORTS (Interfaces)        │  │
│  │  UserRepository  OrderService      │  │
│  └────────────────┬───────────────────┘  │
│                   │                      │
│  ┌────────────────▼───────────────────┐  │
│  │         DOMAIN CORE                │  │
│  │  Entities  Use Cases  Value Objs   │  │
│  └────────────────────────────────────┘  │
└─────────────────────────────────────────┘
```
- Domain core sem dependências externas
- Testes de domínio: sem mocks de infra
- Sequência de implementação: domain first → ports → adapters

### 4.3 TDD — Red → Green → Refactor
```
RED:     escreve teste que falha → npm test (deve falhar)
GREEN:   implementa mínimo para passar → npm test (deve passar)
REFACTOR: limpa sem quebrar → npm test (ainda deve passar)
```
- Agente recebe instrução: "escreve o teste ANTES da implementação"
- Nunca implementar sem teste existente

### 4.4 Pirâmide de Testes
```
              /\
             /E2E\         ← Cypress: jornadas críticas do usuário
            /──────\
           / Integr \      ← Jest/Vitest: DB real, sem mocks
          /──────────\
         / Unit Tests \    ← Jest/Vitest: domínio isolado, < 500ms
        /______________\
       /  Static Anal. \   ← ESLint, TypeScript strict
      /________________\
```
- **Unit:** `jest --testPathPattern='*.unit.test'`
- **Integration:** containers reais, `jest --testPathPattern='*.integration.test'`
- **E2E:** `npx cypress run --headless`
- **Load:** `k6 run k6/load.js` — baseline de throughput
- **Stress:** `k6 run k6/stress.js` — ponto de ruptura

### 4.5 OWASP Top 10 (2021)
Cada workflow deve mostrar onde e como cada item é mitigado:

| # | Vulnerabilidade | Gate no workflow |
|---|---|---|
| A01 | Broken Access Control | code-reviewer + testes de autorização |
| A02 | Cryptographic Failures | Security agent audita secrets/crypto |
| A03 | Injection (SQL, NoSQL, Command) | Parâmetros sempre, nunca string concatenation |
| A04 | Insecure Design | Hexagonal arch + revisão de threat model |
| A05 | Security Misconfiguration | Checklist de configuração de produção |
| A06 | Vulnerable Components | `npm audit` como gate obrigatório |
| A07 | Auth & Session Failures | Revisão de fluxo de autenticação |
| A08 | Integrity Failures | Verificação de integridade de dependências |
| A09 | Logging & Monitoring Failures | Checklist de observabilidade |
| A10 | SSRF | Validação de URLs e requests de saída |

### 4.6 Context Window Discipline (max 100K tokens)
- Orquestrador: máximo 80K tokens ativos
- Cada subagente spawned: máximo 60K tokens de contexto inicial
- `/compact` obrigatório entre fases pesadas
- Handoffs via arquivos (PLAN.md, CONTEXT.md, ADR.md) — nunca in-memory
- Agentes destruídos após tarefa; estado persiste em arquivos

### 4.7 Frontend Design
- **Componentes:** shadcn/ui (base)
- **Ícones:** Lucide (outlined, consistente) — `import { IconName } from 'lucide-react'`
- **Tipografia:** Geist Sans (UI) / Geist Mono (código, métricas, IDs, timestamps)
- **Paleta:** zinc/neutral/slate — um accent color, sem rainbow, sem glassmorphism excessivo
- **Dark mode padrão** para apps de desenvolvimento e dashboards
- **skill:** `frontend-design` para gerar specs visuais antes de implementar

---

## 5. SPEC DETALHADA POR MÓDULO

### MÓDULO 21 — index.html (Visão Geral)

**Arquivo:** `modules/06-workflows/index.html`
**Módulo:** 21 | **Active nav:** `nav-module-21`
**Título:** Workflows de Desenvolvimento
**Descrição:** Seis abordagens para desenvolver software de alta qualidade com Claude Code — do dev solo ao pipeline 100% autônomo. Cada workflow incorpora Clean Code, TDD, arquitetura hexagonal, testes completos e segurança OWASP.

**Conteúdo:**

1. **Seção: Por que workflows importam**
   - Diferença entre "pedir para o Claude escrever código" vs. "orquestrar um workflow de desenvolvimento"
   - O workflow é quem garante qualidade — não o modelo
   - Callout info: "O melhor modelo com um workflow ruim produz código ruim. O pior modelo com um workflow excelente produz código defensável."

2. **Seção: Os seis workflows**
   - Cards ou tabela visual descrevendo cada um rapidamente
   - Não entrar em detalhes (cada um tem sua própria aula)

3. **Seção: Tabela comparativa**
   Tabela completa com todos os 6 workflows vs. dimensões:

   | Dimensão | W1 Solo | W2 GSD | W3 Cortex | W4 Feature Dev | W5 Agentic | W6 Ideal |
   |---|---|---|---|---|---|---|
   | Instalação | nenhuma | GSD skill | `brew install cx` | plugin install | nenhuma | GSD + skills |
   | Overhead | mínimo | médio | médio | baixo | alto setup | alto |
   | Paralelismo | nenhum | waves | 3 agentes | 3 agentes | N agentes | multi-wave |
   | Memória cross-session | manual | GSD memory | Cortex semantic | nenhum | arquivos | híbrido |
   | PM envolvido | não | sim (discuss) | não | não | não | sim |
   | TDD enforçado | manual | via execute | via /implement | via reviewer | via test agent | hard gate |
   | OWASP gate | manual | security phase | memory + review | code-reviewer | security agent | CI gate |
   | Ideal para | solo/rapido | times/milestones | memória org. | feature única | CI autônomo | prod-grade |
   | Intervenção humana | total | gates | gates | gates | zero | gates mínimos |

4. **Seção: Árvore de decisão**
   Diagrama Mermaid de decisão:
   ```
   flowchart TD
     A[Nova feature/bug] --> B{Projeto solo?}
     B -->|Sim| C{Precisa de estrutura?}
     C -->|Não| W1[W1: Claude Code Solo]
     C -->|Sim| W4[W4: Feature Dev]
     B -->|Não, time| D{Tem milestones/roadmap?}
     D -->|Sim| W2[W2: GSD]
     D -->|Não| E{Precisa de memória org.?}
     E -->|Sim| W3[W3: Cortex]
     E -->|Não| F{100% autônomo?}
     F -->|Sim| W5[W5: Agentic Pipeline]
     F -->|Não - máxima qualidade| W6[W6: Stack Ideal]
   ```

5. **Seção: Fundamentos transversais**
   - Callout info apontando para Módulo 22
   - Lista dos 7 fundamentos com link âncora para módulo 22

6. **Seção: Como usar este módulo**
   - Leia os fundamentos primeiro (Módulo 22)
   - Escolha seu workflow pela tabela comparativa
   - Todo workflow já inclui TDD, OWASP, testes e arquitetura hexagonal

---

### MÓDULO 22 — 00-fundamentos.html

**Arquivo:** `modules/06-workflows/00-fundamentos.html`
**Módulo:** 22 | **Active nav:** `nav-module-22`
**Título:** Fundamentos de Qualidade de Software
**Descrição:** O glossário de referência para todos os workflows. Clean Code, SOLID, arquitetura hexagonal, TDD, pirâmide de testes, OWASP Top 10 e disciplina de janela de contexto.

**Conteúdo:**

1. **Seção: Clean Code + SOLID**
   - Explicação de cada princípio com exemplo TypeScript
   - Exemplo ruim vs. bom para cada princípio
   - Como configurar no CLAUDE.md: diretiva explícita de SOLID
   ```markdown
   # CLAUDE.md — diretivas de qualidade
   - Siga SOLID rigorosamente. SRP em particular: uma função = uma responsabilidade
   - Nunca use nomes como data, info, result, temp, x, y
   - Funções com mais de 20 linhas provavelmente violam SRP
   - Se vai copiar código, prefira extrair uma função
   ```

2. **Seção: Arquitetura Hexagonal**
   - Diagrama Mermaid da arquitetura
   - Regra de ouro: "o domain core não importa nada de infra"
   - Sequência de implementação: domain → ports → adapters
   - Exemplo de estrutura de pastas:
   ```
   src/
     domain/          ← entidades, use cases, value objects
       entities/
       use-cases/
       value-objects/
     ports/           ← interfaces (contratos)
       repositories/
       services/
     adapters/        ← implementações concretas
       http/
       database/
       external/
   ```
   - Testes de domínio: sem mocks, sem infra
   - Testes de adapter: com infra real (testcontainers)

3. **Seção: TDD**
   - Ciclo Red → Green → Refactor com diagrama Mermaid
   - Exemplo completo em TypeScript:
     1. Escreve o teste (falha)
     2. Implementa o mínimo (passa)
     3. Refatora (ainda passa)
   - Como instruir o Claude: "escreva o teste ANTES de qualquer implementação"
   - Configuração Jest/Vitest básica
   - Callout warning: "TDD não é sobre coverage. É sobre design. O teste força você a pensar na interface antes da implementação."

4. **Seção: Pirâmide de Testes**
   - Diagrama Mermaid da pirâmide com camadas
   - **Unit Tests (Jest/Vitest)**
     - `npm install -D vitest @vitest/coverage-v8`
     - `vitest.config.ts` básico
     - Cobertura mínima: 80% domain core, 100% use cases críticos
   - **Integration Tests**
     - Docker + testcontainers para banco real
     - `npm install -D @testcontainers/postgresql`
     - Nunca mockar banco em integration tests (aprende-se com falhas reais)
   - **E2E com Cypress**
     - `npm install -D cypress`
     - `cypress.config.ts` básico
     - `npx cypress run --headless` para CI
     - Foco em jornadas críticas, não 100% da UI
   - **Load Tests com k6**
     - Instalação: `brew install k6`
     - Script de load básico (`k6/load.js`)
     - Script de stress básico (`k6/stress.js`)
     - Métricas a monitorar: p95 latência, error rate, throughput
   - **Tabela de quando usar cada nível**

5. **Seção: OWASP Top 10**
   - Para cada item: o que é, como mitigar, como o Claude Code ajuda
   - Tabela completa A01–A10 com mitigação e gate no workflow
   - Callout warning: `npm audit` deve ser gate obrigatório em todo CI
   - Como configurar security review no CLAUDE.md:
   ```markdown
   # CLAUDE.md — segurança
   - Sempre use parameterized queries. Nunca concatene SQL.
   - Nunca commite secrets. Use variáveis de ambiente.
   - Valide TODA entrada do usuário na borda (sem trusts implícitos).
   - npm audit deve passar sem vulnerabilidades high/critical.
   ```

6. **Seção: Context Window Discipline**
   - Diagrama Mermaid mostrando como o contexto cresce e quando /compact
   - Regras:
     - Orquestrador: máximo 80K tokens
     - Subagente: contexto inicial máximo 60K tokens
     - `/compact` obrigatório ao cruzar 70K tokens
     - Handoffs via arquivos, nunca in-memory
   - Calculadora rápida: "1K tokens ≈ 750 palavras ≈ 50 linhas de código"
   - Como monitorar: `/usage` no Claude Code

7. **Seção: Frontend Design Standards**
   - shadcn/ui: por que usar, como instalar, componentes principais
   - Lucide (outlined): import pattern, consistency
   - Geist fonts: quando usar Sans vs Mono
   - Dark mode por padrão para apps dev
   - `skill: frontend-design` — quando invocar antes de implementar

---

### MÓDULO 23 — 01-solo.html

**Arquivo:** `modules/06-workflows/01-solo.html`
**Módulo:** 23 | **Active nav:** `nav-module-23`
**Título:** W1: Claude Code Solo
**Descrição:** O workflow mais direto. Sem plugins, sem instalações adicionais. O desenvolvedor e o Claude Code como único par — com toda a disciplina de qualidade aplicada manualmente.

**Conteúdo:**

1. **Seção: Quando usar**
   - Fit: dev solo, projeto pessoal, prototipagem, feature simples
   - Misfit: time grande, múltiplos milestones, precisa de memória cross-session
   - Callout info: "Solo não significa sem qualidade. Significa que você é o único orquestrador."

2. **Seção: Diagrama do workflow**
   Diagrama Mermaid flowchart:
   ```
   flowchart TD
     A[Dev descreve feature/bug] --> B[Claude lê codebase\nMapeia impacto]
     B --> C[PLAN.md — proposta de plano]
     C --> D{Dev revisa plano}
     D -->|Ajusta| C
     D -->|Aprova| E[TDD Loop]
     E --> E1[Red: escreve teste]
     E1 --> E2[Green: implementa mínimo]
     E2 --> E3[Refactor: limpa]
     E3 --> E4{> 70K tokens?}
     E4 -->|Sim| E5[/compact]
     E5 --> E
     E4 -->|Não| F[Auto-review]
     F --> F1[Clean Code + SOLID]
     F1 --> F2[OWASP scan]
     F2 --> G[Testing Gate]
     G --> G1[vitest unit]
     G1 --> G2[vitest integration]
     G2 --> G3[cypress run]
     G3 --> G4{k6 load?}
     G4 -->|Mudança de API| G5[k6 run]
     G4 -->|Não necessário| H
     G5 --> H[gh pr create]
     H --> I[Deploy / Merge]
   ```

3. **Seção: Passo a passo**
   Cada fase com comandos reais:
   - Fase 1: Discovery
   - Fase 2: Planning (como criar PLAN.md manualmente)
   - Fase 3: TDD loop
   - Fase 4: Auto-review (instruções para o Claude)
   - Fase 5: Testing Gate (comandos reais: vitest, cypress, k6)
   - Fase 6: Deploy

4. **Seção: CLAUDE.md mínimo para W1**
   CLAUDE.md de referência com:
   - Diretivas SOLID
   - Diretivas de segurança (OWASP)
   - Diretivas de TDD
   - Diretivas de arquitetura hexagonal

5. **Seção: Como aplicar TDD neste workflow**
   - Instrução exata para o Claude: texto literal de prompt/diretiva
   - Exemplo concreto: feature "Adicionar JWT authentication"
     1. Claude escreve `auth.unit.test.ts` (falha)
     2. Claude implementa `auth.domain.ts` (passa)
     3. Claude refatora para SOLID (ainda passa)

6. **Seção: Context window discipline**
   - Quando fazer /compact (> 70K tokens, entre fases grandes)
   - Como criar CONTEXT.md de handoff
   - Template de CONTEXT.md

7. **Seção: Armadilhas**
   - Pedir implementação sem contexto do codebase → solução
   - Não fazer /compact → solução
   - Não escrever testes antes → solução
   - Callout warning para cada uma

---

### MÓDULO 24 — 02-gsd.html

**Arquivo:** `modules/06-workflows/02-gsd.html`
**Módulo:** 24 | **Active nav:** `nav-module-24`
**Título:** W2: Claude Code + GSD
**Descrição:** Get Shit Done — o framework de desenvolvimento estruturado para times. Fases definidas, milestones rastreados, PM integrado nos gates, e testes como cidadão de primeira classe.

**Conteúdo:**

1. **Seção: O que é GSD**
   - Plugin de skills para Claude Code
   - Instalação: `/plugin marketplace add gsd`
   - Filosofia: estrutura a execução, não tolhe a criatividade
   - Quando usar vs. não usar

2. **Seção: Diagrama do workflow**
   Diagrama Mermaid com fases GSD:
   ```
   flowchart TD
     PM[PM escreve PRD\nCritérios de aceite] --> A[/gsd:new-project]
     A --> B[Roadmap com fases]
     B --> C[/gsd:discuss-phase]
     C --> C1[Claude entrevista Dev + PM]
     C1 --> C2[Assumptions, gaps, riscos]
     C2 --> D[/gsd:plan-phase]
     D --> D1[RESEARCH.md]
     D1 --> D2[PLAN.md — tasks atômicas]
     D2 --> E{Frontend?}
     E -->|Sim| F[/gsd:ui-phase → UI-SPEC.md]
     E -->|Não| G
     F --> G[/gsd:execute-phase]
     G --> G1[Wave: implement]
     G1 --> G2[Wave: TDD tests]
     G2 --> G3[Wave: verify]
     G3 --> G4{> 70K tokens?}
     G4 -->|Sim| G5[/compact]
     G5 --> G1
     G4 -->|Não| H[/gsd:verify-work]
     H --> I[Testing Gate]
     I --> I1[vitest unit + integration]
     I1 --> I2[cypress run]
     I2 --> I3[k6 load + stress]
     I3 --> J[PM review no preview URL]
     J --> K{Aprovado?}
     K -->|Não| L[Novo ciclo com feedback]
     L --> C
     K -->|Sim| M[/gsd:ship → PR → merge → deploy]
   ```

3. **Seção: Comandos GSD mapeados para cada fase**
   - `new-project`, `discuss-phase`, `plan-phase`, `ui-phase`, `execute-phase`, `verify-work`, `ship`
   - Para cada comando: o que faz, output esperado, quando usar

4. **Seção: Integração com PM**
   - Onde o PM entra: discuss-phase (critérios), ui-phase (aprovação de spec), review final (preview URL)
   - O que o PM precisa ter documentado antes de iniciar
   - Template de PRD mínimo

5. **Seção: Testing dentro do GSD**
   - Como o execute-phase naturalmente incorpora TDD
   - Onde configurar os gates de teste
   - Como instruir o GSD executor para respeitar a pirâmide

6. **Seção: OWASP no GSD**
   - Security como fase explícita vs. transversal
   - CLAUDE.md do projeto com regras OWASP
   - `npm audit` como gate no execute-phase

7. **Seção: Context Window no GSD**
   - GSD já tem /compact built-in entre waves
   - Como o GSD gerencia o contexto do executor
   - Quando intervir manualmente

8. **Seção: Exemplo concreto**
   Feature: "Sistema de notificações em tempo real"
   - PRD mínimo
   - discuss-phase output
   - plan-phase output (tasks exemplo)
   - execute-phase com TDD
   - verify-work resultado
   - PM approval

---

### MÓDULO 25 — 03-cortex.html

**Arquivo:** `modules/06-workflows/03-cortex.html`
**Módulo:** 25 | **Active nav:** `nav-module-25`
**Título:** W3: Claude Code + Cortex
**Descrição:** O cérebro de desenvolvimento. Cortex adiciona memória semântica cross-session, task management integrado, LSP-powered code navigation e um pipeline 3-agentes automático — tudo gerenciado pelo Claude Code via 65+ MCP tools.

**Conteúdo:**

1. **Seção: O que é Cortex**
   - Criado por: jsvitolo (GitHub: jsvitolo/cortex-releases)
   - CLI (`cx`) + MCP server + plugin de skills para Claude Code
   - Quando usar vs. não usar
   - Nota sobre MCP: Cortex usa MCP como camada de integração, mas o workflow acontece naturalmente no Claude Code

2. **Seção: Instalação**
   ```bash
   # macOS/Linux via Homebrew
   brew tap jsvitolo/tap && brew install cx

   # Inicializar no projeto
   cd meu-projeto
   cx init

   # Instalar plugin no Claude Code (dentro de uma sessão)
   /plugin marketplace add jsvitolo/cortex-plugins
   /plugin install cortex@cortex-plugins

   # Configurar OpenAI key (opcional — para memória semântica)
   export OPENAI_API_KEY=sk-...

   # Abrir dashboard visual
   cx ui
   ```

3. **Seção: Diagrama do workflow**
   Diagrama Mermaid com o fluxo Cortex:
   ```
   flowchart TD
     A[Dev descreve task] --> B[mcp: cortex status]
     B --> B1{Existe task similar\nna memória?}
     B1 -->|Sim| B2[Recupera contexto\nsemântico]
     B1 -->|Não| C
     B2 --> C[/cortex:brainstorm ou\n/cortex:plan]
     C --> D[mcp: task create CX-N]
     D --> E[/cortex:implement CX-N]
     E --> E1[research agent:\nlê codebase + memória]
     E1 --> E2[implement agent:\nTDD-first]
     E2 --> E3[verify agent:\ntestes + review]
     E3 --> F{Passou?}
     F -->|Não| G[Debug loop]
     G --> E2
     F -->|Sim| H[mcp: task update done]
     H --> I[/cortex:pr]
     I --> J[/cortex:merge]
     J --> K[/cortex:session-end\nCaptura aprendizados]
   ```

4. **Seção: Os 3 agentes do /implement**
   - **research agent:** lê codebase, busca memória semântica, entende padrões existentes
   - **implement agent:** TDD-first, respeita patterns encontrados pelo research
   - **verify agent:** testes, code review, OWASP scan
   - Context window: cada agente tem contexto isolado (< 60K tokens)

5. **Seção: Memória semântica**
   - Como funciona: FTS5 + HNSW vectors
   - O que salvar: decisões arquiteturais, padrões do time, incidentes de segurança
   - Como acessar: `mcp__cortex__memory(action="list", search="termo")`
   - Como salvar: `mcp__cortex__memory(action="save", type="diary", ...)`
   - Valor prático: "Claude não repete perguntas que já foram respondidas nas últimas sessões"

6. **Seção: Task lifecycle**
   - CX-N: backlog → progress → review → done
   - Comandos MCP para cada transição
   - Dashboard `cx ui`: visualizar kanban

7. **Seção: TDD + OWASP no Cortex**
   - Como o verify agent aplica TDD check
   - Como salvar incidentes OWASP na memória para evitar reincidência
   - CLAUDE.md rules geradas pelo `cx init` incluem segurança

8. **Seção: Armadilhas**
   - Memória stale (decisões desatualizadas) — como gerenciar
   - Overhead de setup (não vale para projetos de 1 semana)
   - Conflito com GSD (podem coexistir, mas com papéis claros)

---

### MÓDULO 26 — 04-feature-dev.html

**Arquivo:** `modules/06-workflows/04-feature-dev.html`
**Módulo:** 26 | **Active nav:** `nav-module-26`
**Título:** W4: Feature Dev
**Descrição:** O plugin oficial da Anthropic para desenvolvimento de features. Sete fases guiadas com três agentes especializados — projetado para prevenir o erro mais comum: implementar antes de entender.

**Conteúdo:**

1. **Seção: O que é Feature Dev**
   - Plugin Anthropic-verified, 143K+ instalações
   - Comando único: `/feature-dev [descrição]`
   - Filosofia: entender o codebase ANTES de propor qualquer implementação
   - Instalação:
   ```bash
   # Via Claude Code marketplace
   /plugin install feature-dev
   # ou
   claude plugins install feature-dev
   ```

2. **Seção: Os 3 agentes especializados**
   - **code-explorer:** mapeia arquitetura existente, traça caminhos de execução
   - **code-architect:** propõe estratégias de implementação com trade-offs documentados
   - **code-reviewer:** identifica bugs, vulnerabilidades de segurança, violações de convenção (com confidence scores)

3. **Seção: As 7 fases**
   Diagrama Mermaid das fases:
   ```
   flowchart LR
     F1[1. Discovery] --> F2[2. Codebase\nExploration]
     F2 --> F3[3. Clarifying\nQuestions]
     F3 --> F4[4. Architecture\nDesign]
     F4 --> F5[5. Implementation]
     F5 --> F6[6. Quality\nReview]
     F6 --> F7[7. Final\nSummary]
     style F1 fill:#1e293b
     style F2 fill:#1e293b
     style F3 fill:#1e293b
     style F4 fill:#1e293b
     style F5 fill:#1e293b
     style F6 fill:#1e293b
     style F7 fill:#1e293b
   ```
   Para cada fase: o que acontece, quem é responsável, output esperado

4. **Seção: Fase por fase em detalhe**
   - **Fase 1 — Discovery:** entende o objetivo, quem são os usuários, qual problema resolve
   - **Fase 2 — Codebase Exploration (code-explorer):** lê o código existente, mapeia padrões, detecta convenções
   - **Fase 3 — Clarifying Questions:** pergunta o que falta antes de propor qualquer solução
   - **Fase 4 — Architecture Design (code-architect):** propõe 2-3 abordagens com trade-offs
   - **Fase 5 — Implementation:** executa TDD-first, respeitando padrões do codebase
   - **Fase 6 — Quality Review (code-reviewer):** confidence-scored assessment de bugs, segurança, convenções
   - **Fase 7 — Final Summary:** o que foi feito, o que mudou, o que testar

5. **Seção: Aplicando TDD na Fase 5**
   - O Feature Dev não força TDD por padrão — você precisa instruir
   - Como instruir: adicionar no CLAUDE.md do projeto ou no prompt inicial
   - Exemplo de prompt: `/feature-dev Adicionar rate limiting — aplique TDD, escreva testes antes da implementação`

6. **Seção: OWASP na Fase 6**
   - code-reviewer inclui security assessment
   - Como garantir cobertura OWASP completa: prompt adicional para o reviewer
   - Confidence scores: o que são, como interpretar (> 0.8 = bloqueante)

7. **Seção: Pirâmide de testes pós-implementação**
   - Feature Dev implementa — mas o dev roda os testes
   - Sequência após Fase 7:
   ```bash
   npx vitest run                    # unit + integration
   npx cypress run --headless        # E2E
   k6 run k6/load.js                 # load test se API mudou
   npm audit                         # OWASP A06
   gh pr create                      # PR com summary do Fase 7
   ```

8. **Seção: Exemplo concreto**
   Feature: "Adicionar autenticação OAuth com Google"
   - Prompt exato para o `/feature-dev`
   - O que cada fase produziu
   - Output da Fase 7 (summary)
   - Testes rodados após

9. **Seção: Comparação com outros workflows**
   - Feature Dev vs. W1 Solo: Feature Dev é mais estruturado e adequado para features complexas
   - Feature Dev vs. GSD: GSD é para múltiplas features/milestones; Feature Dev é para uma feature específica
   - Feature Dev vs. Cortex: sem memória cross-session; cada `/feature-dev` começa do zero

---

### MÓDULO 27 — 05-agentic.html

**Arquivo:** `modules/06-workflows/05-agentic.html`
**Módulo:** 27 | **Active nav:** `nav-module-27`
**Título:** W5: Pipeline 100% Agentic
**Descrição:** Zero intervenção humana. Um trigger (GitHub issue, webhook, cron) inicia um orchestrator que spawna agentes especializados criados em runtime, executa em paralelo, verifica, testa e faz merge — completamente autônomo.

**Conteúdo:**

1. **Seção: Filosofia e quando usar**
   - Para features bem-definidas, repetitivas ou de manutenção
   - Não para: features de alta ambiguidade, mudanças de arquitetura, decisões de produto
   - Pré-requisito: o pipeline em si deve ter testes rigorosos antes de ser autônomo
   - Callout warning: "Autonomia sem testes do pipeline é caos automatizado"

2. **Seção: Arquitetura do pipeline**
   Diagrama Mermaid completo:
   ```
   flowchart TD
     T1[GitHub Issue\nWebhook] --> ORC
     T2[Cron Job] --> ORC
     T3[API Trigger] --> ORC

     ORC[Orchestrator\ncontexto < 80K tokens] --> ORC1[Lê issue/ticket\nAnalisa codebase]
     ORC1 --> ORC2{Quais especialistas\nsão necessários?}

     ORC2 -->|Backend| BA[Backend Agent\n< 60K tokens\nHex Arch + TDD]
     ORC2 -->|Frontend| FA[Frontend Agent\n< 60K tokens\nshadcn/ui + Lucide]
     ORC2 -->|Testes| TA[Test Agent\n< 60K tokens\nTDD-first]
     ORC2 -->|Segurança| SA[Security Agent\n< 60K tokens\nOWASP Top 10]

     BA --> F1[Arquivos de implementação]
     FA --> F2[Componentes UI]
     TA --> F3[Suíte de testes]
     SA --> F4[Security report]

     F1 & F2 & F3 & F4 --> ORC3[Orchestrator consolida]
     ORC3 --> ORC4[Review Agent\ncode quality + SOLID]
     ORC4 --> GATE1{Passou\nreview?}
     GATE1 -->|Não| ORC5[Debug Agent\ncontexto do erro]
     ORC5 --> BA
     GATE1 -->|Sim| TEST[Testing Pipeline]

     TEST --> T1A[vitest unit]
     T1A --> T2A[vitest integration]
     T2A --> T3A[cypress headless]
     T3A --> T4A{API mudou?}
     T4A -->|Sim| T5A[k6 load + stress]
     T4A -->|Não| GATE2
     T5A --> GATE2

     GATE2{Todos os\ntestes passaram?} -->|Não| ORC6[Análise de falha\nnovo ciclo]
     ORC6 --> BA
     GATE2 -->|Sim| MERGE[gh pr create\nauto-approve policy\ngh pr merge]
     MERGE --> DEPLOY[vercel deploy\nsmoke test]
     DEPLOY --> CLOSE[gh issue close]
   ```

3. **Seção: Exemplo concreto — do zero ao merge**

   **Cenário:** Issue GitHub #247: "Adicionar rate limiting de 100 req/min na API de usuários"

   Passo 1 — Trigger:
   ```json
   // Webhook payload do GitHub
   {
     "action": "opened",
     "issue": {
       "number": 247,
       "title": "Adicionar rate limiting de 100 req/min na API de usuários",
       "body": "Estamos sofrendo abuse na rota GET /api/users. Precisamos de rate limiting por IP com resposta 429.",
       "labels": [{"name": "enhancement"}, {"name": "security"}]
     }
   }
   ```

   Passo 2 — Orchestrator boot (< 30K tokens):
   ```bash
   claude -p "
   Issue #247: Adicionar rate limiting 100 req/min na API de usuários.
   Leia src/api/users/ e identifique:
   1. Qual middleware de rate limiting está disponível no projeto
   2. Quais agentes você vai spawnar e por quê
   3. Escreva agents-plan.json com a lista de agentes e seus briefs
   Contexto máximo: mantenha resposta < 2K tokens.
   Escreva resultado em .pipeline/247/orchestrator-plan.json"
   ```

   Passo 3 — Spawn paralelo:
   ```bash
   # Backend Agent
   claude -p "$(cat .pipeline/247/backend-brief.txt)" &

   # Test Agent (TDD: escreve testes ANTES)
   claude -p "$(cat .pipeline/247/test-brief.txt)" &

   # Security Agent (OWASP A03: injection, A07: auth)
   claude -p "$(cat .pipeline/247/security-brief.txt)" &

   wait # aguarda os 3 terminarem
   ```

   Passo 4 — Integration gate:
   ```bash
   # Review agent consolida
   claude -p "Leia .pipeline/247/backend-output/, .pipeline/247/tests/, .pipeline/247/security-report.json.
   Verifique: SOLID, sem regressões, OWASP OK.
   Escreva .pipeline/247/review-result.json com status e issues."
   ```

   Passo 5 — Testing pipeline:
   ```bash
   npx vitest run --reporter=json > .pipeline/247/test-results.json
   npx cypress run --headless --reporter json > .pipeline/247/cypress-results.json
   k6 run --out json=.pipeline/247/k6-results.json k6/load.js
   npm audit --json > .pipeline/247/audit-results.json
   ```

   Passo 6 — PR + Merge:
   ```bash
   gh pr create \
     --title "feat: rate limiting 100 req/min na API de usuários (closes #247)" \
     --body "$(cat .pipeline/247/pr-description.md)"
   gh pr merge --squash --auto
   gh issue close 247 --comment "Implementado via pipeline autônomo. PR #$(gh pr view --json number -q .number)"
   ```

4. **Seção: Dynamic agent spawning — criação em runtime**
   - O orchestrator decide quais agentes criar baseado na análise do issue
   - Não existe lista fixa de agentes — cada issue pode ter agentes diferentes
   - Como o orchestrator decide:
   ```bash
   # Se issue tem label "security" → spawna security agent
   # Se issue menciona "frontend" → spawna frontend agent com frontend-design skill
   # Se issue menciona "database" → spawna migration agent
   # Se issue menciona "performance" → spawna perf agent com k6
   ```
   - Como criar um skill em runtime:
   ```bash
   claude -p "Crie um skill temporário em .pipeline/247/skills/migration-agent.md
   para um agente especializado em migrations de banco PostgreSQL com zero downtime.
   O skill deve ter: instruções de como criar migrations reversíveis,
   checklist de segurança, e formato de output."
   ```

5. **Seção: Context Window discipline no pipeline agentic**
   - Este é o cenário mais crítico para context discipline
   - Regras do orquestrador:
     - Nunca acumular resultados completos dos agentes (apenas paths + status)
     - Após 3 waves, reiniciar o orchestrator com CONTEXT.md
     - Cada agente nasce com brief < 2K tokens + contexto de arquivos
   - Anti-pattern: orquestrador que pede output completo de todos os agentes → context overflow
   - Pattern correto: orquestrador pede apenas `{ status, output_files[], issues[] }`

6. **Seção: Como configurar o pipeline**
   - Estrutura de pastas: `.pipeline/`, `k6/`, scripts de orquestração
   - GitHub Actions para trigger automático
   - Configuração de auto-approve policy (com cuidado)
   - Smoke tests pós-deploy

7. **Seção: Limitações e quando NÃO usar**
   - Features de alta ambiguidade (sem spec clara)
   - Mudanças de arquitetura
   - Features que precisam de julgamento de produto
   - Quando o custo de erro é alto e sem rollback fácil
   - Callout warning: "Comece com o pipeline supervisionado (humano aprova PR). Só automatize o merge após 20+ PRs com 0 regressões."

---

### MÓDULO 28 — 06-ideal-stack.html

**Arquivo:** `modules/06-workflows/06-ideal-stack.html`
**Módulo:** 28 | **Active nav:** `nav-module-28`
**Título:** W6: O Stack Ideal
**Descrição:** A proposta de maior qualidade. Combina GSD para estrutura, agentes paralelos para execução, TDD hard gate, pirâmide de testes completa, OWASP em CI, e PM integrado nos gates críticos.

**Conteúdo:**

1. **Seção: Filosofia**
   - Não é o workflow mais rápido. É o workflow que você não vai se arrepender.
   - Cada fase tem um propósito de qualidade — não existe fase decorativa
   - PM está presente nos gates certos, não em todo passo
   - Callout info: "Use este workflow quando o custo de um bug em produção é maior que o custo de fazer certo."

2. **Seção: Diagrama completo**
   Diagrama Mermaid mais abrangente — 5 fases com todos os atores:
   ```
   flowchart TD
     PM[PM: PRD com critérios\nmensuráveis de aceite] --> F0

     subgraph F0["FASE 0 — Product Discovery"]
       F0A[/gsd:discuss-phase] --> F0B[Assumptions + ADR.md]
       F0B --> F0C[UI-SPEC.md via\n/gsd:ui-phase]
       F0C --> F0D[REQUIREMENTS.md aprovado pelo PM]
     end

     F0D --> F1

     subgraph F1["FASE 1 — Architecture First"]
       F1A[Claude desenha\nhexagonal arch] --> F1B[Domain model\nEntities + Use Cases]
       F1B --> F1C[Ports: interfaces\nde contrato]
       F1C --> F1D[Testes de contrato\nnos ports — RED]
     end

     F1D --> F2

     subgraph F2["FASE 2 — Parallel Implementation"]
       direction LR
       BA2[Backend Agent\n< 60K tokens\nDomain → Ports → Adapters\nTDD rigoroso]
       FA2[Frontend Agent\n< 60K tokens\nshadcn/ui + Lucide\nfrontend-design skill]
       SA2[Security Agent\nOWASP Top 10\nem paralelo]
       BA2 -.->|handoff via arquivo| FA2
     end

     F2 --> F3

     subgraph F3["FASE 3 — Testing Pyramid Completa"]
       T1[Unit: vitest\n> 80% coverage\ndomínio isolado] --> T2
       T2[Integration: DB real\ntestcontainers\nsem mocks] --> T3
       T3[E2E: Cypress\njornadas críticas\nheadless] --> T4
       T4[Load: k6\nbaseline throughput\np95 latência] --> T5
       T5[Stress: k6\nponto de ruptura\ndegradação graceful]
     end

     F3 --> F4

     subgraph F4["FASE 4 — PM Review Gate"]
       PR1[Preview deploy\nvercel --preview] --> PR2[PM valida contra\ncritérios de aceite]
       PR2 --> PR3{Aprovado?}
       PR3 -->|Não| PR4[Novo ciclo com\nfeedback capturado]
       PR4 --> F0
       PR3 -->|Sim| F5
     end

     subgraph F5["FASE 5 — Ship"]
       SH1[/gsd:ship] --> SH2[gh pr create]
       SH2 --> SH3[code-reviewer\nfinal pass]
       SH3 --> SH4[npm audit\nOWASP A06]
       SH4 --> SH5[Merge → Deploy]
       SH5 --> SH6[Alertas configurados\npré-produção]
     end
   ```

3. **Seção: Fase 0 — Product Discovery**
   - O que o PM precisa trazer: PRD com critérios SMART de aceite
   - discuss-phase: como Claude entrevista para descobrir gaps
   - ADR.md: formato de Architectural Decision Record
   - UI-SPEC.md: o que é, como usar com o skill frontend-design
   - Gate: PM deve assinar REQUIREMENTS.md antes de avançar

4. **Seção: Fase 1 — Architecture First**
   - Por que arquitetura antes de código
   - Como Claude desenha a hexagonal arch para o problema
   - Testes de contrato nos ports: o que são, como escrever
   - Callout warning: "Se você pular essa fase, vai refatorar depois. A questão é quando."

5. **Seção: Fase 2 — Execução paralela**
   - Como spawnar backend + frontend + security em paralelo
   - O protocolo de handoff entre backend e frontend (via arquivo de contrato de API)
   - Context window por agente: < 60K tokens
   - Quando um agente falha: retry vs. abort

6. **Seção: Fase 3 — Pirâmide de testes**
   - Cada nível com configuração real e comandos
   - Coverage mínimo por nível
   - O que faz o pipeline parar (falha em qualquer nível)
   - Relatório consolidado de testes

7. **Seção: Fase 4 — PM Review Gate**
   - Preview deploy: `vercel --preview`
   - Como o PM valida contra os critérios originais
   - Template de feedback estruturado
   - O que acontece quando não passa (novo ciclo não é retrabalho — é refinamento)

8. **Seção: Fase 5 — Ship**
   - `/gsd:ship` orquestra tudo
   - Final pass do code-reviewer
   - `npm audit` como gate obrigatório
   - Configurar alertas antes de ir para prod (não depois)
   - Post-mortem template (para quando algo der errado em prod)

9. **Seção: Context Window no W6**
   - Orchestrator master: máximo 80K tokens
   - /compact obrigatório entre Fase 1 e Fase 2
   - Cada agente: máximo 60K tokens
   - CONTEXT.md de handoff entre fases

10. **Seção: Checklist "Start here"**
    - Lista completa de itens para verificar antes de iniciar cada fase
    - Pode ser impressa ou colada no CLAUDE.md do projeto

---

## 6. PLANO DE EXECUÇÃO PARALELA

### Dependências entre arquivos

```
index.html (Módulo 21)            ← depende de: todos os outros (referencia-os)
00-fundamentos.html (Módulo 22)   ← independente (referência, não depende de nada)
01-solo.html (Módulo 23)          ← independente
02-gsd.html (Módulo 24)           ← independente
03-cortex.html (Módulo 25)        ← independente
04-feature-dev.html (Módulo 26)   ← independente
05-agentic.html (Módulo 27)       ← independente
06-ideal-stack.html (Módulo 28)   ← independente
```

### Wave 1 — 7 agentes em paralelo (independentes)

| Agente | Arquivo | Input desta spec |
|--------|---------|-----------------|
| Agent-A | `00-fundamentos.html` | Seção 5 > Módulo 22 |
| Agent-B | `01-solo.html` | Seção 5 > Módulo 23 + Seção 4 |
| Agent-C | `02-gsd.html` | Seção 5 > Módulo 24 + Seção 4 |
| Agent-D | `03-cortex.html` | Seção 5 > Módulo 25 + Seção 4 |
| Agent-E | `04-feature-dev.html` | Seção 5 > Módulo 26 + Seção 4 |
| Agent-F | `05-agentic.html` | Seção 5 > Módulo 27 + Seção 4 |
| Agent-G | `06-ideal-stack.html` | Seção 5 > Módulo 28 + Seção 4 |

**Brief base para cada agente (adaptar com o módulo específico):**
```
Você é um agente de criação de conteúdo educacional.
Crie o arquivo [ARQUIVO] do curso Claude Code Course.
Leia: modules/06-workflows/PLAN.md (seção 3 para template, seção 4 para cross-cutting, seção 5 para spec do módulo)
Leia para referência de padrão: modules/04-agentes/subagents.html
Regras:
- Siga o template HTML exatamente (seção 3 do PLAN.md)
- Não use emojis — apenas ícones Unicons uil-*
- Cada diagrama Mermaid em <div class="mermaid-wrapper">
- Código real com comandos que funcionam
- Conteúdo denso e técnico, adequado para engenheiros sênior
- Inclua todos os cross-cutting concerns (seção 4) aplicados ao workflow
- Versão no sidebar: v1.8.3
- O link active na nav deve ser nav-module-[N]
Escreva diretamente em modules/06-workflows/[ARQUIVO]
```

### Wave 2 — 2 agentes em paralelo (após Wave 1 completa)

| Agente | Tarefa | Dependência |
|--------|--------|-------------|
| Agent-H | Criar `index.html` (Módulo 21) | Wave 1 completa (referencia todos os arquivos) |
| Agent-I | Atualizar nav nos 20 HTMLs existentes | Wave 1 completa (confirma que módulo 21-28 existem) |

**Brief Agent-H:**
```
Crie modules/06-workflows/index.html (Módulo 21).
Leia: modules/06-workflows/PLAN.md (seção 5 > Módulo 21)
Os 7 outros arquivos do módulo 6 já existem — referencie-os.
```

**Brief Agent-I:**
```
Atualize a navegação lateral em todos os 20 HTMLs existentes do curso.
Arquivos: modules/01-fundacoes/*.html, modules/02-config/*.html,
          modules/03-memoria-contexto/*.html, modules/04-agentes/*.html,
          modules/05-avancado/*.html
Adicione após o bloco nav-part da Parte 5 em cada arquivo:
[inserir o bloco HTML da nav-part 6 da seção 3 deste documento]
Atualize também:
- "0 / 20" → "0 / 28" no sidebar-progress-text
```

### Wave 3 — Sequencial (após Wave 2 completa)

1. **Version bump:** v1.8.3 → v1.9.0 em todos os 28 HTMLs
2. **Cypress tests:** adicionar specs para o novo módulo em `cypress/e2e/`
3. **index.html raiz:** adicionar card da Parte 6 no grid de módulos

---

## 7. QUALIDADE E GATES

### O que cada agente deve garantir antes de entregar

- [ ] HTML válido (sem tags abertas)
- [ ] Todos os links da navegação presentes e corretos
- [ ] Link active correto para o módulo
- [ ] Nenhum emoji — apenas Unicons
- [ ] Mermaid.js script presente e configurado com tema dark
- [ ] Código nos blocos `<code>` com language class correto
- [ ] `data-testid="copy-btn"` em todos os botões copiar
- [ ] `data-testid="sidebar"`, `data-testid="breadcrumb"`, `data-testid="search-input"` presentes
- [ ] Versão v1.8.3 no sidebar
- [ ] Cross-cutting concerns cobertos (seção 4)
- [ ] Exemplo concreto na seção de exemplos
- [ ] Mobile header com título curto

### Validação pós-Wave-1

```bash
# Verificar que todos os arquivos foram criados
ls modules/06-workflows/*.html

# Verificar ausência de emojis
grep -r "emoji\|😀\|🚀\|✅\|❌" modules/06-workflows/ && echo "FAIL: emojis encontrados" || echo "OK"

# Verificar presença de Mermaid
grep -l "mermaid" modules/06-workflows/*.html | wc -l  # deve ser 7+

# Verificar data-testid obrigatórios
for f in modules/06-workflows/*.html; do
  grep -q 'data-testid="sidebar"' "$f" || echo "FAIL: sidebar missing in $f"
  grep -q 'data-testid="breadcrumb"' "$f" || echo "FAIL: breadcrumb missing in $f"
done
```

---

## 8. NOTAS PARA AGENTES

1. **Não altere o template** — use exatamente como definido na seção 3
2. **Não invente componentes CSS** — use apenas os listados na seção 3
3. **Mermaid sempre em `.mermaid-wrapper`** — nunca solto no HTML
4. **Código sempre com language** — `language-bash`, `language-typescript`, `language-json`, `language-text`
5. **Ícones sempre Unicons** — padrão `uil uil-nome-do-icone` (linha, não solid)
6. **Sem emojis em nenhum lugar** — nem em comentários HTML
7. **Conteúdo denso** — este curso é para engenheiros sênior, não nível introdutório
8. **Exemplos concretos** — comandos que funcionam, não pseudocódigo
9. **Versão 1.8.3** — não alterar durante execução; só após Wave 3
10. **Context discipline no próprio agente** — se o arquivo gerado for muito longo, dividir em seções e escrever incrementalmente com Edit, não re-escrever o arquivo inteiro

---

*PLAN.md gerado em: 2026-03-29*
*Status: PRONTO PARA EXECUÇÃO — aguardando go de afialho*
