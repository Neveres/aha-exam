/** @jsxImportSource @emotion/react */
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'

import { passwordRestrictions } from 'src/libraries'
import { validationsContainer, validationContainer } from './styles'

export const getPrefixIcon = (isValid: boolean) => {
  return isValid ? (
    <CheckCircleIcon
      sx={{
        color: '#00D1FF',
      }}
    />
  ) : (
    <CheckCircleOutlineRoundedIcon
      sx={{
        color: '#565656',
      }}
    />
  )
}

interface PasswordValidationProps {
  validationResult: boolean[]
}

export const PasswordValidation: React.FC<PasswordValidationProps> = (
  props,
) => {
  const { validationResult } = props

  return (
    <div css={validationsContainer}>
      {passwordRestrictions.map((restriction, index) => {
        const { message, style = {} } = restriction

        return (
          <div css={validationContainer} key={message} style={style}>
            {getPrefixIcon(validationResult[index])}
            <span>{message}</span>
          </div>
        )
      })}
    </div>
  )
}

export const PurePasswordValidation = React.memo(
  PasswordValidation,
  (prevProps: PasswordValidationProps, nextProps: PasswordValidationProps) => {
    const { validationResult: previousValidationResult } = prevProps
    const { validationResult: nextValidationResult } = nextProps

    return nextValidationResult.every((result, index) => {
      return result === previousValidationResult[index]
    })
  },
)
