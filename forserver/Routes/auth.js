const express = require('express')
const {authSignUp,authSignIn, AddingTours, displayingTours,displayingOneTour , deleteTour} = require('../Controllers/dataController')
const {isValid ,signUpValidation ,signInValidation } = require ('../Middlewares/Validator')
const {isAuthenticated} = require('../Middlewares/isAuthOrNot')
const auth = express.Router ()

// post method to do the signup function for the users :
auth.post('/SignUp', signUpValidation , isValid , authSignUp)
 

auth.post('/SignIn' , signInValidation , isValid , authSignIn)

auth.get('/current', isAuthenticated, (req,res)=>res.send({user:req.user}))

auth.post('/addingNewTour' , AddingTours)

auth.get('/listNewTour', displayingTours)

auth.get('/listNewTour/:id', displayingOneTour) 

auth.delete('/deletePosts/:id', deleteTour) 


module.exports = auth ;  