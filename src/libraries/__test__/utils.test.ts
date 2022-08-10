import { passwordRestrictions, validatePassword } from '../utils'

describe('utils', () => {
  describe('passwordRestrictions validator should return expected result', () => {
    const MIN_OF_CHAR_CODE = 0
    const MAX_OF_CHAR_CODE = 65535

    test('when input has upper case letter', () => {
      const { validator } = passwordRestrictions[0]

      const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)
      const CHAR_CODE_OF_UPPER_Z = 'Z'.charCodeAt(0)
      for (let i = MIN_OF_CHAR_CODE, maxI = MAX_OF_CHAR_CODE; i <= maxI; i++) {
        if (CHAR_CODE_OF_UPPER_A <= i && i <= CHAR_CODE_OF_UPPER_Z) {
          expect(validator(String.fromCharCode(i))).toBeTruthy()
        } else {
          expect(validator(String.fromCharCode(i))).toBeFalsy()
        }
      }
    })

    test('when input has lower case letter', () => {
      const { validator } = passwordRestrictions[1]
      const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
      const CHAR_CODE_OF_LOWER_Z = 'z'.charCodeAt(0)
      for (let i = MIN_OF_CHAR_CODE, maxI = MAX_OF_CHAR_CODE; i <= maxI; i++) {
        if (CHAR_CODE_OF_LOWER_A <= i && i <= CHAR_CODE_OF_LOWER_Z) {
          expect(validator(String.fromCharCode(i))).toBeTruthy()
        } else {
          expect(validator(String.fromCharCode(i))).toBeFalsy()
        }
      }
    })

    test('when input has number', () => {
      const { validator } = passwordRestrictions[2]
      const CHAR_CODE_OF_LOWER_ZERO = '0'.charCodeAt(0)
      const CHAR_CODE_OF_LOWER_NINE = '9'.charCodeAt(0)
      for (let i = MIN_OF_CHAR_CODE, maxI = MAX_OF_CHAR_CODE; i <= maxI; i++) {
        if (CHAR_CODE_OF_LOWER_ZERO <= i && i <= CHAR_CODE_OF_LOWER_NINE) {
          expect(validator(String.fromCharCode(i))).toBeTruthy()
        } else {
          expect(validator(String.fromCharCode(i))).toBeFalsy()
        }
      }
    })

    test('when input has special character', () => {
      const { validator } = passwordRestrictions[3]
      const specialCharacters = [
        '~',
        '`',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '=',
        '+',
        '}',
        ']',
        '{',
        '[',
        '"',
        "'",
        ';',
        ':',
        '/',
        '?',
        '>',
        '.',
        ',',
        '<',
      ]

      for (let i = 0, maxI = specialCharacters.length; i < maxI; i++) {
        expect(validator(specialCharacters[i])).toBeTruthy()
      }
    })

    test('when input has enough or not enough characters', () => {
      const { validator } = passwordRestrictions[4]
      expect(validator('less')).toBeFalsy()
      expect(validator('isEnough')).toBeTruthy()
    })
  })

  describe('validatePassword should return expected result', () => {
    test('when input is empty string', () => {
      expect(validatePassword('')).toStrictEqual([true, true, true, true, true])
    })

    test('when input is valid', () => {
      expect(validatePassword('As1~qwert')).toStrictEqual([
        true,
        true,
        true,
        true,
        true,
      ])
    })

    test('when input is invalid', () => {
      expect(validatePassword('s1~qwert')).toStrictEqual([
        false,
        true,
        true,
        true,
        true,
      ])
      expect(validatePassword('A1~QWERT')).toStrictEqual([
        true,
        false,
        true,
        true,
        true,
      ])
      expect(validatePassword('As~qwert')).toStrictEqual([
        true,
        true,
        false,
        true,
        true,
      ])
      expect(validatePassword('As1qwert')).toStrictEqual([
        true,
        true,
        true,
        false,
        true,
      ])
      expect(validatePassword('As1qwe!')).toStrictEqual([
        true,
        true,
        true,
        true,
        false,
      ])
    })
  })
})
