import React from 'react'
import '../style/scrollNavbar.css'

const scrollingNavbarContent = (props) => {
  return (
    <div>
        <span>{props.contentName}</span>
    </div>
  )
}

export default scrollingNavbarContent