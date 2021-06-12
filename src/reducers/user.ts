const initialState = {
    user: '',
    bearer: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer

export const userSelector = {
    isAuthenticated: (state = initialState) => !!state.bearer
}
