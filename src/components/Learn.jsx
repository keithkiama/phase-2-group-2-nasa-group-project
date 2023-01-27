import React from 'react'

const Learn = () => {
  return (
    <div style={{height:'100%',backgroundImage:'url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'}}>
      <h1 style={{textAlign:'center', color:'white',padding:'0 0 10px 0', fontSize:'15mm'}}>Learn more about the solar system</h1>
      <img  style={{backgroundPosition: 'centre', backgroundRepeat: 'no-repeat',backgroundSize: 'center', maxWidth: '29cm',justifyContent:'center',paddingLeft:'400px'}} src='../../images/SolarSystem.jpg' alt=''/>
      <h2 style={{textAlign:'center', color:'white'}}>Why is it called the solar system?</h2>
        <p style={{textAlign:'center', color:'white',fontSize: '8mm', backgroundColor: 'black'}}>There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis."</p>
        <h1 className="card-text" style={{color: '#FFF', fontSize: '10mm',marginBottom: '10px',textAlign:'center'}}>What Are The Nine Planets?</h1>
        <p style={{fontSize:'8mm',color:'#FFF', textAlign: 'center',backgroundColor: 'black'}}>In the following video you will Learn all about the planets in the Solar System</p>
      <iframe style={{paddingLeft:'230px'}} width="1300" height="550" src="https://www.youtube.com/embed/lcZTcfdZ3Ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Learn






















// import React from 'react'

// const Learn = () => {
//     return (
//       <div style={{
//         width: '100%',
//         height: '100%',
//         backgroundImage: 'url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}>
//         <div style={{textAlign: 'center'}}>
//           <h1 style={{color: '#FFF'}} ><b>Learn more about Solar system</b></h1>
//           <img  style={{backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize: 'center', maxWidth: '29cm'}} src='../../images/solarsystem.jpg' alt=''/>
//             <div className="card bg-black">
//               <h1 className="card-header" style={{color: '#FFF',fontSize: '8mm'}}>Why is it Called the Solar System?
//               </h1>
//               <p style={{fontsize: "50mm", color:"#FFF"}}> There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is called “the solar system” because we use the word “solar” to describe things related to our star, after the Latin word for Sun, "solis."</p>
//               <div className="card-body">
//               <p className="card-text" style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px'}}>What Are The Nine Planets?</p>
//               <p style={{fontSize:'6mm',color:'#FFF'}}>In the following videos you will Learn all about the planets in the Solar System</p>
              
//               <iframe width="1000" height="550" src="https://www.youtube.com/embed/lcZTcfdZ3Ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//             </div>
//         </div>
//         </div>
//       </div>
//       )
//     }
// export default Learn;