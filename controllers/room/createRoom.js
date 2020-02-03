const {roomsService} = require('../../service');
const {ROOM_STATUS} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const creatingData = req.body;
        const appRoot = global.appRoot;
        const roomToCreate = req.body;
        const {room_id} = req.body;

        roomToCreate.status_id = ROOM_STATUS.ACTIVE;

        await roomsService.createRoom(roomToCreate, room_id);


        res.render('login');

    } catch (e) {
        res.status(400).json(e.message);
    }
};


