describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads the homepage', () => {
    cy.get('body').should('exist')
    cy.title().should('contain', 'Claude Code')
  })

  it('has a sidebar with module list', () => {
    cy.get('[data-testid="sidebar"]').should('exist')
    cy.get('[data-testid="sidebar"]').find('a').should('have.length.greaterThan', 10)
  })

  it('navigates to Module 1', () => {
    cy.get('[data-testid="nav-module-1"]').click()
    cy.url().should('include', '01-fundacoes')
    cy.get('h1').should('contain', 'Claude Code')
  })

  it('navigates to Module 2 (CLI)', () => {
    cy.get('[data-testid="nav-module-2"]').click()
    cy.url().should('include', '02-cli')
  })

  it('has breadcrumb navigation', () => {
    cy.get('[data-testid="nav-module-1"]').click()
    cy.get('[data-testid="breadcrumb"]').should('exist')
  })

  it('has next/previous module buttons', () => {
    cy.get('[data-testid="nav-module-1"]').click()
    cy.get('[data-testid="btn-next"]').should('exist')
  })

  it('highlights current module in sidebar', () => {
    cy.get('[data-testid="nav-module-1"]').click()
    cy.get('[data-testid="nav-module-1"]').should('have.class', 'active')
  })
})
