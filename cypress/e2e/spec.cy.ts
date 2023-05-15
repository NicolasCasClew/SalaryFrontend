describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("has a title", () => {
    //cy.get("#radioButton").click; // Check first radio element
    //cy.get("#radioButton2").click; // Check first radio element
    cy.contains("Adabtive Salary Tool");

    cy.get('[data-cy="lightButton"]').click();
    cy.get('[data-cy="lightButton"]').click();

    cy.get(".ant-picker").type("3-May-21{enter}");

    cy.get(".ant-radio-group > :nth-child(2)").click();

    cy.get(
      '.ant-slider-step > [style="left: 60%; transform: translateX(-50%);"]'
    ).click();

    //cy.get("[id^=#lightMode-]").click();
    cy.contains("18.810");
    expect(2).equals(2);
  });
});
