
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('id'); // Primary key
            table.text('name', 128).notNullable().unique();
        })
        .createTable('ingredients', table => {
            table.increments('id');
            table.text('name', 128).notNullable().unique();
        })
        .createTable('recipe_ingredients', table => {
            table.integer('recipe_id')
                .references('id')
                .inTable('recipes')
                .notNullable();

            table.integer('ingredient_id')
                .references('id')
                .inTable('ingredients')
                .notNullable();

            table.float('ingredient_quantity').notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
