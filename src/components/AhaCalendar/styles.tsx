import { css } from '@emotion/react'

import { colors } from 'src/GlobalCss'

export const calendarContainer = css`
  box-sizing: border-box;
  width: 320px;
  height: 469px;

  .Mui-selected {
    background-color: #0584cc !important;
  }
`

export const yearPickerSwitch = css`
  position: absolute;
  top: 105px;
  left: 95px;
  z-index: 999999999;
  width: 130px;
  height: 23px;
  cursor: pointer;
`

export const yearPickerContiner = css`
  width: 320px;
  height: 469px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: ${colors.bgPrimary};
  font-family: 'Inter' !important;
  font-style: normal;

  .sub-title {
    padding: 17px 0 4px 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${colors.label};
  }

  .main-title {
    padding: 0 0 10px 24px;
    font-weight: 700;
    font-size: 32px;
    line-height: 137.5%;
    color: ${colors.label};
  }

  .MuiPickersCalendarHeader-switchHeader {
    margin-top: 0;
    .MuiPickersCalendarHeader-iconButton {
      background: ${colors.bgPrimary};
      .MuiSvgIcon-root {
        color: ${colors.label};
      }
    }
  }

  .MuiTypography-body1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${colors.label};
  }

  .MuiPickersCalendarHeader-dayLabel {
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #929292;
  }

  .MuiTypography-body2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: ${colors.label};
  }

  .MuiPickersYearSelection-container {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    overflow: hidden;

    .MuiPickersYear-root {
      display: inline-flex;
    }
  }

  .MuiPickersCalendar-transitionContainer {
    margin-bottom: 10px;
  }

  .button-groups {
    position: absolute;
    right: 24px;

    button {
      font-family: 'Inter';
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: ${colors.label};
      background: ${colors.bgPrimary};
      border: 0;
    }

    .cancel-button {
      margin-right: 70px;
    }
  }
`

export const notInCurrentMonth = css`
  .MuiTypography-body2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #929292;
  }
`
