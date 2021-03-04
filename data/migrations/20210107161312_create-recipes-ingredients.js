
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
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table.integer('ingredient_id')
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');

            table.float('ingredient_quantity').notNullable();
        })
        .raw('PRAGMA foreign_keys = ON'); // MUST use this rule for SQL to enforce onDelete and onUpdate rules.
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
