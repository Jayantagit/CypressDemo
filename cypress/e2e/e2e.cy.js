describe('E2E Customer Process', () => {

    before("Login",()=>
    {

        cy.log("Pre-Condition")
    })
    it('Customer Process', () => {
        
        cy.log("Test-Condition")
    });

    after("Login",()=>
    {
        cy.log("PostCondition")
    })
});