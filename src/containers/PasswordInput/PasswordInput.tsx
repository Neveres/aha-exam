/** @jsxImportSource @emotion/react */
import React from 'react'

import { menuItems } from 'src/Routes'
import { ComponentHeader } from 'src/components'
import { widthOfPasswordInput } from './styles'

const PasswordInput = () => {
  return (
    <>
      <ComponentHeader title={menuItems[0].name} />
      <div>PasswordInput</div>
    </>
  )
}

export default PasswordInput
