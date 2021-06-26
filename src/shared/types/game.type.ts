

export enum GameOperators {
    empty = '',
    addition = '+',
    substraction = '-',
    multiply = '*',
    division = '/',
    smallerThan = '<',
    largerThan = '>'
}

export enum GameOptions {
    empty = '',
    addition = '+',
    substraction = '-',
    multiply = '*',
    division = '/',
    picture = 'picture'
}

export enum GameTypes {
    addition = 'Yhteenlaskut',
    substraction = 'Vähennyslaskut',
    multiply = 'Kertolaskut',
    division = 'Jakolaskut',
    picturePuzzles = 'Kuva arvoitukset',
}

export type GameObjectType = {
    calculation: string,
    correctAnswer: number,
    answer: string
}