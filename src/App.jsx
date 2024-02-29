import React from 'react'
import Home from './Pages/Home/Home'
import {Routes,Route ,BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  return (
    <div>
<Router>
  <Routes>
  <Route path="/referral/:referralToken" element={<Home/>} />

  </Routes>
</Router>
     
    </div>
  )
}

export default App