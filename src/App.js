import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
