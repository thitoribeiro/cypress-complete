/// <reference types="Cypress" />

describe('The first simple test with cypress', () => {
    it('True should be True', () => {
        expect(true).to.equal(true)
    })

    it('5 should be 5', () => {
        expect(5).to.equal(5)
    })
})

describe('Another describe block ', () => {
    it('False should be false', () => {
        expect(false).to.equal(false)
    })
})
