import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import './main.css'

const App = () => {
  const [blogs, setBlogs] = useState([])

  const [user, setUser] = useState(null)
  const [messageNotification, setMessageNotification] = useState({ message: null, status: null })

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const addUser = async (userObject) => {

    try {
      const user = await loginService.login({ username: userObject.username, password: userObject.password })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogService.setToken(user.token)
      setUser(user)

      setMessageNotification({ message: 'User register correctamente', status: 'message' })
      setTimeout(() => {
        setMessageNotification({ message: null, status: null })
      }, 5000)



    } catch (error) {

      setMessageNotification({ message: 'Wrong username or password', status: 'error' })
      setTimeout(() => {
        setMessageNotification({ message: null, status: null })
      }, 5000)
    }
  }


  const addBlog = async (blogObject) => {

    try {

      const returnedBlog = await blogService.create(blogObject)
      setBlogs(blogs.concat(returnedBlog))

      setMessageNotification({ message: `A new blog ${returnedBlog.title} by ${returnedBlog.author}`, status: 'message' })
      setTimeout(() => {
        setMessageNotification({ message: null, status: null })
      }, 5000)

    } catch (error) {

      setMessageNotification({ message: 'Error adding new message', status: 'error' })
      setTimeout(() => {
        setMessageNotification({ message: null, status: null })
      }, 5000)
    }
  }




  return (
    <div>
      <Notification messageNotification={messageNotification} />
      {
        user
          ? <BlogForm createBlog={addBlog} user={user} />

          : <LoginForm createUser={addUser} />

      }
      <br />
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} user={user} />
      )}
    </div>
  )
}

export default App
