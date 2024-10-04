import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
   <div className="App">
    <h1>Hello World</h1>
    <h2>It is {new Date().toLocaleDateString()}.</h2>
    <Content />
    <Footer />
    <Header />
    </div>
  );
}

export default App;
