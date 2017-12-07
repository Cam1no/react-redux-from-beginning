import React, {PropTypes} from 'react';

export default class SearchFrom extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      place: 'Tokyo'
    }
  }

  handleChangePlace(place) {
    this.setState({ place })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.place} onChange={(e) => this.handleChangePlace(e.target.value)}/>
        <p>{ this.state.place }</p>
      </div>
    );
  }
}

SearchFrom.propTypes = {
};
