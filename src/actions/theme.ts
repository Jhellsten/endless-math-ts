import { CHANGE_THEME} from './actionTypes'
import {POSSIBLE_THEMES} from '@shared-constants'

export const changeTheme = (theme: string) => ({
    payload: theme,
    type: CHANGE_THEME
})

export type ThemeAction = {
    type: typeof CHANGE_THEME,
    payload: POSSIBLE_THEMES.pink | POSSIBLE_THEMES.mint | POSSIBLE_THEMES.light | POSSIBLE_THEMES.dark
}