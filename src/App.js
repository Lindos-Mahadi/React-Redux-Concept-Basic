import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Home data={{name:"lindos", age:25}} />
      {/* <About /> */}
    </div>
  );
}

export default App;
