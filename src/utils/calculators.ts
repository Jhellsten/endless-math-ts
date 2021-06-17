import { GameOperators } from 'shared/types/game.type'

export function calculate(operator: GameOperators, number1: number, number2: number): number
export function calculate(operator: GameOperators, number1: number, number2: number, number3: number): number
export function calculate (operator: GameOperators, number1: number, number2: number, number3?: number): number {
    if(number3) {
        switch (operator) {
            case GameOperators.addition:
                return number1 + number2 + number3
            case GameOperators.substraction:
                return number1 - number2 - number3
            case GameOperators.multiply:
                return number1 * number2 * number3
            case GameOperators.division:
                return number1 / number2 / number3
            default:
                return 0
        }
    } else {
        switch (operator) {
            case GameOperators.addition:
                return number1 + number2
            case GameOperators.substraction:
                return number1 - number2
            case GameOperators.multiply:
                return number1 * number2
            case GameOperators.division:
                return number1 / number2
            default:
                return 0
        }
    }
   
    
}

export const compareNumbers = (operator: GameOperators, num1: number, num2: number): boolean => {
    switch (operator) {
        case GameOperators.smallerThan:
            return num1 < num2
        case GameOperators.largerThan:
            return num1 > num2
        default:
            return false
    }
}
