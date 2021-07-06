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

    static async getSongById(req, res) {
        try {
            const song = await songModel.findOne({
                where: {
                    id: req.params.id
                },
                include: [
                    'bands', 'albums'
                ]
            });
            if(!song){
                return res.status(401).json({
                    status: 401,
                    error: 'Song not found'
                })
            }
        return res.json({
            status: 200,
            data: song
        })
        } catch {
                return res.status(500).json({
                    status: 500,
                    error
                });
            }
        }
    }

module.exports = Song;