import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <h1>Functional Component</h1>
      <FunctionalComponent name = "anshika" college = "deemed" age={21}/>
    </div>
  );
}

export default App;
