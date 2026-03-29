describe('UI & Dark Mode', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has dark mode toggle', () => {
    cy.get('[data-testid="theme-toggle"]').should('exist')
  })

  it('toggles dark mode', () => {
    cy.get('[data-testid="theme-toggle"]').click()
    cy.get('html').should('have.class', 'light')
    cy.get('[data-testid="theme-toggle"]').click()
    cy.get('html').should('have.class', 'dark')
  })

  it('persists theme in localStorage', () => {
    cy.get('[data-testid="theme-toggle"]').click()
    cy.reload()
    cy.get('html').should('have.class', 'light')
  })

  it('code blocks have copy button', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.get('[data-testid="copy-btn"]').should('have.length.greaterThan', 0)
  })

  it('copy button works', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.window().then((win) => {
      cy.stub(win.navigator.clipboard, 'writeText').resolves()
    })
    cy.get('[data-testid="copy-btn"]').first().click()
    cy.get('[data-testid="copy-btn"]').first().should('contain', 'Copiado')
  })

  it('is responsive on mobile viewport', () => {
    cy.viewport(375, 667)
    cy.get('body').should('exist')
    cy.get('[data-testid="sidebar"]').should('exist')
  })
})
