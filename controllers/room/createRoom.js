const {roomsService} = require('../../service');
const {room} = require('../../controllers');
const {ROOM_STATUS} = require('../../constant');
const {resolve} = require('path');
const fs = require('fs-extra');
const uuid = require('uuid').v1();

module.exports = async (req, res) => {
    try {
        const roomToCreate = req.body;
        // const fileName = req.files.fileName;
        // console.log(fileName);

        const [photo] = req.photos;
        const appRoot = global.appRoot;

        const {room_id} = req.body;

        roomToCreate.status_id = ROOM_STATUS.NOT_RESERVED;

//
        // fileName.mv('tmp/'+ fileName.name, function (error){
        //     if (error){
        //         console.log('To pzdc ne robe');
        //         console.log(error);
        //     }else {
        //         console.log("WSE ZBS");
        //     }
        // });

//

        // console.log(dirForFileUpload);

        // fs.mkdir(dirForFileUpload,{},async (err)=>{
            // console.log(err);
            // await file.mv(resolve(dirForFileUpload,fileName.name))
        // });
        const {id} = await roomsService.createRoom(roomToCreate, room_id);

        const photoDir = resolve(appRoot,'public','room',`${id}`,'photos');
        const photoExtensive = photo.name.split('.').pop();
        const photoPath = resolve(photoDir,`${uuid}.${photoExtensive}`);
        await fs.mkdirSync(resolve(photoDir),{recursive : true});
        await photo.mv(photoPath);

        await roomsService.updateRoomByParams({photo_path:photoPath},{id});
        res.json('created');
        res.render('login');


    } catch (e) {
        res.status(400).json(e.message);
    }
};


