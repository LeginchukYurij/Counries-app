export const CHANGE_THEME = '@src/store/theme/SET_THEME';

export const changeTheme = (theme) => ({
    type: CHANGE_THEME,
    payload: theme
})
