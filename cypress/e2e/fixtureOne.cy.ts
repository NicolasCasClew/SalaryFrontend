describe("template spec", () => {
  it("intercept works", () => {
    cy.stub("http://localhost:8080/processNumbers").as("spyRequest");

    cy.visit("http://localhost:3000/");
    cy.get("@spyRequest").then((req: any) => cy.log(req.body));
    cy.get("@spyRequest").should("have.been.calledWith", {
      expertise: 0,
      responsibility: 1,
      hoursPerWeek: 40,
      isEmployee: true,
      millis: 0,
    });

    cy.contains("17.100");
  });
});
