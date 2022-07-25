describe("news", () => {
  it("user can read and navigate news on mobile", () => {
    //change to mobile view
    cy.viewport("iphone-xr");

    // open page
    cy.visit("/");
    // click on news item
    //find menu button
    cy.wait(700);
    // Toggle menu
    cy.findByTestId("menuBtn").click();
    cy.wait(700);
    cy.get(".col-articleList").should("have.class", "isInactive");
    cy.findByTestId("menuBtn").click();
    cy.wait(700);
    cy.get(".col-articleList").should("have.class", "isActive");
    // get article and check it displays
    cy.wait(700);
    cy.findByTestId("articleSummary0").click();
    cy.get("article").should("be.visible");
  });
});
