import React,{ useState , useEffect} from 'react'
import Card from './Card'
import Search from './Search'

const Explore = () => {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState(cards)

    useEffect(() => {
        fetch('http://localhost:5000/solar-system')
        .then((response) => response.json())
        .then((data) => setCards(() => data))
    },[])
    useEffect(() =>{
      setFiltered(cards.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())))
    },[search,cards]
    )

    const cardLoop = cards.map(card =>{
      return(
        <Card key={card.id} id={card.id} image={card.image} name={card.name} description={card.description} />
       ) 
    })

  return (
    <>
    <Search Search={search} setSearch={setSearch} />
    <div style={{backgroundImage:'url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%'}}>
    <h1 className='card-header' style={{textAlign: 'center', color:'#FFF',paddingTop:'10px'}}>The Bodies in our Solar System</h1>
      {cards.map(card =>{
        return(
          <Card key={card.id} id={card.id} image={card.image} name={card.name} description={card.description} />
        ) 
      })}
    </div>

    </>
  )
}

export default Explore;