import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Installation from './pages/GettingStarted.jsx'
import UsagePage from './pages/GettingStartedUsage.jsx'
import TokensPage from './pages/foundations/Tokens.jsx'
import ColorsPage from './pages/foundations/Colors.jsx'
import TypographyPage from './pages/foundations/Typography.jsx'
import SpacingPage from './pages/foundations/Spacing.jsx'
import ButtonPage from './pages/components/ButtonPage.jsx'
import IconPage from './pages/components/IconPage.jsx'
import AlertPage from './pages/components/AlertPage.jsx'
import BadgePage from './pages/components/BadgePage.jsx'
import AvatarPage from './pages/components/AvatarPage.jsx'
import SpinnerPage from './pages/components/SpinnerPage.jsx'
import InputPage from './pages/components/InputPage.jsx'
import CheckboxPage from './pages/components/CheckboxPage.jsx'
import RadioPage from './pages/components/RadioPage.jsx'
import SelectPage from './pages/components/SelectPage.jsx'
import TogglePage from './pages/components/TogglePage.jsx'
import CardPage from './pages/components/CardPage.jsx'
import TabsPage from './pages/components/TabsPage.jsx'
import TooltipPage from './pages/components/TooltipPage.jsx'
import ModalPage from './pages/components/ModalPage.jsx'
import ToastPage from './pages/components/ToastPage.jsx'
import NavItemPage from './pages/components/NavItemPage.jsx'
import NavbarPage from './pages/components/NavbarPage.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import Dashboard from './pages/demo/Dashboard.jsx'
import AccountSettings from './pages/demo/AccountSettings.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout demoRoutes={['/demo', '/demo/settings']}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getting-started/installation" element={<Installation />} />
        <Route path="/getting-started/usage" element={<UsagePage />} />
        <Route path="/foundations/tokens"     element={<TokensPage />} />
        <Route path="/foundations/colors"     element={<ColorsPage />} />
        <Route path="/foundations/typography" element={<TypographyPage />} />
        <Route path="/foundations/spacing"    element={<SpacingPage />} />
        <Route path="/components/button"   element={<ButtonPage />} />
        <Route path="/components/icons"    element={<IconPage />} />
        <Route path="/components/alert"    element={<AlertPage />} />
        <Route path="/components/badge"    element={<BadgePage />} />
        <Route path="/components/avatar"   element={<AvatarPage />} />
        <Route path="/components/spinner"  element={<SpinnerPage />} />
        <Route path="/components/input"    element={<InputPage />} />
        <Route path="/components/checkbox" element={<CheckboxPage />} />
        <Route path="/components/radio"    element={<RadioPage />} />
        <Route path="/components/select"   element={<SelectPage />} />
        <Route path="/components/toggle"   element={<TogglePage />} />
        <Route path="/components/card"     element={<CardPage />} />
        <Route path="/components/tabs"     element={<TabsPage />} />
        <Route path="/components/tooltip"  element={<TooltipPage />} />
        <Route path="/components/modal"    element={<ModalPage />} />
        <Route path="/components/toast"    element={<ToastPage />} />
        <Route path="/components/navbar"   element={<NavbarPage />} />
        <Route path="/components/nav-item" element={<NavItemPage />} />
        <Route path="/components/*" element={<ComingSoon title="Component" />} />
        <Route path="/demo" element={<Dashboard />} />
        <Route path="/demo/settings" element={<AccountSettings />} />
      </Routes>
    </Layout>
  )
}
