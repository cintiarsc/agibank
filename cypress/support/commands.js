// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add ('fillMandatoryFieldsAndSubmit', function() {
    cy.get('input#firstName').type('Cintia')
    cy.get('input#lastName').type('Costa')
    cy.get('input#email').type('teste@cintia.com.br')
    cy.get('#open-text-area').type('Quero agradecer pelo treinamento')
   // cy.get('button[type="submit"]').click()
   cy.contains('button', 'Enviar').click()


})