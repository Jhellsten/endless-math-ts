import * as actionTypes from '../actions/actionTypes'

const initialState = {
    game: [],
    operator: ''
}

const decrease = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GENERATE_GAME:
            return { ...state, game: action.payload }
        case actionTypes.CHANGE_OPERATOR:
            return { ...state, operator: action.payload }
        case actionTypes.CHANGE_GAME_ANSWER:
            const copiedGame = [...state.game]
            copiedGame[action.index] = {
                ...state.game[action.index],
                answer: action.payload
            }
            return { ...state, game: [...copiedGame] }
        default:
            return state
    }
}

export default decrease
