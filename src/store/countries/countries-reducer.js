import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from "./countries-actions";

const initiaState = {
    status: 'idle', // loading | received | rejected
    error: null,
    list: []
};

export const countiresReducer = (state = initiaState, {type, payload}) => {
    switch (type) {
        case SET_COUNTRIES:
            return {
                    ...state,
                    status: 'recived',
                    list: payload
                };

        case SET_LOADING:
            return {
                    ...state,
                    status: 'loading',
                    error: null,
                }

        case SET_ERROR:
            return {
                    ...state,
                    status: 'rejected',
                    error: payload,
            }

        default:
            return state;
    }
}