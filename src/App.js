import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Blogs from './components/Blogs/Blogs';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
