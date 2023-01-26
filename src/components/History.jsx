// import React,{useState,useEffect} from "react";
// import Cards from './Explore'
// // this is history component

// function History(){

//     const [cards, setCards] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:5000/space-exploration')
//         .then((response) => response.json())
//         .then((data) => setCards(() => data))
//     },[])

//     const cardDisplay = cards.map(card =>{
//       return(
//         <Cards key={card.id} id={card.id} image={card.spaceImage} name={card.spaceHeading} description={card.spaceDescription} />
//        ) 
//     })
//     return(
//         <div>
//             <div>
//                 <h1 style={{ textAlign : "center"}}>Welcome ,Get To Know Space Exploration</h1>
//                 <h3> Definition</h3>
//                 <p>Space exploration is investigation, by means of crewed and uncrewed spacecraft, of the reaches of the universe beyond Earth's atmosphere and the use of the information so gained to increase knowledge of the cosmos and benefit humanity</p>
//                 {cardDisplay}
//             </div>
           
//         </div>
//     )
// }
// export default History;