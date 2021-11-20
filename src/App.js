import React from 'react';
import './App.css';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import { Register } from "./components/dummyRegister/dummyRegister";

function App() {
  return (
    <div className="container">
      <Register/>
      {/* <Header />
      <MainContent />
      <Footer /> */}
    </div>
  );
}

export default App;

