import React from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader } from 'src/components'
import { widthOfCalendar } from './styles'

const Calendar = () => {
  return (
    <>
      <ComponentHeader title={menuItems[1].name} />
      <div>Calendar</div>
    </>
  )
}

export default Calendar
