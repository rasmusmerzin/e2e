describe("Creating a Restaurant", () => {
  let config;

  beforeEach(async () => (config = await cy.fixture("config")));

  it("allows adding restaurants", () => {
    const restaurantId = 27;
    const restaurantName = "Sushi Place";

    cy.server({ force404: true });

    cy.route({
      method: "GET",
      url: config.apiUrl + "/restaurants",
      response: [],
    });

    cy.route({
      method: "POST",
      url: config.apiUrl + "/restaurants",
      response: { id: restaurantId, name: restaurantName },
    }).as("addRestaurant");

    cy.visit("/");

    cy.get('[placeholder="Add Restaurant"]').type(restaurantName);
    cy.contains("Add").click();

    cy.wait("@addRestaurant")
      .its("requestBody")
      .should("deep.equal", { name: restaurantName });

    cy.contains(restaurantName);
  });
});
