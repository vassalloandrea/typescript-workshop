export function areThereAnyMinors(users: any) {
  return users.some((user: any) => user.age.valueOf() >= 18)
}
