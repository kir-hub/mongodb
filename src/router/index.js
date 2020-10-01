const express = require('express');
const{postUser, getUser, updateUser, deleteUser} = require('../controllers/user.controller');
const {postChat, getChat, updateChat, deleteChat} = require('../controllers/chat.controller');
const router = express.Router();

//router.post('/user/(:id)?',postUser)

router.route('/user/(:id)?').post(postUser).get(getUser).put(updateUser).delete(deleteUser);
router.route('/chat/(:id)?').post(postChat).get(getChat).put(updateChat).delete(deleteChat);
module.exports = router;