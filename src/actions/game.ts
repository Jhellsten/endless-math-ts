import { GameObjectType, PuzzleGameObjectType } from 'shared/types/game.type'
import * as actionTypes from './actionTypes'

export const changeAnswer = (answer: string | number, index: number) => ({
    payload: answer,
    index,
    type: actionTypes.CHANGE_GAME_ANSWER
})

export const generateGame = (game: GameObjectType[]) => ({
    payload: game,
    type: actionTypes.GENERATE_GAME
})
export const generatePuzzleGame = (game: GameObjectType[]) => ({
    payload: game,
    type: actionTypes.GENERATE_PUZZLE_GAME
})

export const changeOperator = (operator: string) => ({
    payload: operator,
    type: actionTypes.CHANGE_OPERATOR
})

type ChangeAnswer = {
    payload: string,
    index: number,
    type: "CHANGE_GAME_ANSWER"
}
type GenerateGame = {
    payload: GameObjectType[],
    type: "GENERATE_GAME"
}
type GeneratePuzzleGame = {
    payload: PuzzleGameObjectType[],
    type: "GENERATE_PUZZLE_GAME"
}
type ChangeOperator = {
    payload: string,
    type: "CHANGE_OPERATOR"
}

export type GameActions = ChangeAnswer | GenerateGame | ChangeOperator | GeneratePuzzleGame
