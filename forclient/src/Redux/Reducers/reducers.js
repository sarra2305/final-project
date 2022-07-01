import {SIGNUP,SIGNIN,CURRENT,TOUR, GET_TOUR} from "../Consts/action-type"


const initalState = {
    SignUpUsers : {},
    SignInUsers : {} ,
    GetUser : {} ,
    newTour : {} ,
    getTour: [],
    getOneTour : []
}
  

const UserReducer = (state = initalState, action) => {
    switch (action.type) {
        case SIGNUP: return{
            ...state ,
            SignUpUsers : action.payload
        }
        case SIGNIN : 
            return {
                ...state ,
                SignInUsers : action.payload
            }
            case CURRENT : 
            return {
                ...state ,
                GetUser : action.payload
            }
            case TOUR : 
            return {
                ...state ,
                newTour  : action.payload
            }
            case GET_TOUR : 
            return {
                ...state ,
                getTour  : action.payload
            }
            case 'getOneTour': 
            return {
                ...state ,
                getOneTour : [action.payload]
            }
        default: return state
        
    }
}

export default UserReducer ;



