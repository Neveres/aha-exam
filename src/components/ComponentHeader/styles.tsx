import { css } from '@emotion/react'

import { colors } from 'src/GlobalCss'

export const headerContiner = css`
  height: 283px;
  margin-bottom: 24px;
  padding-left: 122px;
  display: flex;
  align-items: center;
  letter-spacing: -1.5px;
  border-radius: 50px 50px 0px 0px;
  background: ${colors.bgPrimary};
  color: ${colors.titleColor};
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 150%;
`
