
exports.seed = function(knex) {
  return knex('ingredients').truncate()
    .then(function() {
      return knex('ingredients').insert([
        { name: "Egg" },
        { name: "Bacon" },
        { name: "Wheat Bread" },
        { name: "Mayonnaise" },
        { name: "Sweet Pickle Relish" },
        { name: "Mustard" },
        { name: "Paprika" },
      ])
    });
};
