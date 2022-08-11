/** @jsxImportSource @emotion/react */
import React, { useCallback, useMemo, useState } from 'react'
import { TextField, ThemeProvider } from '@mui/material'

import { colors } from 'src/GlobalCss'
import { validatePassword } from 'src/libraries'
import { PurePasswordValidation } from 'src/components'
import { theme } from './theme'
import { passwordInput } from './styles'

export const PasswordTextField = () => {
  const symbolOfInput = '*'
  const [password, setPassword] = useState('')

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event

      const { length: lengthOfPassword } = password
      setPassword(
        value.length > lengthOfPassword
          ? `${password}${value.slice(-1)}`
          : password.slice(0, lengthOfPassword - 1),
      )
    },
    [password],
  )

  const validationResult = useMemo(() => validatePassword(password), [password])
  const encryptedPassword = useMemo(
    () => symbolOfInput.repeat(password.length),
    [password],
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          label="Password"
          InputLabelProps={{
            shrink: true,
            style: {
              transform: 'translate(14px, -9px) scale(1)',
              fontSize: '12px',
              color: colors.label,
              lineHeight: '18px',
              letterSpacing: '0.4px',
              textOverflow: 'unset',
              left: '2px',
              top: '-3px',
            },
          }}
          inputProps={{
            style: { color: colors.label },
          }}
          placeholder="Password"
          css={passwordInput}
          value={encryptedPassword}
          onChange={onChange}
        />
      </ThemeProvider>
      {password && (
        <PurePasswordValidation validationResult={validationResult} />
      )}
    </>
  )
}
