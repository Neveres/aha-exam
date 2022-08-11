import { css } from '@emotion/react'

import { colors, fontFamily } from 'src/GlobalCss'

export const appHeaderContainer = css`
  padding: 20px 25px 20px;
  button {
    height: 45px;
    margin-right: 10px;
    background: ${colors.background};
    border-radius: 10px;

    a {
      font-family: ${fontFamily.ubuntu};
      text-decoration: none;
      color: ${colors.label};
    }
  }
`
