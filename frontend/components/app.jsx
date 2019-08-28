import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util'
import Splash from './splash'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'

const App = () => (
    <>
        <Route exact path='/' companent={Splash}/>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
    </>
)

export default App