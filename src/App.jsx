import React from 'react'
import data from "./data.json";



function App() {
  return (
    
    <div className='container'>

      <section className='info' >
        <h1>The creative crew</h1>

        <article>
          <h3>Who we are</h3>
          <p>We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</p>
        </article>
        
      </section>

      <section className='team'> 
      
        {data.map((person) => {
          return(
            <div className='card'>
                <div className='image-container'>
                  <img src={`/${person.photo}`} alt={person.name} />
                  <h6>{person.name}</h6> 
                </div>

                <h5>{person.work}</h5> 
                            
                
            </div>
          )
        })}
      
      </section>




    </div>

  )
}

export default App