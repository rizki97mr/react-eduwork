import * as counter from './constants'

let initialState = {
    count: 0,
    total: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case counter.INC:
            return{
                ...state,
                count: state.count + action.nilai, 
            }
        case counter.DEC:
            return {
                count: state.count - action.nilai
            }
        default: 
            return state
    }
}

export default counterReducer;