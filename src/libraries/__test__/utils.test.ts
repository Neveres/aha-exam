import {
  areCharactersEnough,
  validPasswordWithCharCode,
  validatePassword,
} from '../utils'

describe('utils', () => {
  test('areCharactersEnough should work well', () => {
    expect(areCharactersEnough('less')).toBeFalsy()
    expect(areCharactersEnough('isEnough')).toBeTruthy()
  })

  describe('validPasswordWithCharCode should return expected result', () => {
    test('when input has upper case letter', () => {
      expect(validPasswordWithCharCode('L')).toStrictEqual([
        true,
        false,
        false,
        false,
      ])
    })

    test('when input has lower case letter', () => {
      expect(validPasswordWithCharCode('l')).toStrictEqual([
        false,
        true,
        false,
        false,
      ])
    })

    test('when input has number', () => {
      expect(validPasswordWithCharCode('1')).toStrictEqual([
        false,
        false,
        true,
        false,
      ])
    })

    test('when input has special character', () => {
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
        expect(validPasswordWithCharCode(specialCharacters[i])).toStrictEqual([
          false,
          false,
          false,
          true,
        ])
      }
    })

    test('when input is empty string', () => {
      expect(validPasswordWithCharCode('')).toStrictEqual([
        false,
        false,
        false,
        false,
      ])
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
