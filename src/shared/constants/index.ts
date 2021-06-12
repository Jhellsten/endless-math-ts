

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

export const DIFFICULTIES = {
    '*': [
        {
            title: 'Kertotaulut',
            options: {
                min: 1,
                max: 12
            }
        },
        {
            title: 'Helpot',
            options: {
                min: 1,
                max: 10
            }
        },
        {
            title: 'Tavalliset',
            options: {
                min: 1,
                max: 20
            }
        },
        {
            title: 'Vaikeat',
            options: {
                min: 4,
                max: 100
            }
        }
    ],
    '-': [{}],
    '/': [{}],
    '+': [{}],
    '': [
        {
            title: 'Helpot',
            options: {
                min: 1,
                max: 5
            }
        },
        {
            title: 'Tavalliset',
            options: {
                min: 3,
                max: 10
            }
        },
        {
            title: 'Vaikeat',
            options: {
                min: 4,
                max: 9
            }
        }
    ]
}

