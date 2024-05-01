import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header isLogged={false} isHome={false}></Header>
    </div>
  );
}

export default App;
