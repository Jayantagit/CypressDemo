
let getText;
describe('Add New Customer', () => {
  it('Successfully adding a Customer', () => {

    cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/manager")
    cy.contains("Add Customer").click();

    let name = "Jayanta" + Math.random(0,1000);

    //Add Customer details
    cy.get('input[ng-model="fName"]').should("be.visible")
      .type(name);

    cy.get('input[ng-model="lName"]')
      .type('Wright1');

    cy.get('input[ng-model="postCd"]')
      .type('22204');

    cy.get('button[type="Submit"]').click();

    cy.on("window:alert", (alert) => {
      expect(alert).to.contains("Customer added successfully")
    })

    cy.contains("Customers").click();

    cy.get("input[placeholder='Search Customer']").type(name);

    cy.get('table.table tbody td').eq(0).should("have.text", name);

    cy.get("table.table tbody td").last().each(($ele) => {
      getText = $ele.text();
      cy.log(getText);
      cy.wrap($ele).click()

    }

    )
    //
    // cy.get('table.table tbody td').eq(4).click({force:true});
    // cy.get('table.table tbody td').last().click({force:true});





  });
});