import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './routes/Navbar'
import ListStudents from './components/ListStudents'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

function App() {

  const [isClicked, setIsClicked] = useState(false);

  const handleMe = () =>{
    setIsClicked(true);
  }


  return (
    <div className="App">
      <MyNavBar handleMe={handleMe} />
      {isClicked ? <Outlet /> : <ListStudents /> }
    </div>
  )
}

export default App
