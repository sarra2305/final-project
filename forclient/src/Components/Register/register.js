import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {SignIn} from '../../Redux/Actions/actions'
import './register.css'

function Register() {
  const dispatch = useDispatch()
  let  History = useHistory()
  const [email,setEmail] = useState ('') 
  const [password, setPassword] = useState ('')
  const [phoneNumber , setPhoneNumber] = useState ('')
  
  const Submit = () => { 
dispatch(SignIn({email,password,phoneNumber},History))
  }
  return (
    <div className="registerForm">
          <section className="get-in-touch">
    <h1 className="title">LogIn</h1>
    <form className="contact-form row">
      <div className="form-field col-lg-6">
        <input
          id="email"
          className="input-text js-input"
          type="email"
          required=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label" htmlFor="name">
          E-mail
        </label>
      </div>
      <div className="form-field col-lg-6 ">
        <input
          id="password"
          className="input-text js-input"
          type="password"
          required=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="label" htmlFor="email">
          Password
        </label>
      </div>
      <div className="form-field col-lg-6 ">
        <input
        
          id="password"
          className="input-text js-input"
          type="text"
          required=""
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label className="label" htmlFor="email">
          phoneNumber
        </label>
      </div>

      <div className="form-field col-lg-12">
      <input  onClick={Submit} className="submit-btn" defaultValue="Submit" /> 
      </div>
    </form>
  <Link to ="/SignUp"><h6 className="signup-redirect">create an account ?</h6></Link>
  </section>



    </div>
  )
}

export default Register