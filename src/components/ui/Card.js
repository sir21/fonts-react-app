import { useContext } from 'react';
import PropTypes from 'prop-types';

import Box from './Box';
import classes from './Card.module.css';
import FontsContext from '../../store/fonts-context';

function Card(props) {
  const fontsContext = useContext(FontsContext);
  return (<div className={props.size === 'large' ? classes.lCard : classes.sCard} onClick={() => props.onClick(props.data?.id)}
    style={{ opacity: fontsContext.selectedFont === props.data?.id ? '50%' : '100%' }}>
    <div>
      <Box letter={props.data?.abbr} color={props.data?.color} size={props.size} label={props.data['color-blind-label']} />
    </div>
    <div className={classes.labels}>
      <div className={classes.bullet}>•</div>
      <div className={classes.text}>{props.data?.label}</div>
    </div>
  </div>);
}

Card.propTypes = {
  data: PropTypes.object,
  size: PropTypes.string,
  onClick: PropTypes.func
}

export default Card;