import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
   <div className="App">

    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/create" element={<Header />} />
        <Route path="/Read" element={<Footer />} />

      </Routes>
      </Router>    
    </div>
);
}
export default App;
