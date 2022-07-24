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
    cy.findByTestId("articleSummary3").click();
    // click mark as read
    cy.findByRole("button", { name: /mark as read/i }).click();
    // click to set fav
    cy.findByRole("button", { name: /set as favourite/i }).click();
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
