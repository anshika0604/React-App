import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [name, setName] = useState("anshika");
  return (
    // <div className="App">
    //   <h1>Class Component</h1>
    //   <ClassComponent />
    //   <h1>Functional Component</h1>
    //   <FunctionalComponent name = {name} college = "deemed" age={21} setName = {setName}/>
    // </div>
    <Routes>
      <Route path="/" element={<ClassComponent />}/>
      <Route path="/functional-component" element={<FunctionalComponent 
      name = {name} college = "deemed" age={21} setName = {setName}/>}/>
    </Routes>
  );
}

export default App;
