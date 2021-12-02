import PropTypes from 'prop-types';

import classes from './Box.module.css';

function Box(props) {
  console.log(props);
  return (<div className={props.size === 'large' ? classes.lBox : classes.sBox} aria-label={props.label}>
    <div className={classes.box} style={{ backgroundColor: props.color }}>
      <p className={props.size === 'large' ? classes.lLetter : classes.sLetter}>
        {props.letter}
      </p>
    </div>
  </div>);
}

Box.propTypes = {
  letter: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string
}

export default Box;