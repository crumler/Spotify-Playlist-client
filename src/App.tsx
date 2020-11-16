import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/site/Login';
import Footer from './components/site/Footer';
import Main from './components/site/Main';

// class App extends React.Component {
//   constructor(props: any) {
//       super(props);
//   }
const App = () => {

  const [sessionToken, setSessionToken] = useState('');
  let token = localStorage.getItem('token')

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(token ? token : '');
    }
  }, [])

  const updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  
  return (
    <div className="App">
      <Login />
      {/* <Main /> */}
      <Footer />
    </div>
  )
};

export default App;