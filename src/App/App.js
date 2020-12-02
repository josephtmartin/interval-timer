import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Routes from '../helpers/Routes';

class App extends React.Component {
  render() {
    return (
      <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes />
        </Router>
      </div>
      </>
    );
  }
}

export default App;
