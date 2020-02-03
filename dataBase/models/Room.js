module.exports = (sequelize,DataTypes) =>{
    const Room = sequelize.define('Room', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        square: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        status_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },{
        tableName: 'rooms',
        timestamps: false
    });

    const RoomStatus = sequelize.import('./RoomStatus.js');

    Room.belongsTo(RoomStatus,{foreignKey:'status_id'});


    return Room;

};
