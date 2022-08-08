/** @jsxImportSource @emotion/react */
import React, { useCallback, useMemo, useState } from 'react'
import { TextField, ThemeProvider } from '@mui/material'

import { colors } from 'src/GlobalCss'
import { validatePassword } from 'src/libraries'
import { PasswordValidation } from 'src/components'
import { theme } from './theme'
import { passwordInput } from './styles'

export const PasswordTextField = () => {
  const [password, setPassword] = useState('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [])

  const validationResult = useMemo(() => validatePassword(password), [password])

  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          label="Password"
          type="password"
          InputLabelProps={{
            shrink: true,
            style: {
              width: '55px',
              height: '18px',
              transform: 'translate(14px, -9px) scale(1)',
              fontSize: '12px',
              color: colors.label,
              lineHeight: '18px',
              letterSpacing: '0.4px',
              textOverflow: 'unset',
            },
          }}
          inputProps={{
            style: { color: colors.label },
          }}
          placeholder="Password"
          css={passwordInput}
          value={password}
          onChange={onChange}
        />
      </ThemeProvider>
      {password && <PasswordValidation validationResult={validationResult} />}
    </>
  )
}
