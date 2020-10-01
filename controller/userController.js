const userService = require('../service/userService');

exports.register = (req,res) =>{
    const {body} = req;
    // const {firstname, lastname, email, phone, password, state, exam} = body;
    req.checkBody('firstname')
    .isLength({min:1}).withMessage('firstname is required');
    req.checkBody('lastname')
    .isLength({min:1}).withMessage('lastname is required');
    req.checkBody('email')
    .isEmail().withMessage('email is invalid');
    req.checkBody('phone')
    .isLength({min:1}).withMessage('phone is required');
    req.checkBody('password')
    .isLength({min:5}).withMessage('password can not be less than 5');
    req.checkBody('state')
    .isLength({min:1}).withMessage('state is required');
    req.checkBody('exam')
    .isLength({min:1}).withMessage('exam is required');
    
    const errors = req.validationErrors();
    if(errors){
        res.send({errors})
    }else{
        return userService.register(body,req,res)
    }
}

exports.login = (req,res) =>{
    const {body} = req;
    const {email,password} = body;

    req.checkBody('email')
    .isEmail().withMessage('email is invalid');
    req.checkBody('password')
    .isLength({min:5}).withMessage('password can not be less than 5');

    const errors = req.validationErrors();
    if(errors){
        res.send({errors})
    }else{
        return userService.login({email, password},req,res);
    }
}
