import { css } from '@emotion/react'

import { colors, fontSize, fontWeight, fontFamily } from 'src/GlobalCss'

export const hintsContainer = css`
  box-sizing: border-box;
  position: relative;
  margin-top: 20px;
  padding: 8px 12px 0 12px;
  width: 335px;
  height: 226px;
  font-family: ${fontFamily.ubuntu};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background: #242424;

  div:nth-child(4) {
    height: 50px;
  }
`

export const hintContainer = css`
  width: 311px;
  height: 40px;
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }

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
