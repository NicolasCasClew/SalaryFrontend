describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("has a title and other stuff", () => {
    cy.contains("Adabtive Salary Tool");
    cy.get(".ant-picker").type("3-May-21{enter}");
    cy.get(".ant-radio-group > :nth-child(2)").click();
    cy.get(
      '.ant-slider-step > [style="left: 60%; transform: translateX(-50%);"]'
    ).click();
    cy.contains("18.810");
  });

  it("gives an expected salary (167.200)", () => {
    cy.get(".ant-radio-group > :nth-child(2)").click();
    cy.get(
      ':nth-child(4) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > [style="display: flex; flex-direction: row;"] > .ant-slider > .ant-slider-step > [style="left: 100%; transform: translateX(-50%);"]'
    ).click();
    cy.get(
      '[style="padding-bottom: 2em;"] > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > [style="display: flex; flex-direction: row;"] > .ant-slider > .ant-slider-step > [style="left: 100%; transform: translateX(-50%);"]'
    ).click();
    cy.get('[data-cy="lightButton"]').click();
    cy.contains("167.200");
    cy.request("POST", "http://localhost:8080/processNumbers", {
      expertise: 0,
      responsibility: 1,
      hoursPerWeek: 40,
      isEmployee: true,
      millis: 0,
    }).then((response) => {
      expect(response.body).to.have.property("salaryTotal", 28500); // true
    });
  });

  it("changes the background color", () => {
    cy.get('[data-cy="lightButton"]').click();
    cy.get(".ant-row.page_colTest__BoG4a")
      .should("have.css", "background-color")
      .and("eq", "rgba(0, 0, 0, 0)");
  });

  it("gives an expected salary", () => {
    cy.get('[data-cy="lightButton"]').click();
    cy.get('[data-cy="lightButton"]').click();
    cy.get(".ant-picker").type("03-May-19{enter}");
    cy.get(
      '.ant-slider-step > [style="left: 80%; transform: translateX(-50%);"]'
    ).click();
    cy.contains("23.712");
  });

  it("intercept works", () => {
    cy.intercept("POST", "http://localhost:8080/processNumbers", (req) => {
      const { body } = req;
      console.log("cuerpo serrano = " + body);
    }).as("read");

    //cy.contains("17100");
  });
});
