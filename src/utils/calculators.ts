export const calculate = (op: string, number1: number, number2: number, number3: number): number => {
    switch (op) {
        case '+':
            return number3 ? number1 + number2 + number3 : number1 + number2
        case '-':
            return number3 ? number1 - number2 - number3 : number1 - number2
        case '*':
            return number3 ? number1 * number2 * number3 : number1 * number2
        case '/':
            return number3 ? number1 / number2 / number3 : number1 / number2
        default:
            return 0
    }
}

export const compareNumbers = (operator: string, num1: number, num2: number): boolean => {
    switch (operator) {
        case '<':
            return num1 < num2
        case '>':
            return num1 > num2
        default:
            return false
    }
}
