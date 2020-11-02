Cypress.Commands.add('selectOption', { prevSubject: 'element' }, (subject, option) => {
  cy.get(subject.selector).click()
  cy.contains(option).click()
})
