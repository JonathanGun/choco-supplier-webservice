module.exports = (app) => {
  const ingredients = require("../controllers/ingredient.controller.js");

  // Create a new Ingredient
  app.post("/", ingredients.create);

  // Retrieve all Ingredients
  app.get("/", ingredients.findAll);

  // Retrieve a single Ingredient with ingredientId
  app.get("/:ingredientId", ingredients.findOne);

  app.post("/buy", ingredients.buy);
};
