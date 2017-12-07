import React from 'react';
import Greeting from './Greeting';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "Boooooooob"
    }
  }

  handleMouseOver() {
    this.setState({ name: 'Jaken'})
  }

  handleMouseOut() {
    this.setState({name: "Hoooooooooooooooooooooo"})
  }
  render() {
    return (
      <span
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}
      >
        <Greeting name={this.state.name}/>
      </span>
    );
  }
}

App.propTypes = {
};
