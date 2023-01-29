
import './App.css'

import Read from './components/Read/Read'
import Sports from './components/Sports'
import Languages from './components/Languages'

import { HOBBIES } from './HOBBIES/HOBBIES'
import MovieList from './components/Movies/MovieList'



const App = () => {


  return (
    <div className="App">
      <Read data={HOBBIES.read}/>
      <Sports data={HOBBIES.sports} />
      <Languages data={HOBBIES.languages}/>
      <MovieList data={HOBBIES.movies} />
    </div>
  )
}

export default App
