import { SET_LOADING, SET_ERROR, SET_COUNTRY, CLEAR_DETAILS } from "./details-actions";

const initialState = {
    status: 'idle',
    error: null,
    currentCountry: '',
};

export const detailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            };

        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload
            };

        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                error: null,
                currentCountry: payload
            };

        case CLEAR_DETAILS:
            return initialState;

        default:
            return state;
    }
};