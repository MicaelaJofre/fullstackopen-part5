import { useState } from 'react'
import Togglable from './Togglable'
import PropTypes from 'prop-types'

const LoginForm = ({ createUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    LoginForm.propTypes = {
        createUser: PropTypes.func.isRequired
    }

    const handleLogin = (event) => {
        event.preventDefault()

        createUser({ username, password })
        setUsername('')
        setPassword('')
    }


    return (
        <Togglable buttonLabel='Show login'>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                        id='username'
                        type='text'
                        name='username'
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        id='password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit" id='login-button'>login</button>
            </form>
        </Togglable>

    )
}

export default LoginForm