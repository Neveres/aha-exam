/** @jsxImportSource @emotion/react */
import React from 'react'

import { appBody } from './styles'

export interface IAppBodyProps {
  pathname: string
  children?: React.ReactElement
}

const AppBody: React.FC<IAppBodyProps> = (props) => {
  const { children } = props

  return <div css={appBody}>{children}</div>
}

export default AppBody
