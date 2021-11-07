/// <reference types="Cypress" />

describe('REST API Test with Cypress - Chuck Norris Challenge', () => {
    it('API Test - Validate Header', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('jokes')
        cy.get('@jokes')
            .its('headers')
            .its('content-type') 
    })

    it('API Test - Validade Status Code', () => {
        cy.request('https://api.chucknorris.io/jokes/random').as('jokes')
        cy.get('@jokes').its('status').should('equal', 200)
    })

})


