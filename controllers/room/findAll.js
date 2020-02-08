const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const RoomModel = dataBase.getModel('Room');

        const findAll = await RoomModel.findAll();

        console.log(findAll);

        if (!findAll.length) {
            throw new Error('users not found');
        }

        res.json(findAll);
    } catch (e) {
        res.status(400).json(e.message)
    }
};