describe('Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('has a search input', () => {
    cy.get('[data-testid="search-input"]').should('exist')
  })

  it('shows results when typing "hooks"', () => {
    cy.get('[data-testid="search-input"]').type('hooks')
    cy.get('[data-testid="search-results"]').should('be.visible')
    cy.get('[data-testid="search-result-item"]').should('have.length.greaterThan', 0)
  })

  it('shows results when typing "CLAUDE.md"', () => {
    cy.get('[data-testid="search-input"]').type('CLAUDE.md')
    cy.get('[data-testid="search-result-item"]').should('have.length.greaterThan', 0)
  })

  it('hides results when input is cleared', () => {
    cy.get('[data-testid="search-input"]').type('hooks')
    cy.get('[data-testid="search-input"]').clear()
    cy.get('[data-testid="search-results"]').should('not.be.visible')
  })

  it('result click navigates to module', () => {
    cy.get('[data-testid="search-input"]').type('hooks')
    cy.get('[data-testid="search-result-item"]').first().click()
    cy.url().should('not.eq', Cypress.config().baseUrl + '/')
  })
})
