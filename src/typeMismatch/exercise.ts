// export function fullName(firstName, secondName) {
//   return `${firstName} ${secondName}` // No JS errors, but we will have a type problem.
// }

// Basic types docs: https://www.typescriptlang.org/docs/handbook/basic-types.html

export function fullName(firstName: any, secondName: any) {
  return `${firstName} ${secondName}`
}
