import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const intialStates = {
    imageData: {}
}

function reducer(state = intialStates, action){
    switch(action.type){
        case "GET_IMAGES" :
            return {
                ...state,
                imageData: {...action.payload}
            }
            
        default:
            return state;
    }
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;