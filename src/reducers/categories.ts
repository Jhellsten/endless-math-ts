import { GameOperators, GameTypes } from 'shared/types/game.type'

export type CategoryType = {
    title: GameTypes,
    operator: GameOperators
}

export type CategoryStateType = {
    categories: CategoryType[]
}

const initialState = {
    categories: [
        {
            title: GameTypes.addition,
            operator: GameOperators.addition
        },
        {
            title: GameTypes.substraction,
            operator: GameOperators.substraction
        },
        {
            title: GameTypes.multiply,
            operator: GameOperators.multiply
        },
        {
            title: GameTypes.division,
            operator: GameOperators.division
        },
        {
            title: GameTypes.picturePuzzles,
            operator: GameOperators.empty
        }
    ]
}

const categories = (state: CategoryStateType = initialState, action) => {
    return state
}

export default categories
