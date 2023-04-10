import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Header_menu from './components/Header_Menu/Header_menu';
import Search_bar from './components/Search_bar/Search_bar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Header_menu></Header_menu>
      <Search_bar></Search_bar>
      
    </div>
  );
}

export default App;
