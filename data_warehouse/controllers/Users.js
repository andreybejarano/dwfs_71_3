const { StatusCodes } = require('http-status-codes');

const userModel = require('../models/user');
const roleModel = require('../models/roles');

class UserController {
    static async create(req, res) {
        const {
            firstname,
            lastname,
            email,
            password,
            role
        } = req.body;
        try {
            const roleFound = await roleModel.findOne({ _id: role });
            if (!roleFound) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    status: StatusCodes.BAD_REQUEST,
                    error: 'Role ID not found'
                });
            }
            const userCreated = new userModel({
                firstname,
                lastname,
                email,
                password,
                roles_id: role
            });
            await userCreated.save();
            return res.status(StatusCodes.CREATED).json({
                status: StatusCodes.CREATED,
                message: 'User created'
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async getAll(req, res) {
        try {
            const users = await userModel.find().populate('roles_id');
            const data = users.map(user => {
                return {
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    role: {
                        id: user.roles_id._id,
                        name: user.roles_id.name
                    }
                }
            });
            return res.json({
                status: StatusCodes.OK,
                data
            });
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
        }
    }
}

module.exports = UserController;