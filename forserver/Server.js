// requiremets
const express = require('express');
require ('dotenv').config ()
const connectDb = require('./Config/connectDb')
const app = express();
const auth = require('./Routes/auth')
const PrivateTour = require('./Models/Trips')
const TravelAgencySchema = require('./Models/models')
const cors = require ('cors') ;
const bcrypt = require('bcrypt')
initial()
connectDb ()
app.use(cors()) 
app.use (express.json ()) ;
app.use ('/' , auth)



async function  initial  () {
  const userIsAdmin = await TravelAgencySchema.findOne({role: 'admin'});
  if(!userIsAdmin){
    const user = new TravelAgencySchema({
      name :'admin' , 
      email :'admin@admin.com',
      password : bcrypt.hashSync(process.env.ADMIN_PASSWORD , 10),
      role : 'admin',
    })
    
  user.save();
  }
  PrivateTour.estimatedDocumentCount((err,count) => {
      if (!err && count === 0) {
        const tripList = 
          [{
            title: "Private Tour of Madrid",
            description: "Private tours in the city of Madrid. At Tour Travel & More offer private tours as well as private transfers in Madrid and its surroundings. We offer our customers the possibility to get to know the most emblematic sites of Madrid like the Paseo de la Castellana, Royal Palace, Puerta de Alcalá and so much more. Madrid is Spain’s capital and during your private experience you will be able to get to know the musts in this wonderful city.",
            rating: 5 ,
            price : "109,00€" , 
            duration : "full day option" ,
            url_images:'https://17xxhp2l9bsg2qr0nd29eere-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/madrid-private-tour-8h-8.jpg'
          }, 
          {
            title: "private tour of Paris ",
            description: "At Tour Travel & more we offer private tours as well as private transfers in Paris and it’s surroundings. We offer our customers the possibility to get to know the most emblematic sites of Paris, one of the most visited city in whole Europe, and considered as the most romantic and beautiful city of the continent. Paris has a population of around 2.2 million people and offers a very wide option of art, culture, history, food and fashion. During your private experience with us you will be able to get to know the musts of this wonderful city with the best private official tour guides!",
            duration: "full day option" ,
            url_images:'https://17xxhp2l9bsg2qr0nd29eere-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Paris-1-min-768x511.jpg',
            rating  : 5 ,
            price :"145,00€" ,
          },
          {
            title: "Florence Tour ",
            description: "Full Day Best of Florence with Uffizi Gallery, Statue of David and Florence Cathedral.",
            duration: "full day option" ,
            location : "Italy – Florence" ,
            url_images:'https://17xxhp2l9bsg2qr0nd29eere-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/Paris-1-min-768x511.jpg',
            rating  : 5 ,
            price :"139,00€" ,

          }
        ]
        const options = { ordered: true };
        PrivateTour.insertMany(tripList,options);

    };
  });
}

app.listen (process.env.PORT, (err) => {
    err ? console.log (err) : console.log (`the app is running on port : ${process.env.PORT}`)
}) 