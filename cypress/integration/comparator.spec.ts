it('should show expected results when using standard query string', () => {
  cy.visit(
    '/?repo=testing-library%2Fdom-testing-library&from=v6.16.0&to=v8.1.0'
  )

  cy.wait(10000) // eslint-disable-line cypress/no-unnecessary-waiting

  // Confirm repository name is displayed

  cy.findByRole('link', { name: /dom testing library/i }).should(
    'have.attr',
    'href',
    'https://github.com/testing-library/dom-testing-library'
  )

  // Confirm from and to version range is displayed

  cy.findByRole('heading', {
    name: /changes from v6\.16\.0 to v8\.1\.0/i,
  })

  cy.findByRole('heading', {
    level: 2,
    name: /breaking changes/i,
  })

  cy.findAllByText('v7.0.0', { ignore: 'option' }).should('have.length', 2)

  cy.findByRole('heading', { level: 5, name: /drop node 8/i })

  cy.findByText(
    /node 10 or greater is required\. node 8 is \(\) \(\), closes/i
  ).should('have.length', 1)

  cy.findByRole('link', { name: /out of lts/i }).should(
    'have.attr',
    'href',
    'https://nodejs.org/en/about/releases/'
  )

  cy.findByRole('link', { name: /#459/i }).should(
    'have.attr',
    'href',
    'https://github.com/testing-library/dom-testing-library/issues/459'
  )

  cy.findByRole('link', { name: /c3ab843/i }).should(
    'have.attr',
    'href',
    'https://github.com/testing-library/dom-testing-library/commit/c3ab843c292484428f045671ea22cbb30eb70559'
  )

  cy.findByRole('link', { name: /#430/i }).should(
    'have.attr',
    'href',
    'https://github.com/testing-library/dom-testing-library/issues/430'
  )

  // Check if the code block renders with the diff display
  cy.findByText(/- "test": "react-scripts test --env=dom"/i)
  cy.findByText(
    /\+ "test": "react-scripts test --env=jest-environment-jsdom-sixteen"/i
  )

  cy.findByRole('heading', { level: 2, name: /features/i })

  cy.findByRole('heading', { level: 2, name: /bug fixes/i })

  cy.findByRole('heading', { level: 2, name: /reverts/i })

  cy.findByRole('heading', { level: 2, name: /recommendations/i })

  cy.findByRole('heading', { level: 2, name: /chore/i })
})

// Keep the export {} braces here!

export {}
