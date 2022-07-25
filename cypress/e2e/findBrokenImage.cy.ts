describe("news", () => {
  it("find broken images", () => {
    // open page
    cy.visit("/");

    // Loop through pages to check images
    let i = 0;
    for (i = 0; i < 9; i++) {
      cy.wait(700);
      // Find images
      cy.get("img").each(($img) => {
        // Scroll into view to ensure visibility.
        cy.wrap($img).scrollIntoView().should("be.visible");

        // Check height and width to ensure presence
        expect($img[0].naturalWidth).to.be.greaterThan(0);
        expect($img[0].naturalHeight).to.be.greaterThan(0);
      });

      // go to next page
      cy.findByRole("button", { name: /next/i }).click();
    }
  });
});
