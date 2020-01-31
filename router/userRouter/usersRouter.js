const router = require('express').Router();
const {user} = require('../../controllers');

router.post('/', user.createUser);

module.exports = router;
