const baseRepo = require('./baseRepo');
const UserModel = require('../model/userModel');

class userRepository{
    constructor(){
        return baseRepo(UserModel)
    }
}

module.exports = new userRepository();