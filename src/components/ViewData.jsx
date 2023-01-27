import React,{useState} from 'react'

function ViewData({viewData}) {
        const [isEditing, setIsEditing] = useState(false);
       const [inputName,setInputName] = useState("");
       const [inputComment,setInpuComment] = useState("");

       const [like, setLike] = useState(0)
    const [liked, setLiked] = useState(false)
    const [color, setColor] = useState("red")

    function handleClick(){
        setLike(like + 1)
        setLiked(!liked)
        if (liked){
            setColor("red")
        } else {
            setColor("green")
        }
    }
       const handleName = (e) =>{
        setInputName(e.target.value);
       }
       const handleComment = (e) =>{
        setInpuComment(e.target.value);
       }
       const onSubmit = (e) =>{
        e.preventDefault();
        const isData ={
            name:inputName,
            comment:inputComment
        }
        setInputName("");
        setInpuComment("");

        fetch("http://localhost:5000/comments",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            
        },
        body: JSON.stringify(isData),
    })
}
    
        
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
    <form onSubmit={onSubmit}>
  <div class="mb-3">
    <input 
    value={inputName}


    onChange={handleName}
     type="text" 
     placeholder='Enter Your Name'
      class="form-control" 
      id="exampleInputName"
         aria-describedby="emailHelp"/>
 </div>
  <div class="mb-3">
    <input 
    value={inputComment}
    onChange={handleComment}
    type="text" 
    class="form-control" 
    placeholder='comment...' 
    id="comment"/>
  </div>
  <button className="like-button" onClick={handleClick} style={{backgroundColor: color}}>{like} Likes</button>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

          
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

































