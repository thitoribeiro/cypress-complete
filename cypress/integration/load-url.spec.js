describe('Browser Action', () => {
    it('Should load correct url', () => {
        cy.visit('http://exemplo.com/', { timeout: 10000 })
    })

    it('Should check correct url', () => {
        cy.url().should('include', 'exemplo.com')
    })

    it('Should wait for 3 seconds', () => {
        cy.wait(3000)
    })

    it('Should pause the executin', () => {
        cy.pause()
    })

    it('Should check for corrent element on the page', () => {
        cy.get('h1').should('be.visible')
    })
})


