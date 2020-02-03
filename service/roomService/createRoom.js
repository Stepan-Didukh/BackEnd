const dataBase = require('../../dataBase').getInstance();

module.exports = async registerData  => {
    const UserModel = dataBase.getModel('Room');
    const createUser = await UserModel.create(registerData );
    return createUser && createUser.dataValues;
};
