import React from 'react';
import PropTypes from 'prop-types';

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

  handleSubmit(e) {
    // イベントがキャンセル可能である場合、上位ノードへのイベントの 伝播 (propagation) を止めずに、そのイベントをキャンセルします。
    e.preventDefault();
    this.props.onSubmit(this.state.place)
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" value={this.state.place} onChange={(e) => this.handleChangePlace(e.target.value)}/>
        <input type="submit" value="検索"/>
      </form>
    );
  }
}

SearchFrom.propTypes = {
  onSubmit: PropTypes.func.inRequired,
};
