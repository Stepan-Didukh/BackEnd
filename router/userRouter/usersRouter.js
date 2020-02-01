const router = require('express').Router();
const {user} = require('../../controllers');
const {user: userMiddleware,token } = require('../../middleware');

router.post('/',userMiddleware.checkUserValidityMiddleware, user.createUser);

module.exports = router;
