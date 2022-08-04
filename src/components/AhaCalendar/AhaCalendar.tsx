/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { ThemeProvider, Popper } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, Calendar, Picker } from '@material-ui/pickers'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

import { theme } from './theme'
import { calendarContainer } from './styles'

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const AhaCalendar = () => {
  const divRef = useRef<HTMLButtonElement>(null)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [date, setDate] = useState(new Date())

  const onChange = useCallback((newDate: MaterialUiPickersDate) => {
    if (newDate) {
      setDate(newDate)
    }
  }, [])

  useEffect(() => {
    setAnchorEl(divRef.current)
  }, [])

  return (
    <div css={calendarContainer}>
      <button ref={divRef} style={{ visibility: 'hidden' }}></button>
      <Popper open={true} anchorEl={anchorEl} placement="right-start">
        <div>Text</div>
        <div>{`${MONTH_NAMES[date.getMonth()]}, ${date.getFullYear()}`}</div>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Calendar date={date} onChange={onChange} />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Picker
              date={date}
              onChange={onChange}
              views={'year' as any}
              openTo={'year' as any}
              ToolbarComponent={() => <div>Tool</div>}
            />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Popper>
    </div>
  )
}
