describe("news", () => {
  it("read and fav status persist through page navigation", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(700);

    // Load article into view
    cy.findByTestId("articleSummary4").click();

    // do a search
    cy.wait(700);
    cy.findByRole("textbox").type("nasa");

    // mark article in view as read and fav
    cy.wait(700);
    cy.findByRole("button", { name: /mark as read/i }).click();
    cy.findByRole("button", { name: /set as favourite/i }).click();

    // reset search
    cy.wait(700);
    cy.findByRole("button", { name: /reset search/i }).click();

    // check status has persisted
    cy.findByTestId(
      "Lady Gaga falls off Las Vegas concert stage - Fox NewsisRead"
    ).should("be.visible");
    cy.findByTestId(
      "Lady Gaga falls off Las Vegas concert stage - Fox NewsisFav"
    ).should("be.visible");
  });
});
