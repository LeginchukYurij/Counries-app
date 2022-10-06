export const SET_SEARCH = '@src/store/controls/controls-actions/SET_SERCH';
export const SET_REGION = '@src/store/controls/controls-actions/SET_REGION';


export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search,
});

export const setRegion = (region) => ({
    type: SET_REGION,
    payload: region,
});