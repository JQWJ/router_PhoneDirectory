import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Info from './pages/InfoPage'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/info/:name/:phoneNumber" component={Info} />
    </Router>
  )
}



export default App