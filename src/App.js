import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/hello-world';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate />
        <Counter />
        <HelloWorld />
        <Bomb />
        <RouletteGun />
      </div>
    );
  }
}

export default App;
