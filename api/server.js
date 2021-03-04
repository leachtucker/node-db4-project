// Import express and routers
const express = require('express');
const recipesRouter = require('./recipes/recipes-router');
const ingredientsRouter = require('./ingredients/ingredients-router');

const server = express();

server.use(express.json());

// ROUTERS
server.use('/api/recipes', recipesRouter);
server.use('/api/ingredients', ingredientsRouter);

// Export
module.exports = server;