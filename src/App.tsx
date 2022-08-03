import React, { Suspense } from 'react'
import { useLocation } from 'react-router'

import { AppHeader, AppBody } from 'src/components'
import { Routes } from './Routes'
import { GlobalCss } from './GlobalCss'

function App() {
  const { pathname } = useLocation()

  return (
    <>
      <AppHeader />

      <AppBody pathname={pathname}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </AppBody>

      <GlobalCss />
    </>
  )
}

export default App
