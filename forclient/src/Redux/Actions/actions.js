import {SIGNUP,SIGNIN,CURRENT,TOUR, GET_TOUR} from "../Consts/action-type"
import axios from 'axios'



export const SignUp = (userData,History) => async (dispatch) => {
try {
    const SignUpUsers = await axios.post('http://localhost:5000/SignUp',userData)
    dispatch(
{        type : SIGNUP ,
        payload : SignUpUsers ,
})
localStorage.setItem('token', SignUpUsers.data.token)
History.push('/Login')
} catch (error) {
    console.log(error)
        
}
}


export const SignIn = (userData,History) => async (dispatch) => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*' 
    try {
        const SignInUsers = await axios.post('http://localhost:5000/SignIn',  userData )
        dispatch(
{            type : SIGNIN , 
            payload : SignInUsers.data
})
dispatch(CurrentUser(SignInUsers.data.token))
setTimeout(() => {
    window.location.replace(window.location.protocol+ '//' +window.location.host);
}, 500);


    } catch (error) {
        console.log(error)
    }
}


export const CurrentUser = (token) => async (dispatch) => {
    const config={  
        headers:{           
        Authorization: token 
                }}
    try {
        const GetUser = await axios.get('http://localhost:5000/current',config)
        dispatch(
            {            
                type : CURRENT ,
                payload : GetUser.data
            }
            
        )
        localStorage.setItem('current_user',JSON.stringify(GetUser.data.user))
    } catch (error) {
        console.log(error)
    }
}

export const Tour = (newTrips) => async (dispatch) => {
    
    try {
        const AddingTour = await axios.post('http://localhost:5000/addingNewTour',newTrips)
        dispatch (
            { 
                type : TOUR ,
                payload : AddingTour.data
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const getTours = () => async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:5000/listNewTour')
dispatch(
    {            
        type : GET_TOUR ,
        payload : res.data.viewTour,
    }
    
)
} catch (error) {
console.log(error)
}
}

export const getOneTour = (id) => async (dispatch) => {
    try {
        const tourById = await axios.get(`http://localhost:5000/listNewTour/${id}`)
        dispatch (
            { 
                type : 'getOneTour' ,
                payload : tourById.data.oneTour
            }
        )
    } catch (error) {
        console.log (error)
    }

}


export const deleteTour = (id) => async (dispatch) => {
    try {
        const tourById = await axios.delete(`http://localhost:5000/deletePosts/${id}`)
        dispatch (
            { 
                type : 'deleteTour' ,
                payload : tourById.data.oneTour
            }
        )
        
    } catch (error) {
        console.log (error)
    }

}
