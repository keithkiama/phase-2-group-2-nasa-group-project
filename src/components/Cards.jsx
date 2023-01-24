import React from 'react'
import "../../src/styles/index.css"

const Cards = ({name, image, description}) => {
  return (
    <>
      <div className='all-cards'>
        <img src={image} alt="">
        </img>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}
export default Cards