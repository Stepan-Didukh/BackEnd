module.exports = roomObject => {
    const {price, square, amount, nameRoom, about, park} = roomObject;

    if (!price || !square || !amount || !nameRoom || !about || !park) {
        throw new Error('roomMiddleware object is not valid')
    }

};
