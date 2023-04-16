describe('User Login', () => {


    beforeEach("Customer Login", () => {

        cy.fixture("orangehrm/user").then((creds) => {

            cy.CustomerLogin(creds.uname,creds.password)
            cy.wait(6000)
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        })
    })
    it('Admin Menu Click', () => {

        cy.contains("Admin").click();
        cy.contains("System Users").should("be.visible");
    });

    it('PIM Menu Click', () => {

        cy.contains("PIM").click();
        cy.contains("Employee Information").should("be.visible");
    });
});