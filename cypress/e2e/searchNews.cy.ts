describe("news", () => {
  it("user search news articles", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(700);
    // type search terms
    cy.findByRole("textbox").type("Satoshi Nakaboto");
    cy.wait(700);
    // reset search
    cy.findByRole("button", { name: /reset search/i }).click();
    cy.wait(700);
    // type search terms
    cy.findByRole("textbox").type("Hong Kong");
    cy.wait(700);
    // reset search
    cy.findByRole("button", { name: /reset search/i }).click();
  });
});
