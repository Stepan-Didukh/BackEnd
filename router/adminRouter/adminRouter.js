const router = require('express').Router();
const {admin} = require('../../controllers');

router.post('/', admin.createAdmin);

module.exports = router;
