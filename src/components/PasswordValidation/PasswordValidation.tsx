/** @jsxImportSource @emotion/react */
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'

import { hintsContainer, hintContainer } from './styles'

const HINTS = [
  'Have at least one uppercase letter',
  'Have at least one lowercase letter',
  'Have at least one number',
  'Have at least one special character (!@#$...etc)',
  'Longer than 8 characters',
]

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
    <div css={hintsContainer}>
      {HINTS.map((hint, index) => {
        return (
          <div css={hintContainer} key={hint}>
            {getPrefixIcon(validationResult[index])}
            <span>{hint}</span>
          </div>
        )
      })}
    </div>
  )
}
