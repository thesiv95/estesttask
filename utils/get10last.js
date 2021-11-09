const { Op } = require('sequelize');
const User = require('../models/User');

const get10Last = async () => {
    try {

        let recordsQuantity = await User.count();

        const startPosition = recordsQuantity - 9;

        const records = await User.findAll({
            where: {
                id: {
                    [Op.gte]: startPosition
                }
            }
        });
        return records;
    } catch (error) {
        throw new Error('Get 10 last error', error);
    }
};

module.exports = get10Last;