// Import db from its config file
const db = require('../../data/db-config');

async function getRecipes() {
    return await db('recipes');
}

async function getShoppingList(recipe_id) {
    return await db('ingredients as i')
        .innerJoin('recipe_ingredients as ri', 'i.id', 'ri.ingredient_id')
        .where({ recipe_id })
        .select('i.name', 'ri.ingredient_quantity as quantity');
}

async function getInstructions(recipe_id) {
    return await db('recipe_steps')
        .where({ recipe_id })
        .select('id', 'step_number', 'instructions');
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}