const User = require('./../models/user.model');

module.exports.postUser = async(req,res,next) => {
    try{
        console.log('ok')
        const user = new User(req.body);
        const newUser = await user.save();
        if(newUser) { return res.status(201).send(newUser);}
        res.status(400).send('Bad request');
    } catch(e){
        console.log(e)
        next(e);}
};
module.exports.getUser = async(req,res,next) => {
    try{
        const user = await User.findById(req.params.id);
        if(user) { return res.status(201).send(user);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};
module.exports.updateUser = async(req,res,next) => {
    try{
        const {params: {id}, body} = req;
        const updateUser = await User.findByIdAndUpdate(id,body);
        if(updateUse) { return res.status(201).send(updateUse);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};
module.exports.deleteUser = async(req,res,next) => {
    try{
        const {params : {id}} = req;
        const deletedUser = await User.findByIdAndDelete(id);
        if(deletedUser) { return res.status(201).send(deletedUser);}
        res.status(400).send('Bad request');
    } catch(e){next(e);}
};