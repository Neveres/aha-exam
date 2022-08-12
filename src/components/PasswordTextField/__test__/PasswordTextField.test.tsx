import React from 'react'
import { create } from 'react-test-renderer'

import { PasswordTextField, getEncryptedPassword } from '../PasswordTextField'

describe('PasswordTextField', () => {
  test('should render well', () => {
    expect(create(<PasswordTextField />).toJSON()).toMatchSnapshot()
  })

  test('getEncryptedPassword should return expected result', () => {
    expect(getEncryptedPassword(0)).toBe('')
    expect(getEncryptedPassword(5)).toBe('*****')
  })
})
