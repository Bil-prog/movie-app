import { useState } from 'react'
import './App.css'
import Search from './components/Search'

function App() {
const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className='overflow-x-clip'>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src='./hero.png' alt='hero banner'/>
            <h1>Find <span className="text-gradient">Movies </span>You'll Enjoy Without The Hassle</h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
      </div>
    </main>
  )
}

export default App
