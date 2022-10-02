import React from 'react'

export default function Footer() {
  return (
    <div
      data-aos-offset="0"
      data-aos="fade-up"
      data-aos-delay="200"
      className='footer'
    >
      <div className='footer-lists'>
        <ul>
          <h1>Topics</h1>
          <li><a href='/'>Company</a></li>
          <li><a href='/'>Innovation</a></li>
          <li><a href='/'>Models</a></li>
          <li><a href='/'>Brand</a></li>
          <li><a href='/'>Career</a></li>
        </ul>
        <ul>
          <h1>AUDI AG</h1>
          <li><a href="/">Audi Report 2021</a></li>
          <li><a href="/">Documents & Policies</a></li>
          <li><a href="/">Financial Calender</a></li>
          <li><a href="/">Profile</a></li>
        </ul>
        <ul>
          <h1>Services</h1>
          <li><a href="/">myAudi</a></li>
          <li><a href="/">Press</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Job portal</a></li>
        </ul>
      </div>
      <hr />
      <p>© AUDI AG. All rights reserved</p>
    </div>
  )
}
