const albumsModel = require('../models/album');

class Album {
    static async getAll(req, res) {
        try {
            const albums = await albumsModel.findAll();
            return res.json({
                status: 200,
                data: albums
            })

        } catch (error) {
            return res.status(500).json({
                status: 500,
                error
            })
        }
    }
}

module.exports = Album;