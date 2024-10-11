import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Read from './components/Read';
import Create from './components/Create';

function App() {
  return (
   <div className="App">

    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read />} />
        <Route path="/Read" element={<Footer />} />
        <Route path="/Create" element={<Create />} />



      </Routes>
      </Router>    
    </div>
);
}
export default App;
