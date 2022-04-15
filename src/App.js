import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { Joke } from './components/Joke'

import { MoreButton } from './components/MoreButton'

function App() {
  const { jokes } = useSelector((state) => state.jokes)
  const [chuckJokes, setChuckJokes] = useState([])

  useEffect(() => {
    setChuckJokes(JSON.parse(localStorage.getItem('jokes')))
  }, [jokes])

  return (
    <div className='App'>
      <MoreButton />

      {chuckJokes?.map((el) => (
        <Joke key={el.id} joke={el.text} />
      ))}
    </div>
  )
}

export default App
