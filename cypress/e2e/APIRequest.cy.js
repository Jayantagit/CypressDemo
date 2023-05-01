describe('Intercept API Request', () => {


    it('get Request', () => {

        cy.visit("https://reqres.in/")

        cy.intercept('GET',"api/users/2").as("get-user")

        cy.contains(" Single user ").click()

        cy.wait("@get-user").its("response.statusCode").should("eql",200)
        
    });

    it.only('Delayed Request', () => {

        cy.visit("https://reqres.in")

        cy.intercept('GET',"/api/users?delay=3").as("get-user")

        cy.contains("Delayed response").click()

        cy.wait("@get-user").its("response").then((response)=>
        {
            cy.log(response.body.data[1].id)
        })
        
    });

    
});