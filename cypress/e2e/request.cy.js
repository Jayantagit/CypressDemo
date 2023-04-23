describe('Frame', () => {
    it('Frame Handing', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.get("#mce_0_ifr").then((frame)=>
        {
            let body=frame.contents().find('body')
            cy.wrap(body).clear()
            cy.wrap(body).type("Cypress")

        })
        
    });
});