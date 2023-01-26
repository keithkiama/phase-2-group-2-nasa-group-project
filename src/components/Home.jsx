import React from 'react'

const Home = () => {
return (
  <div style={{
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div style={{textAlign: 'center'}}>
      <h1 style={{color: '#FFF'}} >Welcome to The Milky Way</h1>
      <img  style={{backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'center', maxWidth: '29cm'}} src='../../images/MilkyWay.jpg' alt=''/>
        <div className="card bg-black">
          <h5 className="card-header" style={{color: '#FFF',fontSize: '8mm'}}>Origin Story</h5>
          <div className="card-body">
          <p className="card-text" style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px'}}>The Milky Way is the galaxy that contains our solar system. It is a barred spiral galaxy, with a flat disk of stars, dust and gas that is about 100,000 light-years across. The galaxy's name comes from the appearance of a milky band of light in the night sky, caused by the combined light of the billions of stars that make up the galaxy. The center of the galaxy is a dense region known as the galactic center, which is thought to contain a supermassive black hole.The Milky Way is thought to have between 100 and 400 billion stars, as well as a large number of planets, asteroids, and comets. It is part of the Local Group of galaxies, which includes the Andromeda Galaxy and a number of smaller galaxies.</p>
          <iframe width="1000" height="550" src="https://www.youtube.com/embed/tj_QPnO8vpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    </div>
  </div>
  )
}
export default Home