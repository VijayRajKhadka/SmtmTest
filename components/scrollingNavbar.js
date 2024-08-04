import React from 'react'
import '../style/scrollNavbar.css'
import NavbarContent from './scrollingNavbarContent'

const scrollingNavbar = () => {
  return (
    <div className='scroll-bar-container'>
        <div className='scroll-bar-content'>
            <div  style={{backgroundColor:"white", color:"black", opacity:"0.9"}} className='sub-container'>
                <NavbarContent contentName='All'/>
            </div>
            <div className='sub-container'>
                <NavbarContent contentName='Following'/>
            </div>
            <div className='sub-container'>
                <NavbarContent contentName='My Stocks'/>
            </div>
            <div className='sub-container'>
                <NavbarContent contentName='Portfolio'/>
            </div>
        </div>
        <div className='navbar-search-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        </div>
    </div>
  )
}

export default scrollingNavbar