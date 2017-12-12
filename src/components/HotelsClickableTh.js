import React from 'react';
import PropTypes from 'prop-types';
import HotelsRow from './HotelsRow'
import { connect } from 'react-redux';
import { setSortKey } from '../actions/';

export const HotelsClickableTh = props => {
  console.log(props);
  return (
    <th
      onClick={() => props.setSortKey(props.sortKey)}
    >
      {props.label}{props.isSelected ? '▲' : ''}
    </th>
  );
}

const mapStateToProps = (state, ownProps) => ({
  isSelected: ownProps.sortKey === state.sortKey,
});

export default connect(mapStateToProps, { setSortKey })(HotelsClickableTh);

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  setSortKey: PropTypes.func.isRequired,
};
