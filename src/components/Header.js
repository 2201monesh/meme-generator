import React from 'react'
import logo from '../logo.svg'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="" className='header--image' />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>React Project</h4>
    </div>
  )
}
