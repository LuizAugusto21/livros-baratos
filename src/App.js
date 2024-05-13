import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import Wishlist from './pages/wishlist/Wishlist';

function App() {
  return (
    <div className="App">
      <Wishlist />
      {/* <Header isLogged={true} isHome={false}></Header> */}
    </div>
  );
}

export default App;
