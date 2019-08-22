import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoUser = this.demoUser.bind(this)
        this.clearInput = this.clearInput.bind(this)
    }
    updateUsername(e) {
        this.setState({ username: e.currentTarget.value })
    }

    updatePassword(e) {
        this.setState({ password: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        let formText = ''
        let otherText = ''
        let otherType = ''

        if (this.props.formType === 'login') {
            formText = 'Log In'
            otherText = 'Sign Up'
            otherType = 'signup'
        }
        else {
            formText = 'Sign Up'
            otherText = 'Log In'
            otherType = 'login'
        }
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
        let demo = null
        let linkOther = null
        if (this.props.formType === 'login') {
            linkOther = <p className='other-form-link'>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        } else {
            linkOther = <p className='other-form-link'>Already have an account? <Link to='/login'> Log In</Link></p>
        }

        return (
            <>
                {errors}
                <div className='form-container'>
                    <h3>{formText}</h3>
                    {linkOther}
                    <form className='session-form' onSubmit={this.handleSubmit}>
                        <label>Username:
                    <br />
                            <input className='session-input' id='username' type="text" value={this.state.username} onChange={this.updateUsername} />
                        </label>
                        <label>Password:
                    <br />
                            <input className='session-input' id='password' type="password" value={this.state.password} onChange={this.updatePassword} />
                        </label>
                        <div className='session-buttons'>
                            <input type="submit" value={formText} />
                            {demo}
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SessionForm