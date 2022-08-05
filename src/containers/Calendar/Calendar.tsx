import React, { useRef, useEffect } from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader, AhaCalendar } from 'src/components'

const Calendar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    setAnchorEl(buttonRef.current)
  }, [])

  return (
    <>
      {/* <ComponentHeader title={menuItems[1].name} /> */}
      <button ref={buttonRef} style={{ visibility: 'hidden' }}></button>
      <AhaCalendar anchorEl={anchorEl} />
    </>
  )
}

export default Calendar
