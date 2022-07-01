const mongoose = require('mongoose')


const TravelAgencySchema = new mongoose.Schema (
    {
        name :{type:String , required:true} , 
        email : {type:String , required:true} ,
        password : {type: String , unique : true , required:true},
        age : {type:Number },
        createdAt : {type:Date , default:new Date ()} , 
        role : {type:String , default : 'guest'}, 
        phoneNumber : {type :Number , unique : true },
        address : {type : String }
    }
)
module.exports = mongoose.model('TravelAgency' , TravelAgencySchema )


