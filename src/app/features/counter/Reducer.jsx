import * as counter from './Constants';

let InitialState = {
    count: 0
}

const counterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case counter.INC:
            return {
                ...state,
                count: state.count + action.value
            }
        case counter.DEC:
            return {
                ...state,
                count: state.count - action.value
            }
        default:
            return state
    }
}

export default counterReducer