const express = require('express');

const ArtistController = require('./controllers/ArtistController');
const SearchController = require('./controllers/SearchController');

const routes = express.Router();

routes.post('/artist', ArtistController.create);
routes.get('/artists', ArtistController.index);
routes.put('/artist/:id', ArtistController.update);
routes.delete('/artist/:id', ArtistController.delete);

routes.get('/search', SearchController.find);

module.exports = routes;