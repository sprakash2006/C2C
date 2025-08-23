import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import About from '../src/pages/About'
import Event from '../src/pages/Event'
import Home from '../src/pages/Home'
import Join from '../src/pages/Join'
import Team from '../src/pages/Team'
import Layout from '../src/Layout/layout'
import NoPage from '../src/pages/NoPage'
import AdminLogin from '../src/pages/AdminLogin'
import Admin from '../src/pages/Admin'
import StudentsList from '../src/pages/studentsList'
import AddUpdate from '../src/pages/addUpdate'
import DeleteUpdate from '../src/pages/deleteUpdate'
import EditUpdate from '../src/pages/editupdates'
import AddEvent from '../src/pages/addEvent'
import DeleteEvent from '../src/pages/deleteEvent'
import UpdateEvent from '../src/pages/updateEvent'
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
          <Route path="admin" element={ <PrivateRoute> <Admin /> </PrivateRoute> }/>
          <Route path="admin/studentslist" element={ <PrivateRoute> <StudentsList /> </PrivateRoute> }/>
          <Route path="admin/addupdate" element={ <PrivateRoute> <AddUpdate /> </PrivateRoute> }/>
          <Route path="admin/deleteupdate" element={ <PrivateRoute> <DeleteUpdate /> </PrivateRoute> }/>
          <Route path="admin/editupdate" element={ <PrivateRoute> <EditUpdate /> </PrivateRoute> }/>
          <Route path="admin/addevent" element={ <PrivateRoute> <AddEvent /> </PrivateRoute> }/>
          <Route path="admin/deleteevent" element={ <PrivateRoute> <DeleteEvent /> </PrivateRoute> }/>
          <Route path="admin/updateevent" element={ <PrivateRoute> <UpdateEvent /> </PrivateRoute> }/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
