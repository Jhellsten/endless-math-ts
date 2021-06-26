import { GameOperators } from 'shared/types/game.type';



// ? Screens
export const SCREENS = {
  HOME: "home",
  DETAIL: "detail",
  SEARCH: "search",
};

export const APP_ROUTE = {
    LOGIN: 'LOGIN',
    HOME: 'HOME',
    GAMES: 'GAMES',
    BASIC_GAME: 'BASIC_GAME',
    SETTINGS: 'SETTINGS',
    PUZZLE_GAME: 'PUZZLE_GAME'
}

export const SETTINGS_OPTIONS = {
    numberOfRows: 'Rivien määrä'
}

export const puzzleSets = {
    girl: { icons: ['diamond', 'heart', 'snowflake-o'] },
    emoji: { icons: ['angry', 'dizzy', 'grimace'], color: '#FED32B' },
    emoji1: { icons: ['grin', 'grin-stars', 'grin-squint'], color: '#FED32B' },
    emoji2: { icons: ['kiss', 'meh-blank', 'sad-cry'], color: '#FED32B' }
}

export enum POSSIBLE_THEMES {
  'pink',
  'mint',
  'light',
  'dark'
}

export enum TitleTypes {
    easy = 'Helpot',
    medium = 'Tavalliset',
    hard = 'Vaikeat',
    multiplyTable = 'Kertotaulut',

}

export type GameOptionsType = {
    min: number,
    max: number
}

export const DIFFICULTIES = {
    [GameOperators.multiply]: [
        {
            title: TitleTypes.multiplyTable,
            options: {
                min: 1,
                max: 12
            }
        },
        {
            title: TitleTypes.easy,
            options: {
                min: 1,
                max: 10
            }
        },
        {
            title: TitleTypes.medium,
            options: {
                min: 1,
                max: 20
            }
        },
        {
            title: TitleTypes.hard,
            options: {
                min: 4,
                max: 100
            }
        }
    ],
    [GameOperators.substraction]: [{
        title: TitleTypes.easy,
        options: {
            min: 1,
            max: 10
        }
    },
    {
        title: TitleTypes.medium,
        options: {
            min: 20,
            max: 100
        }
    },
    {
        title: TitleTypes.hard,
        options: {
            min: 40,
            max: 300
        }
    }],
    [GameOperators.division]: [{
        title: TitleTypes.easy,
        options: {
            min: 1,
            max: 20
        }
    },
    {
        title: TitleTypes.medium,
        options: {
            min: 5,
            max: 40
        }
    },
    {
        title: TitleTypes.hard,
        options: {
            min: 4,
            max: 100
        }
    }],
    [GameOperators.addition]: [{
        title: TitleTypes.easy,
        options: {
            min: 5,
            max: 20
        }
    },
    {
        title: TitleTypes.medium,
        options: {
            min: 10,
            max: 50
        }
    },
    {
        title: TitleTypes.hard,
        options: {
            min: 30,
            max: 500
        }
    }],
    [GameOperators.empty]: [
        {
            title: TitleTypes.easy,
            options: {
                min: 1,
                max: 5
            }
        },
        {
            title: TitleTypes.medium,
            options: {
                min: 3,
                max: 10
            }
        },
        {
            title: TitleTypes.hard,
            options: {
                min: 4,
                max: 9
            }
        }
    ]
}

