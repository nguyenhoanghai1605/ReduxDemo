import { DATA_AVAILABLE, INSERTING_DATA, INSERTED_DATA } from "./DetailAction"

const initialState = {
    data: null,
    loading : true
}

export default detailReducer = (state = initialState, action) => {
    switch (action.type) {
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

