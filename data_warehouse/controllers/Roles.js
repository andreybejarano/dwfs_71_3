const { StatusCodes } = require('http-status-codes');

const roleModel = require('../models/roles');

class RolesController {
    static async create(req, res) {
        const { name } = req.body;
        try {
            const roleCreated = new roleModel({ name });
            await roleCreated.save();
            return res.status(StatusCodes.CREATED).json({
                status: StatusCodes.CREATED,
                messa: 'Role created'
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }

    static async getAll(req, res) {
        try {
            const roles = await roleModel.find();
            const data = roles.map(role => ({ id: role._id, name: role.name }));
            return res.json({
                status: StatusCodes.OK,
                data
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }
}

module.exports = RolesController;