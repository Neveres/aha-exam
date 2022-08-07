/** @jsxImportSource @emotion/react */
import React, { useRef, useEffect } from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader, AhaCalendar } from 'src/components'
import { calendarContainer, ahaCalendarContainer } from './styles'

const Calendar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setAnchorEl(buttonRef.current)
  }, [])

  return (
    <div css={calendarContainer}>
      <ComponentHeader title={menuItems[1].name} />
      <div css={ahaCalendarContainer}>
        <button ref={buttonRef} style={{ visibility: 'hidden' }}></button>
        <AhaCalendar anchorEl={anchorEl} />
      </div>
    </div>
  )
}

export default Calendar
