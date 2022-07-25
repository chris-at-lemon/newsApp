describe("news", () => {
  it("user can search news articles", () => {
    // open page
    cy.visit("/");
    // click on news item
    cy.wait(700);
    // type search terms
    cy.findByRole("textbox").type("Satoshi");
    cy.get(".articleTitle").should("contain", "Satoshi");

    // reset search
    cy.findByRole("button", { name: /reset search/i }).click();
    cy.wait(700);

    // type search terms
    cy.findByRole("textbox").type("Lebanon");
    cy.get(".articleTitle").should("contain", "Lebanon");
  });
});
