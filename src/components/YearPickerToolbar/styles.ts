import { css } from '@emotion/react'

import { colors, fontWeight, fontSize } from 'src/GlobalCss'

export const yearPickerToolbarContainer = css`
  padding: 13px 10px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  color: ${colors.label};

  .year-picker-label {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.large};
    line-height: 150%;
  }
`
