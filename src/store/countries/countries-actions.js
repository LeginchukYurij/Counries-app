import { ALL_COUNTRIES } from "../../config";

export const SET_COUNTRIES = '@src/store/countries/SET_COUNTRIES';
export const SET_LOADING = '@src/store/countries/SET_LOADING';
export const SET_ERROR = '@src/store/countries/SET_ERROR';

export const setCountires = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
});

export const setLoading = () => ({
    type: SET_LOADING,
});

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
});

export const loadCounties = () => (dispatch, getState, {client, api}) => {
    dispatch(setLoading);
    client.get(ALL_COUNTRIES)
        .then(({data}) => dispatch(setCountires(data)))
        .catch((err) => dispatch(setError(err)));
}