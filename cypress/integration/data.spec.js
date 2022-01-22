describe('Write / Read Data to JSON / Text file', () => {
    it('Should write dta into JSON', () => {
        cy.writeFile('log.json', { name: 'Thito', age: 34 })
       
    })

    it('Should write data to the text file', () => {
        cy.writeFile('log.txt', 'Hello World')
    })

    it('Should read and verify data from JSON file', () => {
        cy.readFile('log.json')
            .its('age')
            .should('eq', 34)
        })

        it('Should read and verify data the text file', () => {
            cy.readFile('log.txt').should('eq', 'Hello World')
        })

        it('Should read and verify data from the text file', () => {
            cy.readFile('log.txt').should('eq', 'Hello World')
        })

        it('Should read and verify browser document content', () => {
            cy.visit('https://www.example.com')
            cy.wait(2000)
            cy.document()
                .its('contentType')
                .should('eq', 'text/html')

            cy.document()
                .should('have.property', 'charset')
                .and('eq', 'UTF-8')
        })
    })
