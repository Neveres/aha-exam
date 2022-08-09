import { passwordRestrictions, validatePassword } from '../utils'

describe('utils', () => {
  describe('passwordRestrictions validator should return expected result', () => {
    test('when input has upper case letter', () => {
      const upperCaseValidator = passwordRestrictions[0].validator
      expect(upperCaseValidator('L')).toBeTruthy()
    })

    test('when input has lower case letter', () => {
      const lowerCaseValidator = passwordRestrictions[1].validator
      expect(lowerCaseValidator('l')).toBeTruthy()
    })

    test('when input has number', () => {
      const numberValidator = passwordRestrictions[2].validator
      expect(numberValidator('1')).toBeTruthy()
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
