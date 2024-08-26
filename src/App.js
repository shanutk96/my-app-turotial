import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
    
      {/* <Header message="'Header should consist of Menu, Our prodcts and About us'"/>
      <Body data="'User's name is John'"/> */}
      <Counter />
      {/* <Footer data="'Footer should be containing privay and policy'"/> */}
    
    </div>
  );
}

export default App;
