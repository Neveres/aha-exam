/** @jsxImportSource @emotion/react */
import React, { useCallback, useMemo, useState } from 'react'
import { TextField, ThemeProvider } from '@mui/material'

import { colors } from 'src/GlobalCss'
import { AhaCalendar } from 'src/components'
import { theme } from './theme'
import { birthdayPicker } from './styles'

export const BirthdayPicker = () => {
  const [birthdayDate, setBirthdayDate] = useState<string | Date>('')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [isOpen, setAhaCalendarOpenStatus] = useState(false)

  const closeAhaCalendar = useCallback(() => {
    setAhaCalendarOpenStatus(false)
  }, [])

  const openAhaCalendar = useCallback(() => {
    setAhaCalendarOpenStatus(true)
  }, [])

  const onFocus = useCallback(
    (event: React.FocusEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget)
      openAhaCalendar()
    },
    [openAhaCalendar],
  )

  const parsedBirthdayDate = useMemo(() => {
    if (typeof birthdayDate !== 'string') {
      const date = birthdayDate.getDate()
      const month = birthdayDate.getMonth() + 1

      return `${date < 10 ? `0${date}` : date}/${
        month < 10 ? `0${month}` : month
      }/${birthdayDate.getFullYear()}`
    } else {
      return birthdayDate
    }
  }, [birthdayDate])

  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          label="Birthday"
          InputLabelProps={{
            shrink: true,
            style: { color: colors.label },
          }}
          inputProps={{
            style: { color: colors.label },
          }}
          placeholder="mm/dd/yyyy"
          css={birthdayPicker}
          value={parsedBirthdayDate}
          onFocus={onFocus}
        />
      </ThemeProvider>
      <AhaCalendar
        anchorEl={anchorEl}
        setAnchorElDate={setBirthdayDate}
        open={isOpen}
        placement="bottom-start"
        closeAhaCalendar={closeAhaCalendar}
      />
    </>
  )
}