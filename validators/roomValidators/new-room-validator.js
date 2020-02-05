module.exports = roomObject => {
    const {price,square,amount} = roomObject;

    if (!price || !square || !amount) {
        throw new Error('roomMiddleware object is not valid')
    }

};
