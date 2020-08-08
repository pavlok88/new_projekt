const {User} = require('./../models');

class UserController {
    createUser = async (req, res, next) => {
        try {
            const createdUser = await User.create(req.body);
            res.send(createdUser);
        } catch (e) {
            return res.status(418).send("I'm teapoat");
        }
    };
    deleteUser = async (req, res, next) => {
        try {
            const deletedUser = await User.destroy({
                where: {id: req.params.id}
            });
            if (deletedUser) {
                return res.send('User was Deleted');
            }
            return res.status(404).send('Error: not deleted')
        } catch (e) {
            return res.status(418).send("I'm teapoat");
        }
    };
    updateUser = async (req, res, next) => {
        try {
            const [updRowsCount,updRows] = await User.update(res.body,
                {
                    where: {
                        id:req.params.id
                    }
                });
            if (updRowsCount) {
                return res.send(updRows[0].get());
            }
            return res.status(404).send('Error: not Updeted')
        } catch (e) {
            return res.status(418).send("I'm teapoat");
        }
    };
    getUser = async (req, res, next) => {
        try {
            const getsUser = await User.findByPk({id: req.params.id})
        } catch (e) {
            return res.status(418).send("I'm teapoat");
        }
    }
};
module.exports = new UserController();