describe('home-page', () => {
    it('visits the homepage', () => {
        cy.visit('/')
        cy.contains('h1', 'Final project for E28')
    })
})
