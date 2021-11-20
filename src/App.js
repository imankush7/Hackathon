import React from 'react';
import './App.css';
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="container">
      {/* <Header />
      <MainContent />
      <Footer /> */}
      <Login/>
    </div>
  );
}

export default App;

