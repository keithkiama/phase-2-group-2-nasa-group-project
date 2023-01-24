import React,{ useState , useEffect} from 'react'
import Cards from './Cards'

const FetchData = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/solar-system')
        .then((response) => response.json())
        .then((data) => setCards(() => data))
    },[])

    const cardLoop = cards.map(card =>{
      return(
        <Cards key={card.id} id={card.id} image={card.image} name={card.name} description={card.description} />
       ) 
  })

  return (
    <>
    {cardLoop}
    </>
  )
}

export default FetchData