import { css } from '@emotion/react'

import { colors, fontWeight, fontSize } from 'src/GlobalCss'

const muiPickersCalendarHeader = 'MuiPickersCalendarHeader'
const muiPickersYear = 'MuiPickersYear'
const muiTypography = 'MuiTypography'
const muiPickersYearSelection = 'MuiPickersYearSelection'
const muiPickersBasePicker = 'MuiPickersBasePicker'
const muiPickersDay = 'MuiPickersDay'

export const calendarContainer = css`
  width: 320px;
  height: 469px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: ${colors.background};
  font-style: normal;
  overflow: hidden;

  * {
    font-family: 'Inter' !important;
  }

  .sub-title {
    padding: 17px 0 4px 24px;
  }

  .main-title {
    padding: 0 0 9px 24px;
    font-weight: ${fontWeight.bolder};
    font-size: ${fontSize.extraLarge};
    line-height: 137.5%;
    color: ${colors.label};
  }

  .year-picker-switch {
    position: absolute;
    top: 113px;
    left: 95px;
    z-index: 2147483647;
    width: 130px;
    height: 23px;
    cursor: pointer;
  }

  .${muiPickersCalendarHeader}-switchHeader {
    margin-top: 3.25px;
    margin-bottom: 12px;
    width: 320px;
    height: 48px;

    .${muiPickersCalendarHeader}-iconButton {
      width: 48px;
      height: 48px;
      padding-top: 13.5px;
      background: ${colors.background};

      .MuiIconButton-label {
        svg {
          width: 24px;
          height: 24px;
        }
      }

      .MuiSvgIcon-root {
        color: ${colors.label};
      }
    }

    .${muiPickersCalendarHeader}-transitionContainer {
      height: 24px;
      font-weight: ${fontWeight.lighter};
      font-size: ${fontSize.large};
      line-height: 24px;

      p {
        letter-spacing: 0.5px;
      }
    }
  }

  .${muiPickersCalendarHeader}-dayLabel {
    margin: 0 3px;
  }

  .MuiPickersDay-day {
    margin: 0 3px;
  }

  .${muiTypography}-body1, .sub-title,
  .${muiTypography}-subtitle1, .${muiPickersYear}-yearSelected {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.large};
    line-height: 150%;
    color: ${colors.label};
  }

  .${muiPickersCalendarHeader}-dayLabel {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.small};
    line-height: 13px;
    color: #929292;
  }

  .${muiTypography}-body2 {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.normal};
    line-height: 20.2px;
    color: ${colors.label};
  }

  .${muiPickersYearSelection}-container {
    display: grid;
    grid-template-columns: 70px 70px 70px 70px;
    overflow: hidden;
    padding-left: 23px;
    .${muiPickersYear}-root {
      display: inline-flex;
    }
  }

  .MuiPickersCalendar-transitionContainer {
    margin-top: 11px;
    margin-bottom: 17px;
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.large};
    line-height: 150%;
  }

  .${muiPickersBasePicker}-pickerView, .${muiPickersYearSelection}-container {
    height: 230px;
    min-height: 0;
  }

  .${muiPickersBasePicker}-container {
    margin-bottom: 25px;
  }

  .${muiPickersDay}-current {
    border: 1px solid ${colors.selectedDay};
    border-radius: 50%;
  }

  .${muiPickersDay}-daySelected {
    background: ${colors.selectedDay};
  }

  .${muiPickersDay}-day {
    &:hover {
      background: ${colors.label};
      p {
        color: ${colors.hoverInCalendarItem};
      }
    }
  }

  .${muiTypography}-subtitle1, .${muiPickersYear}-yearSelected {
    width: 61px;
    height: 24px;
  }

  .${muiTypography}-subtitle1 {
    margin: 0 9px 24px 0;
    letter-spacing: 0.4px;

    &:hover {
      background: ${colors.label};
      color: ${colors.hoverInCalendarItem};
    }
  }

  .${muiPickersYear}-yearSelected {
    margin: 0;
    background: ${colors.selectedDay};
    border-radius: 2px;
  }

  .button-groups {
    position: absolute;
    right: 38px;

    button {
      font-family: 'Inter';
      font-weight: ${fontWeight.bold};
      font-size: ${fontSize.normal};
      line-height: 24px;
      color: ${colors.label};
      background: ${colors.background};
      border: 0;
      cursor: pointer;
    }

    .cancel-button {
      margin-right: 59px;
    }
  }
`

export const notInCurrentMonth = css`
  .${muiTypography}-body2 {
    font-weight: ${fontWeight.lighter};
    font-size: ${fontSize.normal};
    line-height: 143%;
    color: #929292;
  }
`
