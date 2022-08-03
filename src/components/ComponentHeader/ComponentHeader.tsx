/** @jsxImportSource @emotion/react */
import React from 'react'

import { headerContiner } from './styles'

interface ComponentHeaderProps {
  title: string
}

export const ComponentHeader: React.FC<ComponentHeaderProps> = (props) => {
  const { title } = props

  return (
    <div css={headerContiner}>
      <div>{title}</div>
    </div>
  )
}
