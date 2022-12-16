import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tile from "./components/Tile/Tile";
import Homestead from "./components/Tile/Homestead";
import LoggingCamp from "./components/Tile/LoggingCamp";
import Tannery from "./components/Tile/Tannery";


import { 
  faHatCowboySide,faHouse, faCow, faTree,       // Pioneers
  faCrown, faGem, faShieldHalved, faChessRook   // Medieval
} from '@fortawesome/free-solid-svg-icons'

 

function App() {
  return (
    <div className="App">
      <Header ruler="User" civ="Civ" currency="68 coins"></Header>
      <Display>

        <div className="row"> 
          <Tile tileName="Pioneers" eraTile icon={faHatCowboySide}  ></Tile>
          <Tile tileName="HomeStead" ItemCost="1" icon={faHouse} ></Tile>
          <Tile tileName="Tannery" ItemCost="50" icon={faCow} ></Tile>
          <Tile tileName="Logging Camp" ItemCost="100" icon={faTree} ></Tile>
        </div>

        <div className="row">
          <Tile tileName="Medieval" eraTile icon={faCrown} locked ></Tile>
          <Tile tileName="Quarry" ItemCost="350" icon={faGem} locked></Tile>
          <Tile tileName="Blacksmith" ItemCost="600" icon={faShieldHalved} locked></Tile>
          <Tile tileName="Castle" ItemCost="1000" icon={faChessRook} locked></Tile>
        </div>
          
      </Display>
      <Footer></Footer>
    </div>
  );
}

export default App;
