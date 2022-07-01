import React from 'react'
import Himage from '../../homeimage.png' 



function home() {
  return (
    <div>

            <div>
                
        <img className="Image1" src={Himage} alt = 'homeimage' />
        
            </div>

            <div className ="titre1" >
        <h1 >Travel with us</h1>
        <p >Find you dream destination </p>
            </div>

            <div className = "titre2">
                <h2 className="title">TOP PLACES TO VISIT</h2>
            <div className = "testi">
                
                <div className = "testib" > 

                <div>
                <h4 className ='cname'>ITALY</h4>
                </div>

                <div>
               
            
                <h4 className ='cname' >KOREA</h4>
                </div>

                <div>
                 <h4 className = 'cname'>Japan</h4>
                </div>
                
                </div>
            </div>
            
            </div>
    </div>
)
}

export default home