const mongoose = require('mongoose');
const connection = require('./../db');

const yup = require('yup');
const emailValidSchema = yup.string().email();
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: {
        type: String,
        minLength: 1,
    },
    lastName: {
        type: String,
        minLength: 1,
    },
    role: {
        type: String,
        enum: ['USER', 'MODERATOR', 'ADMIN'],
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => emailValidSchema.validate(value),
        }
    },
    chats: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Chat'
        }
    ]
});

function insertUser(body){
    const user = new User(body);
    user.save().then(console.log).catch(console.error);
}

const User = connection.model('User',userSchema);

module.exports = User;