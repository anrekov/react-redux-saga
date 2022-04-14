import { useSelector } from 'react-redux'
import './App.css'
import { Joke } from './components/Joke'

import { MoreButton } from './components/MoreButton'

function App() {
  const { jokes } = useSelector((state) => state.jokes)

  return (
    <div className='App'>
      <MoreButton />

      {!!jokes.length && jokes.map((el) => <Joke key={el.id} joke={el.text} />)}
    </div>
  )
}

export default App
