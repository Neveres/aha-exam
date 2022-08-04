/** @jsxImportSource @emotion/react */
import React from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader, PasswordTextField } from 'src/components'
import { passwordInputContainer, inputContainer } from './styles'

const PasswordInput = () => {
  return (
    <div css={passwordInputContainer}>
      <ComponentHeader title={menuItems[0].name} />
      <div css={inputContainer}>
        <PasswordTextField />
      </div>
    </div>
  )
}

export default PasswordInput
