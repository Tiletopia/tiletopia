import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tile from "./components/Tile/Tile";
import Homestead from "./components/Tile/Homestead";
import LoggingCamp from "./components/Tile/LoggingCamp";
import Tannery from "./components/Tile/Tannery";

function App() {
  return (
    <div className="App">
      <Header ruler="User" civ="Civ" currency="68 coins"></Header>
      <Display>
        <div className="row">
          <Tile>Pioneers</Tile>
          <Homestead> Homestead</Homestead>
          <Tannery> Tannery</Tannery>
          <LoggingCamp> Logging Camp</LoggingCamp>
        </div>
        {/* <div className="row">
          <Tile> 2A</Tile>
          <Tile> 2B</Tile>
          <Tile> 2C</Tile>
          <Tile> 2D</Tile>
          
        </div>
        <div className="row">
          <Tile> 3A</Tile>
          <Tile> 3B</Tile>
          <Tile> 3C</Tile>
          <Tile> 3D</Tile>
          
        </div>
        <div className="row">
          <Tile> 4A</Tile>
          <Tile> 4B</Tile>
          <Tile> 4C</Tile>
          <Tile> 4D</Tile>
          
        </div> */}
      </Display>
      <Footer></Footer>
    </div>
  );
}

export default App;
