const router = require('express').Router();
const {user , pages} = require('../../controllers');

router.post('/', user.createUser);

router.get('/', pages.register);
