import { css } from '@emotion/react'

import { fontSize, fontWeight } from 'src/GlobalCss'

export const passwordInput = css`
  width: 335px;
  height: 58px;
  box-sizing: border-box;

  * {
    font-family: 'ubuntu' !important;
  }

  .MuiInputBase-root {
    height: 100%;

    input {
      position: absolute;
      top: 15px;
      width: 311px;
      height: 24px;
      padding: 0 12px;
      font-size: ${fontSize.large};
      font-weight: ${fontWeight.lighter};
      line-height: 24px;
      letter-spacing: 0.15px;
    }

    fieldset {
      height: 100%;
      box-sizing: border-box;
      padding: 0 0 0 9px;

      legend {
        width: 63px;
        height: 0;
        span {
          padding-left: 0;
        }
      }
    }
  }
`
