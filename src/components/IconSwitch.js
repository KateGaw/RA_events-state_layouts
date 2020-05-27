import React from 'react';
import PropTypes from 'prop-types';


const IconSwitch = (props) => (
  <div className='icon'>
    <button onClick={props.onSwitch} className='iconButton'>
      <i className='material-icons'>{props.icon}</i>
    </button>
  </div>
);

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default IconSwitch;