describe("Contractor 40h 4 expertise 4 Responsibility, in light mode", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
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
      // response.body is automatically serialized into JSON
      expect(response.body).to.have.property("salaryTotal", 28500); // true
    });
  });
  it("changes the background color", () => {
    cy.get('[data-cy="lightButton"]').click();
    cy.get(".ant-row.page_colTest__BoG4a")
      .should("have.css", "background-color")
      .and("eq", "rgba(0, 0, 0, 0)");
  });
});
