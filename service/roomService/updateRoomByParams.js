const db = require('../../dataBase').getInstance();
const {DB_TABLES} = require('../../constant');

module.exports = (paramsObject, findObject) => {
    const RoomModel = db.getModel(DB_TABLES.ROOM);

    RoomModel.update(paramsObject, {
        where: findObject
    })
};
