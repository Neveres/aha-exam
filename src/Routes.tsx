import React, { lazy } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

const PasswordInput = lazy(() => import('src/containers/PasswordInput'))
const Calendar = lazy(() => import('src/containers/Calendar'))
const AdvancedEffects = lazy(() => import('src/containers/AdvancedEffects'))

export enum PagePath {
  Root = '/',
  PasswordInput = '/password-input',
  Calendar = '/calendar',
  AdvancedEffects = '/advanced-effects',
}

export const menuItems: AhaExam.TopAppHeaderMenuItem[] = [
  {
    name: 'Password Input',
    path: PagePath.PasswordInput,
  },
  {
    name: 'Calendar',
    path: PagePath.Calendar,
  },
  {
    name: 'Advanced Effects',
    path: PagePath.AdvancedEffects,
  },
]

export const Routes = () =>
  useRoutes([
    {
      path: PagePath.PasswordInput,
      element: <PasswordInput />,
    },
    {
      path: PagePath.Calendar,
      element: <Calendar />,
    },
    {
      path: PagePath.AdvancedEffects,
      element: <AdvancedEffects />,
    },
    {
      path: '*',
      element: <Navigate to={PagePath.PasswordInput} replace />,
    },
  ])
