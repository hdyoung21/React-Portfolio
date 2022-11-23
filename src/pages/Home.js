import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hunter Young </h2>
        <div className='prompt'>
          <p> A recent graduate of the Georgia Tech Full stack program</p>
        </div>
        <div className='skills'>
          <h1> Skills </h1>
          <ol className='listofskills'>
            <li className='topic'>
              <h2> Front-End </h2>
              <span> HTML, CSS, JavaScript, BootStrap, NPM, ReactJS </span>
            </li>
            <li className='topic'>
              <h2> Back-End </h2>
              <span> Node.js, SQL, Mongo db, AppoloServer, MySQL </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Home