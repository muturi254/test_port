import { useContext } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './Context';

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{backgroundColor: darkMode ? "#222": "white", color: darkMode ? "#fff": "#000"}}>
      <Toggle />  
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
