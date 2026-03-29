// Global Cypress support file
Cypress.on('uncaught:exception', (err) => {
  // Prevent test failures due to uncaught exceptions in app
  if (err.message.includes('ResizeObserver')) return false
  return true
})
