import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = state.map(el => {return {...el, name: el.name}})
            copyState.sort((a, b) => action.payload === 'up' ? a.name > b.name? 1 : -1 : a.name > b.name? -1 : 1)
            return copyState // need to fix
        }
        case 'check': {
            return state.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
