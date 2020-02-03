const router = require('express').Router();
const {room} = require('../../controllers');
const {room: roomMiddleware } = require('../../middleware');

router.post('/',roomMiddleware.checkValidityRoomMddleware, room.createRoom);

module.exports = router;
