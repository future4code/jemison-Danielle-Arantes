import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './AdminHomePage'
import Application from './ApplicationFormPage'
import Create from './CreateTripPage'
import Home from './HomePage'
import List from './ListTripsPage'
import Login from './LoginPage'
import Trip from './TripDetailsPage'

function Router() {
    return (

        <BrowserRouter>

            <Routes>
                <Route index element={<Home/>} />
                <Route path="/trips/list" element={<List/>} />
                <Route path="/trips/application" element={<Application/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/admin/trips/list" element={<Admin/>} />
                <Route path="/admin/trips/create" element={<Create/>} />
                <Route path="/admin/trips/:id" element={<Trip/>} />
            </Routes>
        
        </BrowserRouter>

    );
  }
  
  export default Router;