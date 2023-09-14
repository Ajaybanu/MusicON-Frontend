import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'



function UserRoute() {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default UserRoute