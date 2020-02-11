const router = require('express').Router();
const {room} = require('../../controllers');
const {room: roomMiddleware } = require('../../middleware');

router.post('/',roomMiddleware.checkValidityRoomMddleware, room.createRoom);

router.get('/findAll', room.findAll);

router.delete('/:room_id',room.deleteRoom);

router.patch('/:room_id',room.updateRoom);

module.exports = router;
