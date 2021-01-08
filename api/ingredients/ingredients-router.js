// Import express and db helper functions
const express = require('express');
const Ingredients = require('./ingredients-model');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;

    Ingredients.getRecipes(id)
        .then(results => {
            res.status(200).json(results);
        })
        .catch(() => {
            res.status(500).json({ message: "There has been an error with the database." })
        });
});

// Export router
module.exports = router;