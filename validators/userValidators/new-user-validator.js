module.exports = userObject => {
    const {name,surname, email, password} = userObject;

    if (!name || !surname || !email || !password) {
        throw new Error('userMiddleware object is not valid')
    }

};
