/** @jsxImportSource @emotion/react */
import React from 'react'
import { ArrowLeftIcon } from '@material-ui/pickers/_shared/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@material-ui/pickers/_shared/icons/ArrowRightIcon'

import { yearPickerToolbarContainer } from './styles'

interface YearPickerToolbarProps {
  year: number
}

export const YearPickerToolbar: React.FC<YearPickerToolbarProps> = (props) => {
  const { year } = props
  return (
    <div css={yearPickerToolbarContainer}>
      <ArrowLeftIcon />
      <div className="year-picker-label">{year}</div>
      <ArrowRightIcon />
    </div>
  )
}
