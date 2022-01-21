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
    })
