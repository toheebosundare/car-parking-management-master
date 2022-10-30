import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

// styles
import './App.css';


// components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
// import How from './pages/how/How';
// import Rent from './pages/rent/Rent';
// import Business from './pages/business/Business';
// import Ev from './pages/ev/Ev';
// import Company from './pages/company/Company';
// import Help from './pages/help/Help';

import Login from './pages/login/Login'
import Signup from './pages/signup/Signup';

function App() {
  const { authIsReady } = useAuthContext()


  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />}/>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
