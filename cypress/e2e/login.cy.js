describe('W2ALogin Scenario', () => {
    it('Successful Login', () => {

        
        cy.visit("https://www.way2automation.com/angularjs-protractor/registeration/#/login")
        cy.get("#username").type("angular")
        cy.get("#password").type("password")
        cy.get("#formly_1_input_username_0").type("Jayanta")
        cy.contains("Login").should("be.enabled").click()
        cy.contains("You're logged in!!").should("be.visible")
       // cy.contains("Logout").should("be.visible").click()
        cy.xpath("//a[text()='Logout']").click()


        
    });
});