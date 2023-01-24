import React from 'react'

const Cards = ({title, image, body}) => {
  return (
    <div className = 'container'>
      <img src={image} alt=''></img>
      <h1> {title}</h1>
      <p>{body}</p>

    </div>
  )
};

export default Cards