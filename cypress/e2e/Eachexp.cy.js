describe('Multiple Element Handling', () => {
    it('Delete all Users', () => {

        cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/manager");
        cy.contains("Customers").click()
        cy.xpath("//button[text()='Delete']").each((ele, index, $list) => {
            cy.wrap(ele).click()

        })


    });
});