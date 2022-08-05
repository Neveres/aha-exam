/** @jsxImportSource @emotion/react */
import React, { useCallback, useState, useMemo } from 'react'
import { ThemeProvider, Popper } from '@material-ui/core'
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
import { calendarContainer, notInCurrentMonth } from './styles'

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

export const renderDay: CalendarProps['renderDay'] = (
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

interface AhaCalendarProps {
  anchorEl: HTMLElement | null
}

export const AhaCalendar: React.FC<AhaCalendarProps> = (props) => {
  const { anchorEl } = props
  const [date, setDate] = useState(new Date())
  const [isYearPickerVisible, setYearPickerStatus] = useState(false)

  const currentYear = useMemo(() => date.getFullYear(), [date])
  const currentMonth = useMemo(() => MONTH_NAMES[date.getMonth()], [date])
  const ToolbarComponent = useMemo(
    () => <YearPickerToolbar year={currentYear} />,
    [currentYear],
  )

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

  return (
    <Popper
      open={!!anchorEl}
      anchorEl={anchorEl}
      placement="right-start"
      css={calendarContainer}
    >
      <div className="sub-title">Text</div>
      <div className="main-title">{`${currentMonth}, ${currentYear}`}</div>
      {!isYearPickerVisible && (
        <div className="year-picker-switch" onClick={showYearPicker}></div>
      )}
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {isYearPickerVisible ? (
            <Picker
              date={date}
              onChange={onChangeYear}
              views={['year']}
              openTo={'year'}
              ToolbarComponent={() => ToolbarComponent}
            />
          ) : (
            <Calendar
              date={date}
              onChange={onChangeDate}
              renderDay={renderDay}
            />
          )}
        </MuiPickersUtilsProvider>
        <div className="button-groups">
          <button className="cancel-button">Cancel</button>
          <button>OK</button>
        </div>
      </ThemeProvider>
    </Popper>
  )
}
