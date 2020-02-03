module.exports = (sequelize,DataTypes) =>{
    const RoomStatus = sequelize.define('RoomStatus', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },{
        tableName: 'room_status',
        timestamps: false
    });

    return RoomStatus;
};
