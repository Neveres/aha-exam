/** @jsxImportSource @emotion/react */
import React, { useCallback, useMemo, useState } from 'react'
import { TextField, ThemeProvider } from '@mui/material'

import { menuItems } from 'src/Routes'
import { ComponentHeader } from 'src/components'
import { validatePassword } from 'src/libraries'
import { theme } from './theme'
import { PasswordValidation } from './PasswordValidation'
import { passwordInputContainer, inputContainer, passwordInput } from './styles'

const PasswordInput = () => {
  const [password, setPassword] = useState('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }, [])

  const validationResult = useMemo(() => validatePassword(password), [password])

  return (
    <div css={passwordInputContainer}>
      <ComponentHeader title={menuItems[0].name} />
      <div css={inputContainer}>
        <ThemeProvider theme={theme}>
          <TextField
            label="Password"
            type="password"
            InputLabelProps={{
              shrink: true,
              style: { color: '#ffffff' },
            }}
            inputProps={{
              style: { color: '#ffffff' },
            }}
            placeholder="Password"
            css={passwordInput}
            value={password}
            onChange={onChange}
          />
        </ThemeProvider>
        {password && <PasswordValidation validationResult={validationResult} />}
      </div>
    </div>
  )
}

export default PasswordInput
