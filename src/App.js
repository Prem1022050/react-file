import logo from './logo.svg';
import './App.css';
import namee, { age } from './one';
import { Hi } from './one';
//import Prem from './Prem';
import Fn from './Fn';
import Conditionalrender from './Conditionalrender';
import Home from './home';
import Contact from './contact';
import AboutUs from './about-us';
import {BrowserRouter, Route,Routes,Link } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li> <Link to='/home'>Home</Link> </li>
        <li> <Link to='/contact'>ContactUs</Link> </li>
        <li> <Link to='/aboutus'>About us</Link> </li>
      </ul>

      <Routes>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>

        <Route exact path='/aboutus' element={<AboutUs/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
