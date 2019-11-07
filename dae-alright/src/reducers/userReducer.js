import SAMPLE_ACTION from "../constants/action-type"


const initialState = {}

export default (state = initialState, action) => {
    switch(action.type) {

        case SAMPLE_ACTION:
             return action.payload

        default:
            return state     
    }

}

