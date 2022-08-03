/** @jsxImportSource @emotion/react */
import React, { useCallback, useMemo, useState } from 'react'
import { TextField } from '@mui/material'

import { menuItems } from 'src/Routes'
import { ComponentHeader } from 'src/components'
import { PasswordValidation } from './PasswordValidation'
import { passwordInputContainer, passwordInput } from './styles'

const CHAR_CODE_OF_UPPER_A = 'A'.charCodeAt(0)
const CHAR_CODE_OF_UPPER_Z = 'Z'.charCodeAt(0)
const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const CHAR_CODE_OF_LOWER_Z = 'z'.charCodeAt(0)
const CHAR_CODE_OF_LOWER_ZERO = '0'.charCodeAt(0)
const CHAR_CODE_OF_LOWER_NINE = '9'.charCodeAt(0)
const format = /^[~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/
const MINIMUN_LENGTH_OF_PASSWORD = 8

const areCharactersEnough = (password: string) =>
  password.length >= MINIMUN_LENGTH_OF_PASSWORD
const validPasswordWithCharCode = (password: string) => {
  let isUpperCaseLetterExisted = false
  let isLowerCaseLetterExisted = false
  let isNumberExisted = false
  let isSpecialCharacterExisted = false

  password.split('').forEach((character) => {
    const charCodeOfCharacter = character.charCodeAt(0)
    if (
      CHAR_CODE_OF_UPPER_A <= charCodeOfCharacter &&
      charCodeOfCharacter <= CHAR_CODE_OF_UPPER_Z
    ) {
      isUpperCaseLetterExisted = true
    } else if (
      CHAR_CODE_OF_LOWER_A <= charCodeOfCharacter &&
      charCodeOfCharacter <= CHAR_CODE_OF_LOWER_Z
    ) {
      isLowerCaseLetterExisted = true
    } else if (
      CHAR_CODE_OF_LOWER_ZERO <= charCodeOfCharacter &&
      charCodeOfCharacter <= CHAR_CODE_OF_LOWER_NINE
    ) {
      isNumberExisted = true
    } else if (character.match(format)) {
      isSpecialCharacterExisted = true
    }
  })

  return [
    isUpperCaseLetterExisted,
    isLowerCaseLetterExisted,
    isNumberExisted,
    isSpecialCharacterExisted,
  ]
}
const validatePassword = (password: string) => {
  if (!password) {
    return Array(5).fill(true)
  } else {
    return [
      ...validPasswordWithCharCode(password),
      areCharactersEnough(password),
    ]
  }
}

const PasswordInput = () => {
  const [password, setPassword] = useState('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [])

  const validationResult = useMemo(() => validatePassword(password), [password])

  return (
    <>
      <ComponentHeader title={menuItems[0].name} />
      <div css={passwordInputContainer}>
        <TextField
          label="Password"
          type="password"
          InputLabelProps={{
            shrink: true,
            // style: { color: '#fff' }
          }}
          inputProps={
            {
              // style: { color: '#fff' }
            }
          }
          placeholder="Password"
          css={passwordInput}
          value={password}
          onChange={onChange}
        />

        {password && <PasswordValidation validationResult={validationResult} />}
      </div>
    </>
  )
}

export default PasswordInput
