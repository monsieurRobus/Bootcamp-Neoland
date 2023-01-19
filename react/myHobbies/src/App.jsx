
import './App.css'

import Read from './components/Read/Read'
import Sports from './components/Sports'

import { HOBBIES } from './HOBBIES/HOBBIES'



const App = () => {


  return (
    <div className="App">
      <Read data={HOBBIES.read}/>
      <Sports data={HOBBIES.sports} />
    </div>
  )
}

export default App
