import React from 'react';
import PropTypes from 'prop-types';
import HotelsRow from './HotelsRow'

export const HotelsClickableTh = ({ label, sortKey, isSelected, onSort }) => {
  return (
    <th
      onClick={() => onSort(sortKey)}
    >
      {label}{isSelected ? '▲' : ''}
    </th>
  );
}

export default HotelsClickableTh;

HotelsClickableTh.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
};
