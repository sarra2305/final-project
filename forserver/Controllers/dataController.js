const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TravelAgencySchema = require('../Models/models')
const Trip = require('../Models/Trips')



exports.authSignUp =  async (req, res) =>{
    const {password,email,name,role,createdAt,phoneNumber,address} = req.body
    try {
       const find = await TravelAgencySchema.findOne({email :email}) ;
       if (find)
       res.status(200).send({msg: 'user exist'})
       const user = new TravelAgencySchema(req.body) 
       // bcrypt method for getting a hashed password for more security 
       const salt = 10 ;
       const passwordHashed = bcrypt.hashSync(password , salt)
       const userID = {id:user._id}
        // jwt method for getting a unique token for every user 
        const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
       user.password = passwordHashed ;
       
       await user.save()
       res.status(200).send({msg: 'registred successfully' , token})
    } catch (error) {
        res.status(400).send({msg:'error'})
        
    }
}

exports.authSignIn = async (req, res) => {
    const {email , password} = req.body
    try {
        const find = await TravelAgencySchema.findOne ({email :email})
        if (!find) 
        res.status(400).send({msg : 'user not exist'})
      const  matchinPassword = bcrypt.compareSync(password, find.password);
      if (!matchinPassword) {
          res.status(400).send({msg : 'bad credentials'})
      }
      const userID = {id:find._id}
      const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
      res.status(200).send({msg : "login successfully", token})
    } catch (error) {
        res.status(400).send({msg :'bad credentials'})
        
    }
}

exports.AddingTours = async (req, res)  => {
    
    try {
        const addingNewTour = new Trip (req.body) 
        await addingNewTour.save()
        return res.status (200).send({msg: "tour added" , addingNewTour})
         
    } catch (error) {
        return res.status (400).send({msg: "failed to add"}, error)
        
    }
}


exports.displayingTours = async (req, res)  => {
    try {
        const viewTour =  await Trip.find();
      
        return res.status (200).send({msg: "tour added" , viewTour})
        
    } catch (error) {
        return res.status (400).send({msg: "failed to add"}, error)
        
    }
}


exports.displayingOneTour = async (req, res)  => {
    const {id} = req.params
    try {
        const oneTour =  await Trip.findById(id);
      
        return res.status (200).send({msg: "tour added" , oneTour})
        
    } catch (error) {
        return res.status (400).send({msg: "failed to add"}, error)
        
    }
}


exports.deleteTour = async (req, res)  => {
    const {id} = req.params
    try {
        const oneTour =  await Trip.findByIdAndDelete(id);
    
        return res.status (200).send({msg: "tour deleted"})
        
    } catch (error) {
        return res.status (400).send({msg: "failed to delete"}, error)
        
    }
}
