import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tile from './components/Tile/Tile';

function App() {
  return (
    <div className="App">
      <Header ruler='User' civ='Civ' currency='68 coins'></Header>
      <Display>
          <div className='row'>
            <Tile> 1A</Tile>
            <Tile> 1B</Tile>
            <Tile> 1C</Tile>
            <Tile> 1D</Tile>
            <Tile> 1E</Tile>
          </div>
          <div className='row'>
            <Tile> 2A</Tile>
            <Tile> 2B</Tile>
            <Tile> 2C</Tile>
            <Tile> 2D</Tile>
            <Tile> 2E</Tile>
          </div>
          <div className='row'>
            <Tile> 3A</Tile>
            <Tile> 3B</Tile>
            <Tile> 3C</Tile>
            <Tile> 3D</Tile>
            <Tile> 3E</Tile>
          </div>
          <div className='row'>
            <Tile> 4A</Tile>
            <Tile> 4B</Tile>
            <Tile> 4C</Tile>
            <Tile> 4D</Tile>
            <Tile> 4E</Tile>
          </div>
         
      </Display>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
