const router = require('express').Router();
const {room} = require('../../controllers');
// const {room: roomMiddleware,token } = require('../../middleware');

router.post('/',room.createRoom);

module.exports = router;
