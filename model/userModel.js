const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    firstname:{type: String, default:''},
    lastname:{type: String, default:''},
    email:{type: String, default:''},
    phone:{type: String, default:''},
    password:{type: String, default:''},
    state:{type: String, default:''},
    exam:{type: String, default:''},
    

})

userSchema.methods.generateHash = function(password){
	return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password,currentPassword){
    return bcryptjs.compareSync(password, currentPassword);
};

userSchema.methods.setToken = function(user){
    return jwt.sign({
        email:user.email,
        id:user._id
    },'user',
    {
        expiresIn: "1h"
    })
}

const user = module.exports = mongoose.model('User', userSchema);