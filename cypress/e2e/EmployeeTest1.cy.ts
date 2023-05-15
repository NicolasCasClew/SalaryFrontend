describe("Employee at 4 years 32h a week 1 expertise 2 Respo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("gives an expected salary", () => {
    cy.get('[data-cy="botonido"]').click();
    cy.get('[data-cy="botonido"]').click();
    cy.get(".ant-picker").type("03-May-19{enter}");
    cy.get(
      '.ant-slider-step > [style="left: 80%; transform: translateX(-50%);"]'
    ).click();
    cy.contains("23.712");
  });
});
