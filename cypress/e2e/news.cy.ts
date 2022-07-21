describe("news", () => {
  it("user can read news", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(300);
    cy.findByTestId("articleSummary6").click();
    // click on read more
    cy.findByText(/click me/i).click();
    cy.findByTestId("articleSummary3").click();
    // click on read more
    cy.findByText(/click me/i).click();
    cy.findByTestId("articleSummary1").click();
    // click on read more
    cy.findByText(/click me/i).click();
  });
});
