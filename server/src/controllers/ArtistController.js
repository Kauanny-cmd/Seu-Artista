const Artist = require('../models/Artist');
const parseStringAsArray = require('../utils/parseStringAsArray');

class ArtistController {
    async create (request, response) {
        let { portfolio = null, genres } = request.body;

        genres = parseStringAsArray(genres);
        
        if (portfolio) {
            portfolio = parseStringAsArray(portfolio);
        }

        const newArtist = await Artist.create({
            ...request.body,
            portfolio,
            genres
        });

        return response.json(newArtist);
    }

    async index (request, response) {
        const artists = await Artist.find();

        return response.json(artists);
    }

    async findOne (request, response) {
        const { id } = request.params;

        const artist = await Artist.findOne({
            userId: id
        });

        return response.json(artist);
    }

    async update (request, response) {
        const { id } = request.params;
        const newValues = request.body;

        await Artist.findByIdAndUpdate({ _id: id }, newValues);
        
        const artist = await Artist.findById({ _id: id });

        return response.status(200).json(artist);
    }

    async delete (request, response) {
        const { id } = request.params;

        await Artist.findByIdAndDelete({ _id: id });

        return response.status(200).send("Artist deleted successfully!");
    }
}

const artistController = new ArtistController();

module.exports = artistController;