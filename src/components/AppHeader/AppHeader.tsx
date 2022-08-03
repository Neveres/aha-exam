/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from '@mui/material'

import { menuItems } from 'src/Routes'

export interface IAppHeaderProps {
  pathname?: string
}

const AppHeader: React.FC<IAppHeaderProps> = () => {
  const renderMenuItems = useCallback(() => {
    return menuItems.map((item) => {
      const { name, path } = item

      return (
        <MenuItem key={path}>
          <Link to={path}>{name}</Link>
        </MenuItem>
      )
    })
  }, [])

  return (
    <Menu className="horiz-menu" open={true}>
      {renderMenuItems()}
    </Menu>
  )
}

export default AppHeader
