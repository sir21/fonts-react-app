import PropTypes from 'prop-types';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (<div>
    <MainNavigation />
    <main className={classes.main}>
      {props.children}
    </main>
  </div>);
}

Layout.propTypes = {
  children: PropTypes.object
}

export default Layout;