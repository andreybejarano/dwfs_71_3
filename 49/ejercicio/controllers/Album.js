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

    static async getById(req, res) {
        
        try {
            const album = await albumsModel.findOne(
                {
                    where:{
                       id: req.params.id 
                    },
                    include:[
                        'bands'
                    ]
                }
            );

            if (!album){
                return res.status(401).json({
                    status: 401,
                    error: 'Album not found'
                })
            };

            return res.json({
                status: 200,
                data: album
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