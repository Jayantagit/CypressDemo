describe('Alert Handling', () => {

    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    it.skip('Simple JS Alert', () => {

        cy.contains("Click for JS Alert").click()
        cy.contains("You successfully clicked an alert").should("be.visible")
        
    });

    it.skip('Confirm JS Alert', () => {

        cy.contains("Click for JS Confirm").click()
        cy.on("window:confirm",(win)=>
        {
            return false;
        })
        cy.contains("You clicked: Cancel").should("be.visible")
        
    });

    it('JS Prompt', () => {

        cy.window().then((win)=>
        {
            cy.stub(win,'prompt').returns("welcome cypress")
        })
        cy.contains("Click for JS Prompt").click()
        
        
    });
});