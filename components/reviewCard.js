"use client"
import React from 'react';
import '../style/reviewCard.css';

const reviewCard = (props) => {
    function showMsg(msg){
        console.log(msg)
    }
  return (
    <div>
    <div className='review-card-main-container'>
      <div className='profile-image-container'></div>
      <div className='profile-head-container'>
        <div className='profile-info'>
          <p>{props.userName}</p>
          <span className='review-time'>{props.time}</span>
          
        </div>
        <button className='review-button' onClick={() => showMsg(props.review)}>{props.shareName}</button>
      </div>

    </div>
    <div className='review-button-container'>
            <span className='review-desc'>{props.review}</span>
          <div className='action-buttons'>
            <button className='buy-button' >{props.buttonName}</button>
            <div className='button-container'>
            <div className='action-button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
              <span>10</span>
            </div>
            <div className='action-button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className="bi bi-chat-square-text" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
              </svg>
              <span>3</span>
            </div>
            <div className='action-button'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className="bi bi-share" viewBox="0 0 16 16">
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
              </svg>
            </div>
            </div>
          </div>
    </div>

    </div>
  )
}

export default reviewCard;
