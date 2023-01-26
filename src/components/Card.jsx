import React from 'react'

const Card = ({name, image, description}) => {
  return (
    <>
      <div className="card-deck col-4" style= {{display : 'inline-grid', paddingLeft: '45px'}}>
        <div className="card" style={{width :'25rem', margin : '15px 10px 25px 5px',backgroundColor : '#323233'}}>
          <img src={image} style={{height:240, backgroundSize : 'cover', backgroundPosition: 'centre', height: '50vh',width: '25rem'}} className="card-img-top" alt=""/>
          <div className="card-body">
            <h3 className="card-title" style={{color: '#FFF'}}>{name}</h3>
            <p className="card-text" style={{color: '#FFF'}}>{description}</p>
          </div>
        </div>
      </div>
  </>
  )
}
export default Card;