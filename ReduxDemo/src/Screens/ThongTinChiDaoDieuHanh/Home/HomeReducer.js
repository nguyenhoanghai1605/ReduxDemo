
import { DATA_FETCHING, DATA_AVAILABLE, DATA_FETCHED } from "./HomeAction"

const initialState = {
    data: [],
    loading : true,
    loadMore: false
}

export default homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case DATA_FETCHING: {
            return {
                ...state,
                data: action.data,
                loading : false,
                loadMore: true
            }
        }
        case DATA_FETCHED: {
            return {
                ...state,
                data: action.data,
                loading : false,
                loadMore: false
            }
        }
        case DATA_AVAILABLE: {
            return {
                ...state,
                data: action.data,
                loading : false
            }
        }
        default:
            return state;
    }
};

 