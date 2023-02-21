
import { Outlet } from 'react-router-dom';
import './App.css'
import Countdown from './components/Countdown/Countdown';
import Nav from './components/Nav/Nav'
import StopWatch from './components/StopWatch/StopWatch';

function App() {



  return (
    <div className="App">
      <Nav />
      <main>
        <StopWatch />
      </main>
        
    </div>
  )
}

export default App
