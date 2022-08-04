import { css } from '@emotion/react'

export const hintsContainer = css`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 12px;
  position: relative;
  width: 335px;
  /* height: 226px; */
  background: #242424;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`

export const hintContainer = css`
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  width: 250px;

  span {
    color: #ffffff;
    padding-left: 12px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.25px;
  }
`
