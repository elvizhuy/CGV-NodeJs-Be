const {Op} = require("sequelize");
const {schedules} = require("../../models")

const getScheduleByDate = async (req, res) => {
    const {scheduleDate} = req.query
    console.log(scheduleDate)
    try {
        const schedulesByDate = await schedules.findAll({
            where: {
                start_date: {
                    [Op.substring]: `${scheduleDate}`
                }
            }
        })
<<<<<<< HEAD
        res.status(201).send(schedulesByDate)
=======


>>>>>>> 67ce3f0834f79dcf974e163b434c2b773053a329

    } catch (e) {
        res.status(401).send('Sorry no date found')
    }
}

module.exports = {getScheduleByDate}
