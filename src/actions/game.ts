import * as actionTypes from './actionTypes'

export const changeAnswer = (answer: string | number, index: number) => ({
    payload: answer,
    index,
    type: actionTypes.CHANGE_GAME_ANSWER
})

export const generateGame = (game: string) => ({
    payload: game,
    type: actionTypes.GENERATE_GAME
})

export const changeOperator = (operator: string) => ({
    payload: operator,
    type: actionTypes.CHANGE_OPERATOR
})
