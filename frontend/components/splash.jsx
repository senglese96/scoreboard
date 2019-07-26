import React from 'react'
import { Link } from 'react-router-dom'

const Splash = () => {
    return(
        <div id='splash-container'>
            <div id='splash-info'>
                <h1>Welcome to Scoreboard!</h1>
                <p>
                    This website is designed to help you keep track of league standings so you
                    can keep your league organized and informed
                </p>
            </div>
            <div id='splash-buttons'>
                <Link to='/login'>
                    <div className='auth-button'>
                        Log In
                    </div>
                </Link>
                <Link to='/signup'>
                    <div className='auth-button'>
                        Sign Up
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Splash