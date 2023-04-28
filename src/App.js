import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import FrontPart from './Components/FrontPart';
import SecondPart from './Components/SecondPart';
import ThirdPart from './Components/ThirdPart';
import FourthPart from './Components/FourthPart';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import FifthPart from './Components/FifthPart';
import Footer from './Components/Footer';
function App() {
  useEffect(() => {
    AOS.init({duration:1000})
  }, [])
  
  return (
    <div className="App bg-gradient-to-br from-gray-800   to-slate-950   	">
      <Navbar/>
      <FrontPart/>
      <SecondPart/>
      <ThirdPart/>
      <FourthPart/>
      <FifthPart/>
      <Footer/>
    </div>
  );
}

export default App;
