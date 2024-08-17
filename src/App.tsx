import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import HeroSection from './components/HeroSection';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';
import Product from './components/Product';
import Advantage from './components/Advantage';

function App() {

  return (<div>
    <div>
      <HeroSection />
    </div>
    <div>
      <Ecosystem />
    </div>
    <div>
      <Product />
    </div>
    <div>
      <Advantage />
    </div>
    <div>
      <Footer />
    </div>
  </div>
  );
  
};

export default App

