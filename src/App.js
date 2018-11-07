import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';
import Post from './routes/post';

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    );
  }
}

export default App;
