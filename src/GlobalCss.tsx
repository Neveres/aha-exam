import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
        font-family: 'Ubuntu' !important;
      }

      #root {
        height: 100%;
      }
    `}
  />
)

export const colors = {
  bgPrimary: '#181818',
  label: '#FFFFFF',
}
