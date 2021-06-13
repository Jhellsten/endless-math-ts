import { Dimensions } from 'react-native'

export default {
    fontSize: {
        medium: 20,
        big: 30,
        huge: 40
    },
    margin: {
        medium: 10,
        big: 20
    },
    padding: {
        small: 6,
        medium: 10
    },
    input: {
        height: 50
    },
    button: {
        height: 50
    },
    border: {
        small: 0.5,
        medium: 1,
        smallRadius: 4
    }
}

export const { width, height } = Dimensions.get('window')
