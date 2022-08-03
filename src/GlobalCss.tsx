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
        background-color: ${colors.bgPrimary};
      }

      .MuiPaper-root {
        top: 0 !important;
        .MuiButtonBase-root {
          display: inline-flex;
        }
      }

      .component-title {
        font-style: normal;
        font-weight: 700;
        font-size: 96px;
        line-height: 150%;
      }
    `}
  />
)

export const fontFamily = {
  heading: 'Ubuntu',
}

export const colors = {
  bgPrimary: '#181818',
}
