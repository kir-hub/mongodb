const mongoose = require('mongoose');
const connection = require('./../db');

const yup = require('yup');

const Schema = mongoose.Schema;
const messageSchema = new Schema({authorId});

const chatSchema = new Schema({
    name: {
        type: Schema.Types.String,
        minLength: 1,
        maxLength:  30,
    },
    owner: {
        type: Schema.Type.ObjectID,
        ref: 'User',
    },
    participants:[
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    messages: [messageSchema]
    });

function insertChat(body){
    const chat = new Chat(body);
    chat.save().then(console.log).catch(console.error);
}
    
const Chat = connection.model('Chat',chatSchema);

module.exports = Chat;