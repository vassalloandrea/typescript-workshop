// JS syntax
// export function sumTwoNumbers(firstNumber, secondNumber) {
//   return firstNumber + secondNumber
// }

// Basic types docs: https://www.typescriptlang.org/docs/handbook/basic-types.html

export function sumTwoNumbers(firstNumber: any, secondNumber: any) {
  return firstNumber + secondNumber // No JS/TS errors, but we will have a type mismatch.
}
