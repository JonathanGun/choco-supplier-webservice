const sql = require("./db.js");

// constructor
const Ingredient = function (ingredient) {
  this.ingredientID = ingredient.ingredientID;
  this.ingredientName = ingredient.ingredientName;
  this.price = ingredient.price;
};

Ingredient.create = (newIngredient, result) => {
  sql.query("INSERT INTO ingredient SET ?", newIngredient, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created ingredient: ", { id: res.insertId, ...newIngredient });
    result(null, { id: res.insertId, ...newIngredient });
  });
};

Ingredient.findById = (ingredientID, result) => {
  sql.query(
    `SELECT * FROM ingredient WHERE ingredientID = ${ingredientID}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found ingredient: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Ingredient with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Ingredient.findByIdWithoutPrice = (ingredientID, result) => {
  sql.query(
    `SELECT IngredientID, IngredientName FROM ingredient WHERE ingredientID = ${ingredientID}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found ingredient: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Ingredient with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Ingredient.getAll = (result) => {
  sql.query("SELECT * FROM ingredient", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("ingredients: ", res);
    result(null, res);
  });
};

Ingredient.getWithoutPrice = (result) => {
  sql.query(
    "SELECT IngredientID, IngredientName FROM ingredient",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      // console.log("ingredients: ", res);
      result(null, res);
    }
  );
};

Ingredient.updateById = (id, ingredient, result) => {
  sql.query(
    "UPDATE ingredient SET ingredientName = ?, price = ? WHERE ingredientID = ?",
    [ingredient.ingredientName, ingredient.price, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Ingredient with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated ingredient: ", { id: id, ...ingredient });
      result(null, { id: id, ...ingredient });
    }
  );
};

Ingredient.remove = (id, result) => {
  sql.query("DELETE FROM ingredient WHERE ingredientID = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Ingredient with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted ingredient with id: ", id);
    result(null, res);
  });
};

Ingredient.removeAll = (result) => {
  sql.query("DELETE FROM ingredient", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} ingredients`);
    result(null, res);
  });
};

module.exports = Ingredient;
