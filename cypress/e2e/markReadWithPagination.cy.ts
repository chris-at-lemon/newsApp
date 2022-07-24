describe("news", () => {
  it("user can mark read status and set favs", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(1000);
    cy.findByTestId("articleSummary4").click();
    // click mark as read
    cy.findByRole("button", { name: /mark as read/i }).click();
    // click to set fav
    cy.findByRole("button", { name: /set as favourite/i }).click();
    cy.wait(1000);
    // go to next page
    cy.findByRole("button", { name: /next/i }).click();
    cy.findByRole("button", { name: /next/i }).click();
    cy.wait(1000);
    // go to prev page
    cy.findByRole("button", { name: /prev/i }).click();
    cy.findByRole("button", { name: /prev/i }).click();
    cy.findByTestId(
      "Lady Gaga falls off Las Vegas concert stage - Fox NewsisRead"
    ).should("be.visible");
    cy.findByTestId(
      "Lady Gaga falls off Las Vegas concert stage - Fox NewsisFav"
    ).should("be.visible");
  });
});
