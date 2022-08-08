import { createTheme } from '@mui/material'

import { colors } from 'src/GlobalCss'

export const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: `3px solid ${colors.label}`,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            border: '3px solid rgba(255, 255, 255, 0.5)',
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `3px solid ${colors.selectedDay}`,
            },
          },
        },
      },
    },
  },
})
