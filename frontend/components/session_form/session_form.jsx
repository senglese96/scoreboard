import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }
    updateUsername = (e) => {
        this.setState({ username: e.currentTarget.value })
    }

    updatePassword = (e) => {
        this.setState({ password: e.currentTarget.value })
    }

    updateEmail= (e) => {
        this.setState({ email: e.currentTarget.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            username: '',
            password: '',
            email: ''
        }); 
    }

    render() {
        const { formType } = this.props
        let errors
        if (this.props.errors.length !== 0) {
            errors = <ul className='session-errors'>
                {this.props.errors.map(error => {
                    return <li>{error}</li>
                })}
            </ul>;
        } else {
            errors = null
        }
        return (
            <div className="SessionForm">
                <div className='form-container'>
                    <h3>{formType === 'login' ? 'Log In' : 'Sign Up'}</h3>
                    {
                        formType === 'login'
                            ? <p className='other-form-link'>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                            : <p className='other-form-link'>Already have an account? <Link to='/login'> Log In</Link></p>
                        
                    }
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        <div>Username </div>
                        <input className='session-input' id='username' type="text" value={this.state.username} onChange={this.updateUsername} />
                        {
                            formType !== 'login' 
                            ? <>
                                <div>Email</div>
                                <input className='session-input' id='email' type="text" value={this.state.email} onChange={this.updateEmail} />
                            </>
                            : null
                        }
                        <div>Password</div>
                        <input className='session-input' id='password' type="password" value={this.state.password} onChange={this.updatePassword} />
                        <div className='session-buttons'>
                            <input type="submit" className="button submit" value={"Submit"} />
                        </div>
                    </form>
                </div>
                {errors}
            </div>
        )
    }
}

export default SessionForm