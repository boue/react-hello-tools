import React from 'react';
import {render} from 'react-dom';

class App extends React.component {
  render () {
    return <p> Hello React ! </p>;
  }
}

render (<App/>, document.getElementById('app'));