/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'

interface YearPickerToolbarProps {
  year: number
}

export const YearPickerToolbar: React.FC<YearPickerToolbarProps> = (props) => {
  const { year } = props
  return <div>{year}</div>
}
