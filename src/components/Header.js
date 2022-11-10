import React from 'react'

export default function Header() {
  return (
    <header className='header'>

      <div className='header_logo'>
        <img className='logo_picture' src={"./img/logo.jpg"} width="30%" height="90%" />
        <h1 className='logo_name'>SAM Music</h1>
      </div>

      <div className='header_info'>
        <nav>
        <ul>
          <li className='info'><a href='#'>Home</a></li>
          <li className='info'><a href='./about.html'>About</a></li>
          <li className='info'><a href='./reviews.html'>Reviews</a></li>
          <li className='info'><a href='./location.html'>Location</a></li>
        </ul>
        </nav>
      </div>

    </header>
  )
}
