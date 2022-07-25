describe("news", () => {
  it("user can mark read status and set favs", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(300);
    cy.findByTestId("articleSummary1").click();
    // click mark as read
    cy.findByRole("button", { name: /mark as read/i }).click();
    // click to set fav
    cy.findByRole("button", { name: /set as favourite/i }).click();
    // check status
    cy.findByTestId(
      "Samsung says fingerprint security fix is coming as early as next week - The VergeisRead"
    ).should("be.visible");
    cy.findByTestId(
      "Samsung says fingerprint security fix is coming as early as next week - The VergeisFav"
    ).should("be.visible");
    // click on news item
    cy.findByTestId("articleSummary3").click();
    // click mark as read
    cy.findByRole("button", { name: /mark as read/i }).click();
    // click to set fav
    cy.findByRole("button", { name: /set as favourite/i }).click();
    cy.findByTestId(
      "Barcelona v Real Madrid called off following unrest in Catalonia - The GuardianisRead"
    ).should("be.visible");
    cy.findByTestId(
      "Barcelona v Real Madrid called off following unrest in Catalonia - The GuardianisFav"
    ).should("be.visible");
    // go to next page
    cy.findByRole("button", { name: /next/i }).click();
    // click on news item
    cy.findByTestId("articleSummary3").click();
    // click mark as read
    cy.findByRole("button", { name: /mark as read/i }).click();
    // click to set fav
    cy.findByRole("button", { name: /set as favourite/i }).click();
  });
});
