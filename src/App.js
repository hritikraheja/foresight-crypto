import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './components/Home';
import Stats from './components/Stats';
import TradingCoins from './components/TradingCoins';
import WhoAreWe from './components/WhoAreWe';
import PartOfCommunity from './components/PartOfCommunity';

function App() {
  return (
    <div className="App">
      <div id='homeSection'>
      <NavBar/>
      <Home/>
      </div>
      <Stats/>
      <TradingCoins/>
      <div id='bottomSection'>
        <WhoAreWe/>
        <PartOfCommunity/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
