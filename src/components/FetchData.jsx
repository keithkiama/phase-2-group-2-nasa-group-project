import React,{ useState , useEffect} from 'react'
import Cards from './Explore'

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
    <h1 className='card-header' style={{textAlign: 'center'}}>The Bodies in our Solar System</h1>
    {cardLoop}
    </>
  )
}

export default FetchData