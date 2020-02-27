module.exports = async (req, res) => {
    const {ROOM_STATUS} = require('../../constant');
    const {roomsService} = require('../../service');

    try {

        const dataToUpdate = req.params;

        dataToUpdate.status_id = ROOM_STATUS.RESERVED;
        const {room_id} = req.params;
        const dataBase = require('../../dataBase').getInstance();
        const RoomModel = dataBase.getModel('Room');

        await RoomModel.update(dataToUpdate, {
            where: {
                id: room_id
            }
        });

        res.json('Room was reserved');
    } catch (e) {
        res.status(400).json(e.message);
    }
};
