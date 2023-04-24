class HomePage
{
    clickOnAdminLink()
    {
        cy.contains("Admin").click();
        cy.contains("System Users").should("be.visible");

    }
}

export default new HomePage();