import React from 'react'
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/auth_route_util'
import Splash from './splash'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import MainPageContainer from './main_page/main_page_container'

const App = () => (
    <>
        <Route exact path='/' component={Splash}/>
        <AuthRoute path='/login' component={LoginFormContainer} />
        <AuthRoute path='/signup' component={SignupFormContainer} />
        <ProtectedRoute path='/main' component={MainPageContainer} />
    </>
)

export default App