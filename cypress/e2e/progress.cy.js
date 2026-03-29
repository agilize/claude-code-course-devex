describe('Progress tracking', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/')
  })

  it('shows 0% progress initially', () => {
    cy.get('[data-testid="progress-bar"]').should('exist')
    cy.get('[data-testid="progress-text"]').should('contain', '0')
  })

  it('marks module as complete when button clicked', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.get('[data-testid="btn-complete"]').click()
    cy.get('[data-testid="btn-complete"]').should('have.class', 'completed')
  })

  it('persists progress in localStorage', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.get('[data-testid="btn-complete"]').click()
    cy.reload()
    cy.get('[data-testid="btn-complete"]').should('have.class', 'completed')
  })

  it('updates overall progress percentage', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.get('[data-testid="btn-complete"]').click()
    cy.visit('/')
    cy.get('[data-testid="progress-text"]').should('not.contain', '0%')
  })

  it('shows completed modules with checkmark in sidebar', () => {
    cy.visit('/modules/01-fundacoes/')
    cy.get('[data-testid="btn-complete"]').click()
    cy.visit('/')
    cy.get('[data-testid="nav-module-1"]').should('have.class', 'done')
  })
})
