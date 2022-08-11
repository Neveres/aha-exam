import { css } from '@emotion/react'

import { fontFamily, fontSize, fontWeight } from 'src/GlobalCss'

export const birthdayPickerContainer = css`
  position: relative;
  .aha-calendar {
    position: relative !important;
    transform: none !important;
  }
`

export const birthdayPicker = css`
  * {
    font-family: ${fontFamily.ubuntu} !important;
  }

  width: 335px;
  height: 58px;
  box-sizing: border-box;
  margin-bottom: 9px;

  .MuiInputBase-root {
    height: 58px;

    input {
      position: absolute;
      top: 15px;
      height: 24px;
      padding: 0 0 0 12px;
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
        width: 57px;
        height: 0;
        span {
          padding-left: 0;
        }
      }
    }
  }
`
