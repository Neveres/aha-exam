import React from 'react'
import { create } from 'react-test-renderer'

import { PasswordValidation, getPrefixIcon } from '../PasswordValidation'

describe('PasswordValidation', () => {
  test('should render well', () => {
    const defaultValidationResult = Array(5).fill(false)
    for (let i = 0, maxI = 5; i < maxI; i++) {
      const validationResult = [...defaultValidationResult]
      validationResult[i] = true

      expect(
        create(
          <PasswordValidation validationResult={validationResult} />,
        ).toJSON(),
      ).toMatchSnapshot()
    }
  })

  test('getPrefixIcon should return expected result corresponding to input', () => {
    expect(create(getPrefixIcon(true)).toJSON()).toMatchSnapshot()
    expect(create(getPrefixIcon(false)).toJSON()).toMatchSnapshot()
  })
})
