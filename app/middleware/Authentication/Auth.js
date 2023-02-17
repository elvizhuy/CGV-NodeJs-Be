const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.header("token")
    try {
        const decode = jwt.verify(token, 'daniel-0908')
        if (decode) {
            req.user = decode
            // res.status(201).send(req.user)
            next()
        } else {
            res.status(401).send({message: "You not login yet!"})
        }
    } catch (e) {
        res.status(401).send(e)
    }

}

module.exports = {authenticate}