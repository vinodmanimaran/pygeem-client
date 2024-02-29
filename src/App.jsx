import React from 'react'
import Home from './Pages/Home/Home'
import {Routes,Route ,BrowserRouter as Router} from 'react-router-dom'
import AgentList from '../agent'
const App = () => {
  return (
    <div>
<Router>
  <Routes>
  <Route path="/referral/:referralToken" element={<Home/>} />
    <Route path='/a'  exact element={<AgentList/>}/>

  </Routes>
</Router>
     
    </div>
  )
}

export default App