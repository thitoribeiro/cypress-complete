describe('Select box', () => {
    it('Should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    it('Should select an option from select box', () => {
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')

        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')
    })
})