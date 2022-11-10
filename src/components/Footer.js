import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='footer_logo'>
          <img className='footer_picture' src={"./img/logo.jpg"} width="30%" height="90%" />
          <h1 className='footer_name'>SAM Music</h1>
      </div>

      <div className='footer_info'>
        <nav>
        <ul>
          <li className='info_social'><a href='https://www.facebook.com/SaMSolutionsCOM'><img src='/img/face.png' alt='facebook'/></a></li>
          <li className='info_social'><a href='https://sam-solutions.by/'><img src='/img/goo.png' alt='google'/></a></li>
          <li className='info_social'><a href='https://www.instagram.com/samsolutions/'><img src='/img/inst.png' alt='instagram'/></a></li>
          <li className='info_social'><a href='https://mail.google.com/mail/u/2/?pli=1#search/E-MAIL+info%40sam-solutions.com?compose=new'><img src='./img/em.png' alt='email'/></a></li>
        </ul>
        </nav>
      </div>
    </footer>
  )
}
