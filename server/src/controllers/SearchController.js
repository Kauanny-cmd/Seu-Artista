const Artist = require('../models/Artist');
const parseStringAsArray = require('../utils/parseStringAsArray');

class SearchController {
    async find (request, response) {
        const { name, genres } = request.query;

        let genresArray = [];

        if (genres) {
            genresArray = parseStringAsArray(genres);
        }

        let artists = await Artist.find({
            $or: [
                {name},
                {
                  genres: { $in: genresArray }
                }
            ]
        });

        if(artists.length === 0) {
            artists = await Artist.find();
        }

        return response.json(artists);
    }
}

const searchController = new SearchController();

module.exports = searchController;