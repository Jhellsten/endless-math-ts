import { GameOptions, GameTypes } from 'shared/types/game.type'

export type CategoryType = {
    title: GameTypes,
    operator: GameOptions
}

export type CategoryStateType = {
    categories: CategoryType[]
}

const initialState = {
    categories: [
        {
            title: GameTypes.addition,
            operator: GameOptions.addition
        },
        {
            title: GameTypes.substraction,
            operator: GameOptions.substraction
        },
        {
            title: GameTypes.multiply,
            operator: GameOptions.multiply
        },
        {
            title: GameTypes.division,
            operator: GameOptions.division
        },
        {
            title: GameTypes.picturePuzzles,
            operator: GameOptions.empty
        }
    ]
}

const categories = (state: CategoryStateType = initialState) => {
    return state
}

export default categories
