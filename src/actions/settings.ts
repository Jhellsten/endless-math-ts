import {CHANGE_SETTING} from './actionTypes'

export const changeSetting = (name: string, value: string) => ({
    name,
    value,
    type: CHANGE_SETTING
})

export type SettingAction = {
    type: typeof CHANGE_SETTING,
    name: string,
    value: string
}
