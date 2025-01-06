import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Journey from './Pages/Journey'
import Gift from './Pages/Gift'
import Message from './Pages/Message'
import Moment from './Pages/Moment'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/gift" element={<Gift />} />
      <Route path="/message" element={<Message />} />
      <Route path="/moment" element={<Moment />} />
    </Routes>
  )
}

export default App
