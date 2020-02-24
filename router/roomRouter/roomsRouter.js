const router = require('express').Router();
const {room} = require('../../controllers');
const {room: roomMiddleware,file: filesMiddleware } = require('../../middleware');


router.post('/',roomMiddleware.checkValidityRoomMddleware,

    filesMiddleware.checkFileMiddleware,
    room.createRoom,);

router.get('/findAll', room.findAll);

router.delete('/:room_id',room.deleteRoom);

router.patch('/:room_id',room.updateRoom);

module.exports = router;
