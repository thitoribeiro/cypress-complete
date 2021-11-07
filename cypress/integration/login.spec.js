describe('Working with inputs', () => {

    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.contains('.brand','Zero Bank')
    })
    
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Some invalid name', { delay: 50 })
    })

    it('Should fill password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some Invalid Password', { delay: 50 })
    })

    it('Sould submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    })

})