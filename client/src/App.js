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
      </Display>
      <Footer></Footer>
    </div>
  );
}

export default App;
