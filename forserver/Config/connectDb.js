const mongoose = require('mongoose')

// connecting the server with mongodb atlas
const ConnectDb = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI) ; 
        console.log ('db is connected' ) ; 
    } catch (error) {
        console.log ({msg: 'Error connecting to db atlas'} , error)
    
    }
}

module.exports = ConnectDb