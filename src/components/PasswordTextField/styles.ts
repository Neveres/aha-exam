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
    height: 58px;

    input {
      height: 24px;
      padding: 0 0 0 12px;
      font-size: ${fontSize.large};
      font-weight: ${fontWeight.lighter};
      line-height: 24px;
      letter-spacing: 0.15px;
    }

    legend {
      width: 63px;
    }
  }
`
