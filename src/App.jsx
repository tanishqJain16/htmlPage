import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home'
import {
	BrowserRouter as Router,
	Routes,
	Route,
  Navigate,
} from "react-router-dom";
import Info from './pages/Info/Info';
import Guide from './pages/Guide/Guide';

function App() {

  return (
    <div className='app'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/info' element={<Info/>} />
          <Route path='/guide' element={<Guide/>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
