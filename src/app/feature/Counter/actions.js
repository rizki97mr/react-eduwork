import * as counter from './constants';

export const increment = (value) => {
    return {
        type: counter.INC,
        nilai: value
    }
}

export const decrement = (value) => {
    return {
        type: counter.DEC,
        nilai: value
    }
}

export const decrementWithCheckingAction = (value) => {
    return (dispatch, getState) => {
        if(getState().counter.count > 0) {
            dispatch(decrement(value));
        }
    }
} 