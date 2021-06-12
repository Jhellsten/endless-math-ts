import * as actionTypes from '../actions/actionTypes'
import themes, { ThemeType } from '@themes'
import { SettingAction } from 'actions/settings'
import { ThemeAction } from 'actions/theme'

export type SettingsStateType = {
    theme: ThemeType,
    selectableThemes: typeof themes,
    settings: {
        numberOfRows: string
    }
}

const initialState: SettingsStateType = {
    theme: {
        ...themes.mint
    },
    selectableThemes: {
        ...themes
    },
    settings: {
        numberOfRows: '15'
    }
}

const settings = (state = initialState, action: SettingAction | ThemeAction) => {
    switch (action.type) {
        case actionTypes.CHANGE_SETTING:
            return { ...state, settings: { ...state.settings, [action.name]: action.value } }
        // case actionTypes.CHANGE_THEME:
        //     return { ...state, theme: initialState.selectableThemes[action.payload] }
        default:
            return state
    }
}

export default settings
