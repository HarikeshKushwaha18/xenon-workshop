import React from 'react'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Section3 from './components/section3/Section3';
import OurServices from './components/our-services/OurServices';
import Empowering from './components/empowring/Empowering';
import Enterprise from './components/enterprise/Enterprise';
import Forms from './components/form/Forms'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section3 />
      <OurServices />
      <Empowering />
      <Enterprise />
      <Forms />
    </div>
  );
}

export default App;
