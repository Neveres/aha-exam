import React from 'react'
import { css, Global } from '@emotion/react'

export const GlobalCss = () => (
  <Global
    styles={css`
      * {
        font-family: ${fontFamily.heading};
      }

      #root {
        height: 100%;
      }
    `}
  />
)

export const fontFamily = {
  heading: 'Ubuntu',
}

export const colors = {
  bgPrimary: '#181818',
  titleColor: '#FFFFFF',
}
