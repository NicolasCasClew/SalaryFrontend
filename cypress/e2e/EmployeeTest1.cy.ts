describe("Employee at 4 years 32h a week 1 expertise 2 Respo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("gives an expected salary", () => {
    //cy.get("#radioButton").click; // Check first radio element
    //cy.get("#radioButton2").click; // Check first radio element
    //cy.contains("Adabtive Salary Tool");

    cy.get('[data-cy="botonido"]').click();
    cy.get('[data-cy="botonido"]').click();

    cy.get(".ant-picker").type("03-May-19{enter}");

    //cy.get(".ant-radio-group > :nth-child(2)").click();

    cy.get(
      '.ant-slider-step > [style="left: 80%; transform: translateX(-50%);"]'
    ).click();

    //cy.get("[id^=#lightMode-]").click();
    cy.contains("23.712");
    expect(2).equals(2);
  });
});
