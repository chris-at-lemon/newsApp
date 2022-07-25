describe("news", () => {
  it("find broken images", () => {
    // open page
    cy.visit("/");
    // Find images
    cy.get("img").each(($img) => {
      // Scroll into view to ensure visibility.
      cy.wrap($img).scrollIntoView().should("be.visible");

      // Check height and width to ensure presence
      expect($img[0].naturalWidth).to.be.greaterThan(0);
      expect($img[0].naturalHeight).to.be.greaterThan(0);
    });
  });
});
