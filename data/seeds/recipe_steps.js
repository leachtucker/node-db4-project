
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        { step_number: 1, instructions: "Cook eggs over pan at medium-heat. Flip both sides for an even cook. Or, flip only one side for sunnyside-up style.", recipe_id: 1 },
        { step_number: 2, instructions: "Cook bacon over pan at medium-high heat. Flip until done.", recipe_id: 1 },
        { step_number: 3, instructions: "Toast bread in toaster with setting of 6.", recipe_id: 1 },
        { step_number: 4, instructions: "Serve.", recipe_id: 1 },
        { step_number: 1, instructions: "Boil eggs for 12 minutes.", recipe_id: 2 },
        { step_number: 2, instructions: "Add 3 tablespoons of mayonnaise and mustard to mixing container.", recipe_id: 2 },
        { step_number: 3, instructions: "Add 2 tablespoons of relish.", recipe_id: 2 },
        { step_number: 4, instructions: "Add 1 tablespoon of paprika.", recipe_id: 2 },
        { step_number: 5, instructions: "Slice eggs down middle.", recipe_id: 2 },
        { step_number: 6, instructions: "Take the cooke yokes and add them to the mixing container.", recipe_id: 2 },
        { step_number: 7, instructions: "Stir mix for 4 minutes.", recipe_id: 2 },
        { step_number: 8, instructions: "Add the mix to the eggs.", recipe_id: 2 },
        { step_number: 9, instructions: "Serve.", recipe_id: 2 },
      ]);
    });
};
