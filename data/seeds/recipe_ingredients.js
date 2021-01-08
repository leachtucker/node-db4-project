
exports.seed = function(knex) {
  return knex('recipe_ingredients').truncate()
    .then(function () {
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, ingredient_quantity: 2 },
        { recipe_id: 1, ingredient_id: 2, ingredient_quantity: 2 },
        { recipe_id: 1, ingredient_id: 3, ingredient_quantity: 1 },
        { recipe_id: 2, ingredient_id: 1, ingredient_quantity: 6 },
        { recipe_id: 2, ingredient_id: 4, ingredient_quantity: 3 },
        { recipe_id: 2, ingredient_id: 6, ingredient_quantity: 3 },
        { recipe_id: 2, ingredient_id: 5, ingredient_quantity: 2},
        { recipe_id: 2, ingredient_id: 7, ingredient_quantity: 1 },
      ]);
    })
}

