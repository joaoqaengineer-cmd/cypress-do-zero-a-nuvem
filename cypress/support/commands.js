Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Guilherme')
    cy.get('#email').type('jg@gui.com')
    cy.get('#open-text-area').type('Teste Cy')
    cy.get('button[type="submit"]').click()
})