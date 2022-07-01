import React , {useState , useEffect} from 'react'
import './vac.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector } from 'react-redux'
import { getTours} from '../../Redux/Actions/actions'
import Admin from '../admin/admin-addcard'

function Vac() {

  const dispatch = useDispatch()

  // const [image , setImage] = useState('')
  // const [description ,setDescription ] = useState('')
  // const [title , setTitle] = useState('')
  // const [rating , setRating] = useState('')
  // const [duration , setDuration] = useState('')
  // const [price , setPrice] = useState('')

 useEffect(() => {
    dispatch(getTours())
  } ,[])

let tourList = useSelector((state) => state.Reducers.getTour)
let userIsAdmin = JSON.parse(localStorage.getItem('current_user'))

  return (
    
<div >
<section className="dark" >
  {tourList?.map((tour) => 
  <div  className="container py-4">
  <Link to={`/Details/${tour._id}`} >
      <h1  className="h1 text-center" id="pageHeaderTitle">
      {tour.title}
      </h1>
      <article className="postcard dark blue">
        <p className="postcard__img_link">
          <img className="postcard__img"
            src={tour.url_images} />
        </p>
        <div className="postcard__text">
          <h1 className="postcard__title blue">
            <p className ="descri">{tour.title}</p>
          </h1>
          <div className="postcard__subtitle small">
            <time >
            <i class="fa-solid fa-coins">
              {tour.price}</i> 
            </time>
          </div>
          <div className="postcard__bar" />
          <div className="postcard__preview-txt">
          {tour.description}
          </div>
        </div>
      </article>
      </Link>
      {userIsAdmin?.role=='admin' ? <Admin userId={tour._id}/> : ''}
      
      </div>
  )}
  </section>
 
 
</div>

  )
}

export default Vac