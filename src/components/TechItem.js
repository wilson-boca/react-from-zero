import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech , onDelete}) {
  return(
    <li>
    {tech}
    <button onClick={onDelete}>Delete</button>
  </li>
  );
}

// We have this way
TechItem.defaultProps = {
  tech: 'Undefined',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired

};

export default TechItem;
