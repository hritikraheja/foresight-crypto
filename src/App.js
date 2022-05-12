import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './components/Home';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <div id='homeSection'>
      <NavBar/>
      <Home/>
      </div>
      <Stats/>
      <Footer/>
    </div>
  );
}

export default App;
