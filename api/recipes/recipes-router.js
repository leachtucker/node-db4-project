// Import express and DB helper functions
const express = require('express');
const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the database." })
        })
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the database." })
        })
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the database." })
        })
});

// Export
module.exports = router;