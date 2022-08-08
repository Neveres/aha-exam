/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect } from 'react'
import { ArrowLeftIcon } from '@material-ui/pickers/_shared/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@material-ui/pickers/_shared/icons/ArrowRightIcon'

import { yearPickerToolbarContainer } from './styles'

const UNIT = 1

const getNewDate = (date: Date, addend: number) => {
  const newDate = new Date(date.getTime())
  newDate.setFullYear(date.getFullYear() + addend)
  return newDate
}

interface YearPickerToolbarProps {
  year: number
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
}

export const YearPickerToolbar: React.FC<YearPickerToolbarProps> = (props) => {
  const { year, date, setDate } = props

  const increaseYear = useCallback(() => {
    setDate(getNewDate(date, UNIT))
  }, [date, setDate])

  const decreaseYear = useCallback(() => {
    setDate(getNewDate(date, -UNIT))
  }, [date, setDate])

  useEffect(() => {
    const selectedYear = document.getElementsByClassName(
      'MuiPickersYear-yearSelected',
    )[0]

    if (selectedYear) {
      selectedYear.scrollIntoView({ block: 'center' })
    }
  }, [year])

  return (
    <div css={yearPickerToolbarContainer}>
      <ArrowLeftIcon onClick={decreaseYear} />
      <div className="year-picker-label">{year}</div>
      <ArrowRightIcon onClick={increaseYear} />
    </div>
  )
}
