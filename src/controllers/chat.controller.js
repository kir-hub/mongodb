const Chat = require('./../models/chat.model');

module.exports.postChat = async(req,res,next) => {
    try{
        console.log('ok')
        const chat = new Chat(req.body);
        const newChat = await chat.save();
        if(newChat) { return res.status(201).send(newChat);}
        res.status(400).send('Bad request');
    } catch(e){
        console.log(e)
        next(e);}
};
module.exports.getChat = async(req,res,next) => {
    try{
        const chat = await Chat.findById(req.params.id);
        if(chat) { return res.status(201).send(chat);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};
module.exports.updateChat = async(req,res,next) => {
    try{
        const {params: {id}, body} = req;
        const updateChat = await Chat.findByIdAndUpdate(id,body);
        if(updateChat) { return res.status(201).send(updateChat);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};
module.exports.deleteChat = async(req,res,next) => {
    try{
        const {params : {id}} = req;
        const deletedChat = await Chat.findByIdAndDelete(id);
        if(deletedChat) { return res.status(201).send(deletedChat);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};