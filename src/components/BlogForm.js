import React, { useState } from 'react'
import Togglable from './Togglable'
import PropTypes from 'prop-types'

const BlogForm = ({ createBlog, user }) => {
    const [newTitle, setNewTitle] = useState('')
    const [newAuthor, setNewAuthor] = useState('')
    const [newUrl, setNewUrl] = useState('')

    BlogForm.propTypes = {
        createBlog: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    const handleCreateBlog = (event) => {
        event.preventDefault()
        createBlog({
            title: newTitle,
            author: newAuthor,
            url: newUrl
        })
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
    }

    const handleSingOut = () => {
        window.localStorage.removeItem('loggedBlogappUser')
        window.location.reload()
    }

    return (
        <div>
            <h1>Blogs</h1>
            <span>{user.name} logged in </span>
            <button onClick={handleSingOut}>Logout</button>
            <Togglable buttonLabel='Create a new blog'>
                <h2>Create a new blog</h2>
                <form onSubmit={handleCreateBlog}>
                    <div>
                        title:
                        <input
                            type='text'
                            name='title'
                            value={newTitle}
                            onChange={({ target }) => setNewTitle(target.value)}
                        />
                    </div>
                    <div>
                        author:
                        <input
                            type='text'
                            name='author'
                            value={newAuthor}
                            onChange={({ target }) => setNewAuthor(target.value)}
                        />
                    </div>
                    <div>
                        url:
                        <input
                            type='text'
                            name='url'
                            value={newUrl}
                            onChange={({ target }) => setNewUrl(target.value)}
                        />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </Togglable>
        </div>

    )
}

export default BlogForm