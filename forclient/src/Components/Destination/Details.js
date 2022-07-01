import React , {useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getOneTour} from '../../Redux/Actions/actions'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'


function Details() {

    const dispatch = useDispatch()
    let params = useParams() 
    

    useEffect (() => { 
    dispatch (getOneTour(params.id))
    }, [] )

    let tour = useSelector(state => state.Reducers.getOneTour)

    

  return (
    <div className='detailsDesign'>
        {tour?.map(oneTour => 
        <div >
          



          <div className="container hero">
  <div className="row">
    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
      <h1 className="detailFont">{oneTour.title}</h1>
      <p  className="detailFont">
        {oneTour.description}
        <br />
      </p>{" "}
      <h5  className="detailFont">Duration : {oneTour.duration}</h5>
    <Link to ="/reservation">  <button  className="btn btn-light btn-lg action-button" type="button">
        Booking
        <i className="fa fa-long-arrow-right ml-2" />
      </button> </Link>
    </div>
    <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
      <div className="iphone-mockup">
        {" "}
        <img className="device" style={{ width: '45rem' }}  src={oneTour.url_images}/>
      </div>
    </div>
  </div>
</div>
         
      </div>
    
        )
        }
    </div>
  )
}

export default Details