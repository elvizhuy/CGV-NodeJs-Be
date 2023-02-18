const {users} = require('../../../models')

const checkExist = async (req, res, next) => {
    const {email} = req.body

    try {
        const usersExist = await users.findOne({
            where: {email}
        })
        if (!usersExist) {
            next();
        } else {
            res.status(400).send({
                message: 'User exist in systems'
            })
        }
    } catch (e) {
        res.status(500).send({
            message: "Server is Error !"
        })
    }

}


module.exports = {
    checkExist,
}