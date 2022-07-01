const mongoose = require('mongoose')


const hotel = new mongoose.Schema (
    {
        title :{type:String , required:true} , 
        description :{type:String , required:true}, 
        rating  : {type : String} ,
        url_images :{type : String} ,
        price :{type:String}, 
        duration : {type : String},
        location : {type : String}
    }
)
module.exports = mongoose.model('hotels' , hotel )