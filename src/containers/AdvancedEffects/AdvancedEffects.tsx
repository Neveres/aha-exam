/** @jsxImportSource @emotion/react */
import React from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader, BirthdayPicker } from 'src/components'
import { advancedEffectsContainer, birthdayPickerContainer } from './styles'

const AdvancedEffects = () => {
  return (
    <div css={advancedEffectsContainer}>
      <ComponentHeader title={menuItems[2].name} />
      <div css={birthdayPickerContainer}>
        <BirthdayPicker />
      </div>
    </div>
  )
}

export default AdvancedEffects
