describe('Custom Commands', () => {
    it('Should login to application using Cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})