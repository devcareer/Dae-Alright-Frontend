import {SAMPLE_ACTION} from "../constants/actionTypes"


const initialState = {
    user:{
    address: '',
    createdAt: '',
    email:'',
    firstName:'',
    lastName:'',
    phone: '',
    id:'',
    updatedAt:''
    },
    token: "",

}

export default (state = initialState, action) => {
    switch(action.type) {

        case SAMPLE_ACTION:
             return action.payload


        case SIGNIN_ACTION:
            return{
                ...state,
                user:action.user,
                token: action.token
            }
        default:
            return state     
    }

}
