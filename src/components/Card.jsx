import React ,{useState}from 'react'
import ViewData from './ViewData'

const Card = ({name, image, description}) => {
  const [viewData,setViewData] = useState([])

   
      fetch("http://localhost:5000/solar-system")
      .then(res=>res.json())
      .then(data=>setViewData(data))
      console.log(viewData);
  
  
  return (
    <>
      <div className="card-deck col-4" style= {{display : 'inline-grid', paddingLeft: '45px'}}>

        <div className="card" style={{width :'25rem', margin : '15px 10px 25px 5px',backgroundColor : '#323233',borderColor:'#FFF'}}>
          <img src={image} style={{ backgroundSize : 'cover', backgroundPosition: 'centre', height: '50vh',width: '100%'}} className="card-img-top" alt=""/>

          <div className="card-body">
            <h3 className="card-title" style={{color: '#FFF'}}>{name}</h3>
            <p className="card-text" style={{color: '#FFF'}}>{description}</p>

            {viewData.length > 0 && <ViewData viewData={viewData}/> }
          </div>
        </div>
      </div>
  </>
  )
  }

export default Card;
