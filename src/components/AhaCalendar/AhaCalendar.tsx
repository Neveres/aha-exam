/** @jsxImportSource @emotion/react */
import React, { useCallback, useState, useMemo } from 'react'
import { Popper } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  Calendar,
  Picker,
} from '@material-ui/pickers/'
import { CalendarProps } from '@material-ui/pickers/views/Calendar/Calendar'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

import { YearPickerToolbar } from 'src/components'
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
  setAnchorElDate?: React.Dispatch<React.SetStateAction<Date>>
}

export const AhaCalendar: React.FC<AhaCalendarProps> = (props) => {
  const { anchorEl, setAnchorElDate } = props
  const [date, setDate] = useState(new Date())
  const [isYearPickerVisible, setYearPickerStatus] = useState(false)
  const [isOpen, setPopperStatus] = useState(false)

  const currentYear = useMemo(() => date.getFullYear(), [date])
  const currentMonth = useMemo(() => MONTH_NAMES[date.getMonth()], [date])
  const ToolbarComponent = useMemo(
    () => (
      <YearPickerToolbar year={currentYear} date={date} setDate={setDate} />
    ),
    [currentYear, date],
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

  const closePopper = useCallback(() => {
    setPopperStatus(false)
  }, [])

  const openPopper = useCallback(() => {
    setPopperStatus(true)
  }, [])

  const onClickCancel = useCallback(() => {
    closePopper()
  }, [closePopper])

  const onClickOk = useCallback(() => {
    if (setAnchorElDate) {
      setAnchorElDate(date)
    }

    closePopper()
  }, [closePopper, date, setAnchorElDate])

  return (
    <Popper
      open={isOpen || (!!anchorEl && !setAnchorElDate)}
      anchorEl={anchorEl}
      placement="right-start"
      css={calendarContainer}
    >
      <div className="sub-title">Text</div>
      <div className="main-title">{`${currentMonth}, ${currentYear}`}</div>
      {!isYearPickerVisible && (
        <div className="year-picker-switch" onClick={showYearPicker}></div>
      )}
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
          <Calendar date={date} onChange={onChangeDate} renderDay={renderDay} />
        )}
      </MuiPickersUtilsProvider>
      <div className="button-groups">
        <button className="cancel-button" onClick={onClickCancel}>
          Cancel
        </button>
        <button onClick={onClickOk}>OK</button>
      </div>
    </Popper>
  )
}
