describe('Resources page', () => {
  it('loads resources page', () => {
    cy.visit('/modules/05-avancado/resources.html')
    cy.get('h1').should('exist')
  })

  it('has official documentation links', () => {
    cy.visit('/modules/05-avancado/resources.html')
    cy.get('a[href*="anthropic.com"]').should('have.length.greaterThan', 2)
  })

  it('has video/course references', () => {
    cy.visit('/modules/05-avancado/resources.html')
    cy.get('[data-testid="resources-videos"]').should('exist')
    cy.get('[data-testid="resources-videos"] a').should('have.length.greaterThan', 0)
  })

  it('has community links', () => {
    cy.visit('/modules/05-avancado/resources.html')
    cy.get('[data-testid="resources-community"]').should('exist')
  })
})
