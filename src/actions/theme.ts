import { CHANGE_THEME} from './actionTypes'
import { ThemeType } from '@themes'

export type ThemeAction = {
    type: typeof CHANGE_THEME,
    payload: ThemeType
}

export const changeTheme = (theme: ThemeType) => ({
    payload: theme,
    type: CHANGE_THEME
})
