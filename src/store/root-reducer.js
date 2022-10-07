import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducers";
import { countiresReducer } from "./countries/countries-reducer";
import { controlsReducer } from "./controls/controls-reducers";
import { detailsReducer } from "./details/details-reducers";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countiresReducer,
    controls: controlsReducer,
    details: detailsReducer
});