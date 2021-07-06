const songModel = require('../models/song');

class Song {
    static async getAll(req, res) {
        try {
            const songs = await songModel.findAll();
            return res.json({
                status: 200,
                data: songs
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error
            });
        }
    }
}

module.exports = Song;