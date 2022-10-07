export const SET_LOADING = '@src/store/details/SET_LOADING';
export const SET_ERROR = '@src/store/details/SET_ERROR';
export const SET_COUNTRY = '@src/store/details/SET_COUNTRY';
export const CLEAR_DETAILS = '@src/store/details/CLEAR_DETAILS';

export const setLoading = {
    type: SET_LOADING,
};

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

export const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
});

export const clearDetails = {
    type: CLEAR_DETAILS,
};


export const loadCountry = (country) => (dispatch, getState, {client, api}) => {
    console.log(country, api.searchByCountry( country ));
    dispatch(setLoading);
    client.get(api.searchByCountry( country ))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch((err) => dispatch(setError(err.message)));
};