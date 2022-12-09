import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tile from './components/Tile/Tile';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Display>
          <div className='row'>
            <Tile> Tile</Tile>
            <Tile> Tile</Tile>
            <Tile> Tile</Tile>
            <Tile> Tile</Tile>
            <Tile> Tile</Tile>
          </div>        
      </Display>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
