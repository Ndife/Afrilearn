const userRepo = require('../repository/userRepo');
const userModel = require('../model/userModel');
const user = new userModel();

exports.register = (data,req,res) =>{
    data.email = data.email.toLowerCase();
    data.password = user.generateHash(data.password);

    userRepo.getByParams({email:data.email},(err,result) =>{
        if(err) res.send(err);
        else if(result){
            res.send({
                success:false,
                message:'Email already exist'
            })
        }else {
            userRepo.addUser(data,(err,data) =>{
                if (err) res.send(err);
               return res.send({
                    success:true,
                    messsage:'User created successfully'
                });
            })
        }
    })
}

exports.login = (data,req,res) =>{
    data.email = data.email.toLowerCase();

    userRepo.getByParams({email:data.email},(err,previousEmail) =>{
      if (err) res.send(err);
      else if(!previousEmail){
        res.send({
          success:false,
          message:'Email or password is incorrect'
        })
      }else {
        if(!user.validPassword(data.password,previousEmail.password)){
          res.send({
            success:false,
            message:'Email or password is incorrect'
          })
        }else {
          const token = user.setToken(previousEmail);
          res.send({
            success:true,
            message:previousEmail.name,
            token
          })
        }
      }
    })
}