export type initStateThemeReducerType = {
    themeId: number
}
type actionType = {
    type: string,
    id: number

}
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: actionType): initStateThemeReducerType => { // fix any
    switch (action.type) {
        // дописать
        case'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
