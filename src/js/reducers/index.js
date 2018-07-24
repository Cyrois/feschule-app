import {ADD_STAGETIME} from "../constants/action-types";

const initialState = {
    stagetime: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_STAGETIME:
            return { ...state, stagetime: [...state.stagetime, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;