import { css } from '@emotion/react'

import { colors, fontSize, fontWeight, fontFamily } from 'src/GlobalCss'

export const validationsContainer = css`
  box-sizing: border-box;
  position: relative;
  margin-top: 20px;
  padding: 3px 12px 0 12px;
  width: 335px;
  height: 226px;
  font-family: ${fontFamily.ubuntu};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background: #242424;
`

export const validationContainer = css`
  width: 311px;
  height: 40px;
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    color: ${colors.label};
    padding-left: 10px;
    font-style: normal;
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.normal};
    line-height: 150%;
    letter-spacing: 0.25px;
  }
`
