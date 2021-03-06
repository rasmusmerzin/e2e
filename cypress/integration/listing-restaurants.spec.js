describe("Listing Restaurants", () => {
  let config;

  beforeEach(async () => (config = await cy.fixture("config")));

  it("shows restaurants from the server", () => {
    const sushiPlace = "Sushi Place";
    const pizzaPlace = "Pizza Place";

    cy.server({ force404: true });

    cy.route({
      method: "GET",
      url: config.apiUrl + "/restaurants",
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    });

    cy.visit("/");
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
