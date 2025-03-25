

import { DATA_AVAILABLE, INSERTING_DATA, INSERTED_DATA } from "./HomeAction"

const initialState = {
    data: [],
    loading : true
}

export default homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case DATA_AVAILABLE: {
            return {
                ...state,
                data: action.data,
                loading : false
            }
        }
        case INSERTING_DATA: {
            return {
                ...state,
                isInserting: action.isInserting,
                data: action.data,
                loading: true
            }
        }
        case INSERTED_DATA: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        default:
            return state;
    }
};

 