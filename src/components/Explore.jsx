import React from 'react'
import FetchData from './FetchData';

const Explore = ({name, image, description}) => {
  return (
    
    <>
    <FetchData />
      <div className="card-deck" style= {{display : 'inline-grid'}}>
        <div className="card" style={{width :'18rem', margin : '15px 10px 25px 5px',backgroundColor : '#323233'}}>
          <img src={image} style={{height:240, backgroundSize : 'cover', backgroundPosition: 'centre'}} className="card-img-top" alt=""/>
          <div className="card-body">
            <h3 className="card-title" style={{color: '#FFF'}}>{name}</h3>
            <p className="card-text" style={{color: '#FFF'}}>{description}</p>
            <p className="btn btn-primary" style={{color: '#FFF'}}>View</p>
          </div>
        </div>
      </div>
  </>
  )
}
export default Explore;