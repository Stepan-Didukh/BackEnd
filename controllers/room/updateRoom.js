module.exports = async (req,res)=> {

    try{

        const parameters = req.body;

        const {room_id} = req.params;

        const dataBase = require('../../dataBase').getInstance();

        const RoomModel = dataBase.getModel('Room');

        await RoomModel.update(parameters,{
            where:{
                id: room_id
            }
        });

        res.json('Room was updated');
    }
    catch (e) {
        res.status(400).json(e.message);
    }
};
