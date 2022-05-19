import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './components/Home';
import Stats from './components/Stats';
import TradingCoins from './components/TradingCoins';
import WhoAreWe from './components/WhoAreWe';
import PartOfCommunity from './components/PartOfCommunity';
import Faqs from './components/Faqs';
import HowToTrade from './components/HowToTrade';

function App() {
  return (
    <div className="App">
      <div id='homeSection'>
      <NavBar/>
      <Home/>
      </div>
      <Stats/>
      <TradingCoins/>
      <HowToTrade/>
      <div id='bottomSection'>
        <WhoAreWe/>
        <PartOfCommunity/>
        <Faqs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
