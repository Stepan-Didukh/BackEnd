const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const Room = dataBase.getModel('Room');
        const id = req.params.room_id;

        await Room.destroy({
            where: {
                id:id
            }
        });

        res.json('Room was deleted');

    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
