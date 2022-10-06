import { CHANGE_THEME } from "./theme-actions";

export const themeReducer = (state='light', {type, payload}) => {
    switch(type) {
        case(CHANGE_THEME):
            return payload;
        default:
            return state;
    }
};