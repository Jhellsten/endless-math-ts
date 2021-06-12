import * as actionsType from './actionTypes'

export const showErrorSuccess = message => ({
    type: actionsType.SHOW_ERROR,
    message
})
export const showError = err => (dispatch, getState) => {
    let message = ''
    if (err.status === 404) {
        message = 'Something went wrong'
    } else if (typeof err.message === 'string') {
        message = err.message
    } else if (typeof err.response.data.message === 'string') {
        message = err.response.data.message
    }
    dispatch(showErrorSuccess(message))
}

export const hideError = () => ({
    type: actionsType.HIDE_ERROR
})
