/** @jsxImportSource @emotion/react */
import React, { useCallback, useState } from 'react'
import { ThemeProvider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, Calendar } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

import { theme } from './theme'
import { calendarContainer } from './styles'

export const AhaCalendar = () => {
  const [date, setDate] = useState(new Date())

  const onChange = useCallback((newDate: MaterialUiPickersDate) => {
    if (newDate) {
      setDate(newDate)
    }
  }, [])

  return (
    <div css={calendarContainer}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Calendar date={date} onChange={onChange} />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  )
}
