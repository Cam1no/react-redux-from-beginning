import React from 'react';
import Greeting from './Greeting';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Boooooooob"
    }
  }

  handleOnChange(name){
    this.setState({ name })
  }

  render() {
    return (
      <div>
        <input
          type="text" value={this.state.name}
          onChange={(e) => this.handleOnChange(e.target.value)}
        />
        <Greeting name={this.state.name}/>
      </div>
    );
  }
}

App.propTypes = {
};
