import React from 'react'
import About from'./usabout.jpeg'

function aboutUs() {
    return (
    <div className ="AboutUs">
      <img  className ="Cover" src={About}  alt ="usabout"   />
        <div>
        <h1 className ="Question">Who we are?</h1>
        </div>

        <div className="aboutUs2">
            <p className ="test6">
            RGS is a Travel Agency founded by 
            </p>
            <div>
  
            <p className ="Footer ">
        ©2022 by RGS , 
        </p>
       </div>
        </div>
    </div>
    )
}

export default aboutUs