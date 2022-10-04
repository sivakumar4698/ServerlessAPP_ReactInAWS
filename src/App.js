import './App.css';
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Business from './Pages/Business'

const App = () => {
  return (
    <>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/businessnotes' element={<Business />} />
      </Routes>
    </div>
    </Router>
    </>
      )
}

export default App;
