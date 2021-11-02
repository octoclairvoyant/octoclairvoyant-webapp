it('should display corresponding information', () => {
  cy.visit('/')

  cy.title().should(
    'equal',
    'Octoclairvoyant: Compare GitHub changelogs across multiple releases'
  )

  cy.findByRole('heading', { level: 1, name: 'Octoclairvoyant' }).should(
    'exist'
  )

  cy.findByRole('heading', {
    level: 2,
    name: 'Compare GitHub changelogs across multiple releases',
  }).should('exist')

  cy.findByAltText(/octoclairvoyant reading a crystal ball/i)
    .should('have.attr', 'src')
    .should('include', 'mascot-logo')

  cy.findByAltText(/octoclairvoyant reading a crystal ball/i).should(
    'have.attr',
    'src',
    '/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmascot-logo.8655d29c.png&w=1200&q=100'
  )

  cy.findByRole('heading', {
    level: 3,
    name: 'Features',
  }).should('exist')

  cy.contains('footer', 'Created with')
  cy.contains('footer', 'by Mario')
})

it('should have a working link to comparator page', () => {
  cy.visit('/')

  cy.findByRole('button', { name: 'Try me now!' }).click()

  cy.url().should('equal', `${Cypress.config().baseUrl}/comparator`)
})

export {}
