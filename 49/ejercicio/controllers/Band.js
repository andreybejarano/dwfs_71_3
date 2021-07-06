const bandModel = require('../models/band');

class Band {
    static async getAll(req, res) {
        try {
            const bands = await bandModel.findAll();
            return res.json({
                status: 200,
                data: bands
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error
            });
        }
    }
}

module.exports = Band;