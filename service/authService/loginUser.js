const dataBase = require('../../dataBase').getInstance();
const bcrypt = require('bcryptjs');
// const {oauthService}= require('../../service');
module.exports = async (email, password) => {
    const UserModel = dataBase.getModel('User');

    let user = await UserModel.findOne({
        where: {
            email
        },
    });

    if (!user) {
        throw new Error('Incorrect values');
    }

    const correctPassword = await new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            return resolve(result);
        });
    });
    if (!correctPassword) throw new Error('Wrong password');

    // const  tokens = tokinazer();


    // oauthService.insertTokenPair(
    //     {
    //         user_id: userMiddleware.id,...tokens
    //     });

    return user;
};
