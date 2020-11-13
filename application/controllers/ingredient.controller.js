const Ingredient = require("../models/ingredient.model.js");

// Create and Save a new Ingredient
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Ingredient
  const ingredient = new Ingredient({
    ingredientID: req.body.ingredientID,
    ingredientName: req.body.ingredientName,
    price: req.body.price,
  });

  // Save Ingredient in the database
  Ingredient.create(ingredient, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ingredient.",
      });
    else res.send(data);
  });
};

// Retrieve all Ingredients from the database.
exports.findAll = (req, res) => {
  var withoutPrice =
    req.query.price !== undefined && req.query.price.toLowerCase() === "false";
  if (withoutPrice) {
    Ingredient.getWithoutPrice((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ingredients.",
        });
      else res.send(data);
    });
  } else {
    Ingredient.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ingredients.",
        });
      else res.send(data);
    });
  }
};

// Find a single Ingredient with a ingredientId
exports.findOne = (req, res) => {
  var withoutPrice =
    req.query.price !== undefined && req.query.price.toLowerCase() === "false";
  if (withoutPrice) {
    Ingredient.findByIdWithoutPrice(req.params.ingredientId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ingredient with id ${req.params.ingredientId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Ingredient with id " + req.params.ingredientId,
          });
        }
      } else res.send(data);
    });
  } else {
    Ingredient.findById(req.params.ingredientId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ingredient with id ${req.params.ingredientId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Ingredient with id " + req.params.ingredientId,
          });
        }
      } else res.send(data);
    });
  }
};

// Update a Ingredient identified by the ingredientId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  Ingredient.updateById(
    req.params.ingredientId,
    new Ingredient(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Ingredient with id ${req.params.ingredientId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Ingredient with id " + req.params.ingredientId,
          });
        }
      } else res.send(data);
    }
  );
};

exports.buy = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  var total = 0;
  var flag = false;
  req.body.ingredients.forEach((ingredient, i, arr) => {
    Ingredient.findById(ingredient.id, (err, data) => {
      if (!flag) {
        if (err) {
          flag = true;
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Ingredient with id ${ingredient.id}.`,
            });
          } else {
            res.status(500).send({
              message: "Error buying Ingredient with id " + ingredient.id,
            });
          }
        } else {
          total += ingredient.amount * data.Price;
          if (i === arr.length - 1) {
            if (req.body.money < total) {
              res.status(200).send({
                status: "Gagal",
                money: total - req.body.money,
              });
            } else {
              res.status(200).send({
                status: "Berhasil",
                money: req.body.money - total,
              });
            }
          }
        }
      }
    });
  });
};
