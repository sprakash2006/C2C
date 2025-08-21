import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from '../src/pages/About'
import Event from '../src/pages/Event'
import Home from '../src/pages/Home'
import Join from '../src/pages/Join'
import Team from '../src/pages/Team'
import Layout from '../src/Layout/layout'
import NoPage from '../src/pages/NoPage'
import AdminLogin from '../src/pages/AdminLogin'
import ScrollToTop from '../src/components/ScrollToTop'

function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Team" element={<Team />} />
          <Route path="Event" element={<Event />} />
          <Route path="About" element={<About />} />
          <Route path="Join" element={<Join />} />
          <Route path="AdLog" element={<AdminLogin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
