import React,{useState} from 'react'

function ViewData({viewData}) {
        const [isEditing, setIsEditing] = useState(false);
       
        
        const handleEditClick = () => {
            setIsEditing(true);
          };
       
        const handleSaveClick = () => {
            setIsEditing(false);
            
              
          };
        
  return (
    <div>
      {isEditing ? (
        <>
        <br /> <br />
        <ul>
        <li>{viewData.galaxy}</li>
        <li>{viewData.equatorCircumference}</li>
        <li>{viewData.radius}</li>
        <li>{viewData.averageDistanceFromSun}</li>
        <li>{viewData.surfaceTemperature}</li>
        <li>{viewData.dayLength}</li>
        <li>{viewData.yearLength}</li>
        <li>{viewData.averageorbitalSpeed}</li>
        <li>{viewData.moons}</li>
        <li>{viewData.planetType}</li>
      </ul>
         

          
          <button onClick={handleSaveClick}>Save</button>
          <br />
        </>
      ) : (
        <button style={{width:'60px', height:'40px'}}  className="btn btn-dark text-white mx-3" onClick={handleEditClick}>view</button>
      )}
    </div>
  )
}

export default ViewData

































