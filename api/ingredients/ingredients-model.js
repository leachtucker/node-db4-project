// Import db from its config file
const db = require('../../data/db-config');

// Queries the db for recipes that use the given ingredient
async function getRecipes(ingredient_id) {
    return await db('recipe_ingredients as ri')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        .join('recipes as r', 'r.id', 'ri.recipe_id' )
        .where({ ingredient_id })
        .select('i.name as ingredient', 'r.name as recipe', 'r.id as recipe_id');
}

// Export
module.exports = {
    getRecipes
}