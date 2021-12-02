import { useContext, useEffect } from 'react';

import classes from './MainNavigation.module.css';
import FontsContext from '../../store/fonts-context';
import keyPress from '../../utils/services/keyPress';

function MainNavigation() {
  const fontsContext = useContext(FontsContext);
  const leftPress = keyPress("ArrowLeft");
  const rightPress = keyPress("ArrowRight");

  useEffect(() => {
    if (leftPress) {
      toggleTab(nextTab());
    }
  }, [leftPress]);

  useEffect(() => {
    if (rightPress) {
      toggleTab(nextTab());
    }
  }, [rightPress])

  function toggleTab(event) {
    fontsContext.selectTab(event);
  }

  function nextTab() {
    return fontsContext.tabs.find(tab => tab.id !== fontsContext.selectedTab).id;
  }

  return (<header className={classes.header}>
    <div className={classes.logo}>Please select one font</div>
    <nav>
      <ul>
        {fontsContext.tabs.map(tab => <li key={tab.id}><p onClick={() => toggleTab(tab.id)}
          id={tab.id} className={tab.id === fontsContext.selectedTab ? classes.active : classes.inactive}>
          {tab.label}</p></li>)}
      </ul>
    </nav>
  </header>);
}

export default MainNavigation;