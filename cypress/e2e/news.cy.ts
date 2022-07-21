describe("news", () => {
  it("user can read news", () => {
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
    //change to mobile view
    cy.viewport("iphone-xr");
    //find menu button
    cy.findByTestId("menuBtn").click();
  });
});
