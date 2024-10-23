import './App.css';
// import Body from './components/Body';
// import Counter from './components/Counter';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Home from './components/Home';
import Counter from './components/Counter'


function App() {
  return (
    
      <>
    
      {/* <Body data="'Complete the task'"/> <br/>
      <Counter /> */}
      {/* <div className="sign-up-container"></div> */}
      {/* <Form /> */}
      {/* <div> */}
      
          <Router>
          <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Form/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
      </Routes> 
    
          </Router>
      </>
    
    
  );
}

export default App;
