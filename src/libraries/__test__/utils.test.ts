import { passwordRestrictions, validatePassword } from '../utils'

describe('utils', () => {
  describe('passwordRestrictions validator should return expected result', () => {
    const MIN_OF_CHAR_CODE = 0
    const MAX_OF_CHAR_CODE = 65535

    test('when input has upper case letter', () => {
      const upperCaseValidator = passwordRestrictions[0].validator

      const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)
      const CHAR_CODE_OF_UPPER_Z = 'Z'.charCodeAt(0)
      for (let i = MIN_OF_CHAR_CODE, maxI = MAX_OF_CHAR_CODE; i <= maxI; i++) {
        if (CHAR_CODE_OF_UPPER_A <= i && i <= CHAR_CODE_OF_UPPER_Z) {
          expect(upperCaseValidator(String.fromCharCode(i))).toBeTruthy()
        } else {
          expect(upperCaseValidator(String.fromCharCode(i))).toBeFalsy()
        }
      }
    })

    test('when input has lower case letter', () => {
      const lowerCaseValidator = passwordRestrictions[1].validator
      const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
      const CHAR_CODE_OF_LOWER_Z = 'z'.charCodeAt(0)
      for (let i = MIN_OF_CHAR_CODE, maxI = MAX_OF_CHAR_CODE; i <= maxI; i++) {
        if (CHAR_CODE_OF_LOWER_A <= i && i <= CHAR_CODE_OF_LOWER_Z) {
          expect(lowerCaseValidator(String.fromCharCode(i))).toBeTruthy()
        } else {
          expect(lowerCaseValidator(String.fromCharCode(i))).toBeFalsy()
        }
      }
    })

    test('when input has number', () => {
      const numberValidator = passwordRestrictions[2].validator
      const CHAR_CODE_OF_LOWER_ZERO = '0'.charCodeAt(0)
      const CHAR_CODE_OF_LOWER_NINE = '9'.charCodeAt(0)
      for (let i = MIN_OF_CHAR_CODE, maxI = MAX_OF_CHAR_CODE; i <= maxI; i++) {
        if (CHAR_CODE_OF_LOWER_ZERO <= i && i <= CHAR_CODE_OF_LOWER_NINE) {
          expect(numberValidator(String.fromCharCode(i))).toBeTruthy()
        } else {
          expect(numberValidator(String.fromCharCode(i))).toBeFalsy()
        }
      }
    })

    test('when input has special character', () => {
      const specialCharacterValidator = passwordRestrictions[3].validator
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
        expect(specialCharacterValidator(specialCharacters[i])).toBeTruthy()
      }
    })

    test('when input has enough or not enough characters', () => {
      const numberOfCharacter = passwordRestrictions[4]
      expect(numberOfCharacter.validator('less')).toBeFalsy()
      expect(numberOfCharacter.validator('isEnough')).toBeTruthy()
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
