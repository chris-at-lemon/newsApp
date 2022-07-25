describe("news", () => {
  it("user can read news", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(300);
    // get article
    cy.findByTestId("articleSummary1").click();
    // check it's visible
    cy.get("article").should("be.visible");
    // get article
    cy.findByTestId("articleSummary3").click();
    // check it's visible
    cy.get("article").should("be.visible");
    // navigate pages
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    // get article
    cy.findByTestId("articleSummary1").click();
    // check it's visible
    cy.get("article").should("be.visible");
    // navigate pages
    cy.findByRole("button", { name: /prev/i }).click();
    cy.findByRole("button", { name: /prev/i }).click();
    // get article
    cy.findByTestId("articleSummary3").click();
    // check it's visible
    cy.get("article").should("be.visible");
    // Open new tab to read article
    // cy.findByRole("link", { name: /read more/i }).click();
  });
});
