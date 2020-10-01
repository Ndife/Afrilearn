class BaseRepository{
    constructor(model){
        if(!model) throw new error('model is required')
        this.model = model;
    }

    addUser(data,callback){
        this.model.create(data,callback);
    }
    getByParams(param, callback){
        this.model.findOne(param,callback);
    }
    getUserById(param, callback){
        this.model.findById(param,callback);
    }
    get(option,callback){
		this.model.find(option,'-__v -password ',callback);
    }
    updateUser(id,details,callback){
        this.model.updateOne(id,details,callback);
    }
    deleteUser(id,callback){
        this.model.deleteOne(id,callback);
    }
    getAndPopulate(option,values,callback){
		this.model.find(option,'-__v -password ',callback).populate(`${values}`,'-__v -_id');
    }
    getUserByIdAndPopulate(param, values, callback){
        this.model.findById(param,callback).populate(`${values}`,'-__v -_id');
    }
    searchUser(value,callback){
        this.model.find({"teacher":{$regex: value, $options: 'i'}}, '-__v',callback)
    }
    
}

module.exports = (model) =>{
    return new BaseRepository(model);
}