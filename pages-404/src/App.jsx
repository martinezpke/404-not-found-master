import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='container column'>
        <div className="title-nav">
          404 NOT FOUND
        </div>

        <div className="content-wrapper row">
          <div className="img-404">
            <img src="../public/Scarecrow.png" alt="404" />
          </div>

          <div className="text-content column">
              <div className="title">I have bad news for you</div>
              <div className="paragraph">The page you are looking for might be removed or is temporarily unavailable</div>
              <div className="btn-home">Back to homepage</div>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
