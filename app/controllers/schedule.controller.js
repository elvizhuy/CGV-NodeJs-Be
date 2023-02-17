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
        res.



    } catch (e) {
        res.status(401).send('Sorry no date found')
    }
}

module.exports = {getScheduleByDate}
