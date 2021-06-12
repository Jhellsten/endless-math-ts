import * as actionTypes from '../actions/actionTypes'

const initialState = {
    errorMessage: '',
    show: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ERROR:
            return { ...state, errorMessage: action.message, show: true }
        case actionTypes.HIDE_ERROR:
            return { ...state, errorMessage: '', show: false }
        default:
            return state
    }
}

export default reducer
