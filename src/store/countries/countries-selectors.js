export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length,

});

export const selectAllCountries = (state) => state.countries.list;

export const selectAllisibleCoutries = (state, search = '', region = '') => {
    return state.countries.list.filter(country => {
        return country.name.toLowerCase().includes(search.toLowerCase()) && country.name.toLowerCase().includes(region.toLowerCase());
    })
}