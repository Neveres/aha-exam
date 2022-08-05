/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { ThemeProvider, Popper, Button } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  Calendar,
  Picker,
} from '@material-ui/pickers/'
import { CalendarProps } from '@material-ui/pickers/views/Calendar/Calendar'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

import { YearPickerToolbar } from 'src/components'
import { theme } from './theme'
import {
  calendarContainer,
  yearPickerSwitch,
  yearPickerContiner,
  notInCurrentMonth,
} from './styles'

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
  const [isYearPickerVisible, setYearPickerStatus] = useState(false)

  const currentYear = useMemo(() => date.getFullYear(), [date])
  const currentMonth = useMemo(() => MONTH_NAMES[date.getMonth()], [date])

  const ToolbarComponent = <YearPickerToolbar year={currentYear} />
  const renderDay: CalendarProps['renderDay'] = (
    day,
    selectedDate,
    dayInCurrentMonth,
    dayComponent,
  ) => {
    if (!dayInCurrentMonth) {
      const newDayComponent = {
        ...dayComponent,
        props: {
          ...dayComponent.props,
          hidden: false,
        },
      }
      return <div css={notInCurrentMonth}>{newDayComponent}</div>
    } else {
      return dayComponent
    }
  }

  const showYearPicker = useCallback(() => {
    setYearPickerStatus(true)
  }, [])

  const hideYearPicker = useCallback(() => {
    setYearPickerStatus(false)
  }, [])

  const onChangeDate = useCallback((newDate: MaterialUiPickersDate) => {
    if (newDate) {
      setDate(newDate)
    }
  }, [])

  const onChangeYear = useCallback(
    (newDate: MaterialUiPickersDate) => {
      if (newDate) {
        setDate(newDate)
        hideYearPicker()
      }
    },
    [hideYearPicker],
  )

  useEffect(() => {
    setAnchorEl(divRef.current)
  }, [])

  return (
    <div css={calendarContainer}>
      <button ref={divRef} style={{ visibility: 'hidden' }}></button>
      <Popper
        open={true}
        anchorEl={anchorEl}
        placement="right-start"
        css={yearPickerContiner}
      >
        <div className="sub-title">Text</div>
        <div className="main-title">{`${currentMonth}, ${currentYear}`}</div>
        {!isYearPickerVisible && (
          <div css={yearPickerSwitch} onClick={showYearPicker}></div>
        )}
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {isYearPickerVisible ? (
              <Picker
                date={date}
                onChange={onChangeYear}
                views={'year' as any}
                openTo={'year' as any}
                ToolbarComponent={() => ToolbarComponent}
              />
            ) : (
              <Calendar
                date={date}
                onChange={onChangeDate}
                disablePast={false}
                disableFuture={false}
                renderDay={renderDay}
              />
            )}
          </MuiPickersUtilsProvider>
          <div className="button-groups">
            <button className='cancel-button'>Cancel</button>
            <button>OK</button>
          </div>
        </ThemeProvider>
      </Popper>
    </div>
  )
}
