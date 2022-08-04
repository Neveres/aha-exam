/** @jsxImportSource @emotion/react */
import React from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader } from 'src/components'
// import { widthOfAdvancedEffects } from './styles'

const AdvancedEffects = () => {
  return (
    <>
      <ComponentHeader title={menuItems[2].name} />
      <div>AdvancedEffects</div>
    </>
  )
}

export default AdvancedEffects
