import React from 'react'
import { create } from 'react-test-renderer'

import { PasswordTextField } from '../PasswordTextField'

describe('PasswordTextField', () => {
  test('should render well', () => {
    expect(create(<PasswordTextField />).toJSON()).toMatchSnapshot()
  })
})
