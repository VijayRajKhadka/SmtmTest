import React from 'react'
import '../style/reviewCard.css'

const reviewCard = () => {
  return (
    <div className='review-card-main-container'>
        <div className='profile-image-container'></div>
        <div className='profile-head-container'>
            <span className='profile-name'>Tanake dai</span>
            <button className='review-button'>SKBBL</button>
        </div>
    </div>
  )
}

export default reviewCard