const MINIMUN_LENGTH_OF_PASSWORD = 8
export const passwordRestrictions = [
  {
    validator: (password: string) => RegExp(/[A-Z]/g).test(password),
    message: 'Have at least one uppercase letter',
  },
  {
    validator: (password: string) => RegExp(/[a-z]/g).test(password),
    message: 'Have at least one lowercase letter',
  },
  {
    validator: (password: string) => RegExp(/[0-9]/g).test(password),
    message: 'Have at least one number',
  },
  {
    validator: (password: string) =>
      RegExp(/[~!@#$%^&*()_+\-=[\]{};'`:"\\|,.<>/?]/g).test(password),
    message: 'Have at least one special character (!@#$...etc)',
    style: { height: '50px' },
  },
  {
    validator: (password: string) =>
      password.length >= MINIMUN_LENGTH_OF_PASSWORD,
    message: `Longer than ${MINIMUN_LENGTH_OF_PASSWORD} characters`,
  },
]

export const validatePassword = (password: string) =>
  password
    ? passwordRestrictions.map((restriction) => restriction.validator(password))
    : Array(passwordRestrictions.length).fill(true)
