import React from 'react';
import './App.css';
import Login from './components/site/Login';
import Footer from './components/site/Footer';
import Main from './components/site/Main';



class App extends React.Component<{}, {sessionToken: string, open: boolean}> {
  
    constructor(props: any) {
      super(props)
      this.state = {
        sessionToken: '',
        open: false
      }
      this.handleSessionTokenUpdate.bind(this)
    }

    // var updateToken = (newToken: string) => {
    //   localStorage.setItem('token', newToken);
    //   setSessionToken(newToken);
    // };

    componentWillMount(){
      let token: string | null = localStorage.getItem('token')
      console.log(token)  
      if (token){
          
        this.setState({
          sessionToken: token
        })
     } 
    };

    handleSessionTokenUpdate (newToken: string) {
      localStorage.setItem('token', newToken)
      this.setState({
        sessionToken: newToken
      })
    };
  
    clearToken () {
      localStorage.clear();
      this.setState({
        sessionToken: ''
      })
    };

    openTrue () {
      this.setState({...this.state,
        open: true
      })
    }

    openFalse () {
      this.setState({...this.state,
        open: false
      })
    }

    protectedViews () {
      // let sessionToken;
      // this.setState({
      //   sessionToken: ''
      // })
      
      return(this.state.sessionToken === localStorage.getItem('token') ? <Main token={this.state.sessionToken} clickLogout={this.clearToken.bind(this)} />
      : <Login updateToken={this.handleSessionTokenUpdate.bind(this)} open={this.state.open} onClose={this.openFalse.bind(this)} onOpen={this.openTrue.bind(this)} />)
    };


  render() {
    return(
      <div className='App'>
      {this.protectedViews()}
      <Footer />
      </div>
    )
  }
};

export default App;