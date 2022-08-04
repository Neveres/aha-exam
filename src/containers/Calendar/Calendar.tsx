import React from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader, AhaCalendar } from 'src/components'

const Calendar = () => {
  return (
    <>
      {/* <ComponentHeader title={menuItems[1].name} /> */}
      <AhaCalendar />
    </>
  )
}

export default Calendar
