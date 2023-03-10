import React,{ useState , useEffect} from 'react'
import Card from './Card'
import Search from './Search'

const Explore = () => {
    const [cards, setCards] = useState([])
    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState(cards)

    useEffect(() => {
      //self invoking function - a function that calls itself
      (async () => {
          try {
              const resp = await fetch("https://json-server-dl1p.vercel.app/solar-system")

              console.log(resp);
              const data = await resp.json();

              console.log(data);
              setCards(data);
          } catch (error) {
              setCards(null);
          }
      })();
  }, []);

    useEffect(() =>{
      setFiltered(cards.filter((card) => card.name.toLowerCase().includes(search.toLowerCase())))
    },[search,cards]
    )

  return (
    <>
    <Search Search={search} setSearch={setSearch} />
    <div  style={{backgroundImage:'url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")', backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%'}}>
    <h1 className='card-header' style={{textAlign: 'center', color:'#FFF',paddingTop:'10px',backgroundColor:'black'}}>The Bodies in our Solar System</h1>
      {filtered.map(card =>{
        return(
          <Card key={card.id} id={card.id} image={card.image} name={card.name} description={card.description} />
        ) 
      })}
    </div>

    </>
  )
}

export default Explore;