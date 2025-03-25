import { LOGIN_DATA, LOGIN_SUCCESS_DATA, LOGIN_FAILURE_DATA } from "./UserAction"

const initialState = {
    data: null,
    loading : false
}

export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_DATA: {
            return {
                ...state,
                data: action.data,
                loading : true
            }
        }
        case LOGIN_SUCCESS_DATA: {
            return {
                ...state,
                data: action.data,
                success: true,
                loading : false
            }
        }
        case LOGIN_FAILURE_DATA: {
            return {
                ...state,
                data: action.data,
                success: false,
                loading : false
            }
        }
        default:
            return state;
    }
};

