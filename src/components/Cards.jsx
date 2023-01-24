import React from 'react'

const Cards = ({image, description,location}) => {
  return (
    <>
      <img src={image} alt=''></img>
      <h1>{description}</h1>
      <p>{location}</p>
    </>
  )
}
export default Cards