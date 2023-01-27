import React from "react";
import Cards from './Explore'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
// this is history component

function History(){

    
    
    return(
        <div>
            <div style={{ 
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
                <h1 style={{ textAlign : "center", color :"#FFF",fontSize :"10mm"}}>Get To Know Space Exploration</h1>
                <h3 style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px',marginTop :"20px",padding :"15px"}}> <span>Definition</span></h3>
                <p style={{color :"#FFF", padding :"15px"}}>Space exploration is investigation, by means of crewed and uncrewed spacecraft, of the reaches of the universe beyond Earth's atmosphere and the use of the information so gained to increase knowledge of the cosmos and benefit humanity</p>
                <section style={{}}>
                    <img  src="../images/lopez.webp" alt="astronaut outside the International Space Station" style={{width :"100%",padding :"12px",height :"80%"}}/>
                    <p style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px',marginTop :"20px",padding :"15px"}}>U.S. space shuttle astronaut Michael Lopez-Alegria floating in space outside the Unity module of the International Space Station in October 2000, during an early stage of the station's assembly in Earth orbit.</p>
                    <img src="../images/nursery-Eagle-Nebula.webp" alt="Eagle Nebula" style={{width :"100%"}}/>
                    <p style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px',marginTop :"20px",padding :"15px"}}> A stellar nursery in the Eagle Nebula (M16, NGC 6611). This detail of a composite image taken by the Earth-orbiting Hubble Space Telescope reveals a glowing column of dust and cold gas populated by embryonic stars forming from molecular hydrogen within the column.</p>
                    <img src="../images/TIROS-7.webp" alt="TIROS" style={{width :"100%"}}/>
                    <p style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px',marginTop :"20px",padding :"15px"}}>TIROS 7 (Television and Infra-Red Observation Satellite 7), launched June 19, 1963. The first series of U.S. TIROS spacecraft, placed into Earth orbit 1960–65, paved the way for the development of satellite systems to conduct routine daily weather and atmospheric monitoring.</p>
                    <img src="../images/reconnaissance-satellite-images-Corona-.webp" alt="reconnaissance-satellite" style={{width :"100%"}}/>
                    <p style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px',marginTop :"20px",padding :"15px"}}>Two U.S. Corona reconnaissance satellite images made a year apart—in mid-1961 (top) and mid-1962 (bottom)—revealing the construction of a new Soviet SS-7 Saddler (R-16) intercontinental ballistic missile site. Located at Yur'ya, Russia, the site was the first Soviet ICBM complex to be identified in Corona images.</p>
                    <img src="../images/Hurricane-Irene.webp" alt="Hurricane-irene" style={{width :"100%"}}/>
                    <p style={{color: '#FFF', fontSize: '8mm',marginBottom: '10px',marginTop :"20px",padding :"15px"}}>Satellite image of Hurricane Irene taken on August 26, 2011.</p>
                    <iframe width="1000" height="550" src="https://www.youtube.com/watch?v=3JuKR7jf46o&t=10s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
​
                    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
​
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
​
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
​
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
​
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>
​
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' ,fontSize :"8mm",marginTop :"15px",color : "#000" }}>
        © 2023 Copyright:
        <a  href='https://mdbootstrap.com/' style={{color :"#000"}}>
          groupTwoReact.com
        </a>
      </div>
    </MDBFooter>
               
      </section>
               
        
    
            </div>
           
        </div>
    )
}
export default History;