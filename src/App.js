import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Player from './components/Player';
import Board from './components/Board';

// components return a part or all of the user interface
// a component takes data as input and renders that data as a user interface

// F(D) => V aka user interface (UI)
//  we use props to transmit or provide data to our components


function App() {
  return (
    <div className='container'>
    <Header />
    <div>
    <Player whichPlayer="X" />
    <Player whichPlayer="O" />
    </div>
    <Board />
    <Footer /> 
    </div>

  );
    
}

export default App;
