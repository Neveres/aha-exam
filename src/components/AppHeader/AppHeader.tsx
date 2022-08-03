/** @jsxImportSource @emotion/react */
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { menuItems } from 'src/Routes'
import { appHeaderContainer } from './styles'

const AppHeader = () => {
  const renderMenuItems = useMemo(
    () =>
      menuItems.map((item) => {
        const { name, path } = item

        return (
          <span key={path}>
            <Link to={path}>{name}</Link>
          </span>
        )
      }),
    [],
  )

  return <div css={appHeaderContainer}>{renderMenuItems}</div>
}

export default AppHeader
