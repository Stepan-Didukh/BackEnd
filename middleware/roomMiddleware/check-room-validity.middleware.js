const {roomValidators} = require ('../../validators');

module.exports = (req,res,next) => {

    try {
        const room = req.body;
        // roomValidators.newRoomValidator(room);

        next()
    }   catch (e) {

        res.status(400).json(e.message);
    }

};
