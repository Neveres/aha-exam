import { css } from '@emotion/react'

import { colors, fontWeight, fontSize } from 'src/GlobalCss'

export const yearPickerSwitch = css`
  position: absolute;
  top: 105px;
  left: 95px;
  z-index: 999999999;
  width: 130px;
  height: 23px;
  cursor: pointer;
`

export const calendarContainer = css`
  width: 320px;
  height: 469px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: ${colors.background};
  font-family: 'Inter';
  font-style: normal;

  .sub-title {
    padding: 17px 0 4px 24px;
  }

  .main-title {
    padding: 0 0 10px 24px;
    font-weight: ${fontWeight.bolder};
    font-size: ${fontSize.extraLarge};
    line-height: 137.5%;
    color: ${colors.label};
  }

  .year-picker-switch {
    position: absolute;
    top: 113px;
    left: 95px;
    z-index: 999999999;
    width: 130px;
    height: 23px;
    cursor: pointer;
  }

  .MuiPickersCalendarHeader-switchHeader {
    margin-top: 0;
    .MuiPickersCalendarHeader-iconButton {
      background: ${colors.background};
      .MuiSvgIcon-root {
        color: ${colors.label};
      }
    }
  }

  .MuiTypography-body1,
  .sub-title,
  .MuiTypography-subtitle1,
  .MuiPickersYear-yearSelected {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.large};
    line-height: 150%;
    color: ${colors.label};
  }

  .MuiPickersCalendarHeader-dayLabel {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.small};
    line-height: 13px;
    color: #929292;
  }

  .MuiTypography-body2 {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.normal};
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

  .MuiPickersYear-yearSelected {
    margin: 0;
  }

  .MuiPickersBasePicker-pickerView,
  .MuiPickersYearSelection-container {
    height: 200px;
    min-height: 0;
  }

  .MuiPickersBasePicker-container {
    margin-bottom: 20px;
  }

  .button-groups {
    position: absolute;
    right: 24px;

    button {
      font-family: 'Inter';
      font-weight: ${fontWeight.bold};
      font-size: ${fontSize.normal};
      line-height: 24px;
      color: ${colors.label};
      background: ${colors.background};
      border: 0;
    }

    .cancel-button {
      margin-right: 70px;
    }
  }
`

export const notInCurrentMonth = css`
  .MuiTypography-body2 {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.normal};
    line-height: 143%;
    color: #929292;
  }
`
