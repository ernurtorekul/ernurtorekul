import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'


function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
