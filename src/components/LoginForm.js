import React, { useState } from 'react'
import Togglable from './Togglable'

const LoginForm = ({ createUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
                        type='text'
                        name='username'
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </Togglable>

    )
}

export default LoginForm