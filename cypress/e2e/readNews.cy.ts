describe("news", () => {
  it("user can read news", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(300);
    cy.findByTestId("articleSummary1").click();
    cy.findByTestId("articleSummary3").click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByTestId("articleSummary1").click();
    cy.findByRole("button", { name: /prev/i }).click();
    cy.findByRole("button", { name: /prev/i }).click();
    cy.findByTestId("articleSummary3").click();
    // Open new tab to read article
    // cy.findByRole("link", { name: /read more/i }).click();
  });
});
