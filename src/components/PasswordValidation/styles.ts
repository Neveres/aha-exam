import { css } from '@emotion/react'

import { colors, fontSize, fontWeight, fontFamily } from 'src/GlobalCss'

export const hintsContainer = css`
  font-family: ${fontFamily.ubuntu};
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 12px;
  position: relative;
  width: 335px;
  /* height: 226px; */
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background: #242424;
`

export const hintContainer = css`
  padding-bottom: 10px;
  display: flex;
  align-items: center;

  span {
    color: ${colors.label};
    padding-left: 12px;
    font-style: normal;
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.normal};
    line-height: 150%;
    letter-spacing: 0.25px;
  }
`
