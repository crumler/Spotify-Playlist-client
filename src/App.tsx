import React from 'react';
import './App.css';
import Login from './components/site/Login';
import Footer from './components/site/Footer';


const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Login />
      <Footer />
    </div>
  );
}

export default App;