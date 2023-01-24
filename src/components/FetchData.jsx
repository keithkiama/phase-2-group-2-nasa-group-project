import React,{ useState , useEffect} from 'react'

const FetchData = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/solar-system')
        .then((response) => response.json())
        .then((data) => setCards(data))
    },[])

  return (
    <div>FetchData</div>
  )
}

export default FetchData