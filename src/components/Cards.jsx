import React from 'react'
import "../../src/styles/index.css"

const Cards = ({name, image, description}) => {
  return (
    <>
    <div className="card-deck" style= {{display : 'inline-grid'}}>
      <div className="card" style={{width :'18rem', margin : '20px 0 25px 8px',backgroundColor : '#ABBBBA'}}>
        <img src={image} style={{height:240, backgroundSize : 'cover', backgroundPosition: 'centre'}} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="btn btn-primary">View</p>
        </div>
      </div>
    </div>
  </>
  )
}
export default Cards