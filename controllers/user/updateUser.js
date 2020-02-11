module.exports = async (req,res)=> {

    try{

        const parameters = req.body;

        const {user_id} = req.params;

        const dataBase = require('../../dataBase').getInstance();

        const UserModel = dataBase.getModel('User');

        await UserModel.update(parameters,{
            where:{
                id: user_id
            }
        });

        res.json('User was updated');
    }
    catch (e) {
        res.status(400).json(e.message);
    }
};
