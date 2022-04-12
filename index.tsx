import React, { Component } from 'react';
import { render } from 'react-dom';
import PokemonsList from './components/pokemon.list';

import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <PokemonsList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
