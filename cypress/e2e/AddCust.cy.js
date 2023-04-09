
import Utils from "../support/Utils";

let getText;
describe('Add New Customer', () => {
  it('Successfully adding a Customer', () => {

    cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/manager")
    cy.contains("Add Customer").click();

    let name = "Jayanta" + Utils.getRandomNumber();
    let lname = "Mandal";
    let fullname = name + " " + lname;

    //Add Customer details
    cy.get('input[ng-model="fName"]').should("be.visible")
      .type(name);

    cy.get('input[ng-model="lName"]')
      .type(lname);

    cy.get('input[ng-model="postCd"]')
      .type('22204');

    cy.get('button[type="Submit"]').dblclick();

    cy.on("window:alert", (alert) => {
      cy.log(alert);
      expect(alert).to.contains("Customer added successfully");
    })

    //Verify Customer has been added successfully
    cy.contains("Customers").click();

    cy.get("input[placeholder='Search Customer']").type(name);

    cy.get('table.table tbody td').eq(0).should("have.text", name);
    cy.xpath(`//td[text()='${name}']`).should("be.visible")


    //Open Customer Account
    cy.contains("Home").click();
    cy.contains("Bank Manager Login").click();
    cy.contains("Open Account").click();

    cy.get("#userSelect").select(fullname);
    cy.get("#currency").select("Dollar");
    cy.contains("Process").click();

    cy.on("window:alert", (alert) => {
      cy.log(alert);
      expect(alert).to.contains("Account created successfully");
    })

    //Customer Login

    cy.contains("Home").click();
    cy.contains("Customer Login").click();
    cy.get("#userSelect").select(fullname);
    cy.contains("Login").click();
    cy.get("#accountSelect").find("option").should("have.length", 1);

    //Deposit amount
    cy.contains("Deposit").click();
    cy.get("input[placeholder='amount']").type(2000);
    cy.get("button[type='submit']").dblclick();
    cy.xpath("//span[text()='Deposit Successful']").should("be.visible");

    //Delete  the Customer
    cy.contains("Home").click();
    cy.contains("Bank Manager Login").click();
    cy.contains("Customers").click();

    cy.get("input[placeholder='Search Customer']").type(name);

    cy.get("table.table tbody td button").then(($ele) => {
      getText = $ele.text();
      cy.log(getText);
      if(getText==="Delete")
      {
        cy.log("Delete nutton,,,")
        cy.wrap($ele).click()

      }
     

    })
    

  });
});