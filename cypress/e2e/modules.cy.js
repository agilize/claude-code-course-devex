const modules = [
  { id: 1, path: '/modules/01-fundacoes/', keyword: 'Claude Code' },
  { id: 2, path: '/modules/01-fundacoes/cli.html', keyword: 'CLI' },
  { id: 3, path: '/modules/01-fundacoes/claude-md.html', keyword: 'CLAUDE.md' },
  { id: 4, path: '/modules/02-config/tools.html', keyword: 'Tools' },
  { id: 5, path: '/modules/02-config/settings.html', keyword: 'Settings' },
  { id: 6, path: '/modules/02-config/skills.html', keyword: 'Skills' },
  { id: 7, path: '/modules/02-config/hooks.html', keyword: 'Hooks' },
  { id: 8, path: '/modules/02-config/keybindings.html', keyword: 'Keybindings' },
  { id: 9, path: '/modules/03-memoria-contexto/memory.html', keyword: 'Memória' },
  { id: 10, path: '/modules/03-memoria-contexto/context.html', keyword: 'Contexto' },
  { id: 11, path: '/modules/03-memoria-contexto/mcp.html', keyword: 'MCP' },
  { id: 12, path: '/modules/04-agentes/agent-tool.html', keyword: 'Agent' },
  { id: 13, path: '/modules/04-agentes/subagents.html', keyword: 'Subagentes' },
  { id: 14, path: '/modules/04-agentes/plan-mode.html', keyword: 'Plan Mode' },
  { id: 15, path: '/modules/05-avancado/cli-corporate.html', keyword: 'CLI' },
  { id: 16, path: '/modules/05-avancado/ide.html', keyword: 'IDE' },
  { id: 17, path: '/modules/05-avancado/models.html', keyword: 'Model' },
  { id: 18, path: '/modules/05-avancado/api-sdk.html', keyword: 'API' },
  { id: 19, path: '/modules/05-avancado/best-practices.html', keyword: 'Práticas' },
  { id: 20, path: '/modules/05-avancado/resources.html', keyword: 'Recursos' },
]

describe('All modules load and have content', () => {
  modules.forEach(({ id, path, keyword }) => {
    it(`Module ${id}: ${path} loads with keyword "${keyword}"`, () => {
      cy.visit(path)
      cy.get('body').should('not.be.empty')
      cy.get('h1, h2').should('exist')
      cy.contains(keyword, { matchCase: false }).should('exist')
    })
  })
})

describe('Module content quality', () => {
  it('Module 1 has code examples', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.get('pre code, code').should('have.length.greaterThan', 0)
  })

  it('Module 6 (Skills) has practical exercise', () => {
    cy.visit('/modules/02-config/skills.html')
    cy.get('[data-testid="exercise"]').should('exist')
  })

  it('Each module has documentation links', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.get('a[href*="anthropic.com"], a[href*="docs.anthropic"], a[href*="github.com/anthropics"]').should('have.length.greaterThan', 0)
  })
})
