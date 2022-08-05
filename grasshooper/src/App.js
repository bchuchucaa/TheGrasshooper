import logo from './logo.svg';
import './App.css';
import Header from './components/headerComponent';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <HomeComponent/>
       
       
      </header>
      <footer>
      <FooterComponent/>
      </footer>
    </div>
  );
}

export default App;
