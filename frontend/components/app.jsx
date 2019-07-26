import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util'
import Splash from './splash'


const App = () => (
    <>
        <Splash/>
    </>
)

export default App