import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../component/detail'
import Home from '../component/home'
import Login from '../component/login'

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Detail' element={<Detail />} />
        </Routes>
    )
}

export default Routing