import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
      }

      #root {
        height: 100%;
      }
    `}
  />
)

export const fontSize = {
  extraLarge: '32px',
  large: '16px',
  normal: '14px',
  small: '11px',
}

export const fontWeight = {
  bolder: 700,
  bold: 600,
  lighter: 400,
}

export const colors = {
  background: '#181818',
  label: '#FFFFFF',
}
