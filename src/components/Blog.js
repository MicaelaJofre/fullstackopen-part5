import React, { useState } from 'react'

const Blog = ({ blog, user }) => {

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }


  return (
    <div key={blog.id} className='blogList' >
      <div className='blogList'>
        <span>{blog.title}</span>
        <button onClick={handleShow}>view</button>
      </div>
      {
        show &&
        <div>
          <div>Author: {blog.author}</div>
          <div>Url: {blog.url}</div>
          <div>
            Likes: {blog.likes}
            <button>like</button>
          </div>
          <div>User: {user.name}</div>
        </div>
      }
    </div>

  )
}

export default Blog