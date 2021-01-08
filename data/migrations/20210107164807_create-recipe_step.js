
exports.up = function(knex) {
    return knex.schema
        .createTable('recipe_steps', table => {
            table.increments('id');
            table.integer('step_number').notNullable();
            table.text('instructions', 128).notNullable();
            table.integer('recipe_id')
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_steps');
};
