import { css } from '@emotion/react'

import { colors, fontWeight, fontSize } from 'src/GlobalCss'

export const yearPickerToolbarContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  margin-top: 1px;
  margin-bottom: 15px;
  font-family: 'Inter';
  font-style: normal;
  color: ${colors.label};

  .year-picker-label {
    width: 100%;
    height: 23px;
    text-align: center;
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.large};
    line-height: 150%;
  }

  svg {
    width: 24px;
    height: 24px;
    padding: 20px 12px 12px 11px;
  }
`
