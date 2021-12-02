import { useEffect, useContext, useState } from 'react'

import Card from '../components/ui/Card';
import classes from './MyFonts.module.css';
import { URL } from '../utils/constants/constants';
import FontsContext from '../store/fonts-context';
import keyPress from '../utils/services/keyPress';

function MyFontsPage() {
  const fontsContext = useContext(FontsContext);
  const [largeFont, setLargeFont] = useState({});
  const [smallFonts, setSmallFonts] = useState([]);
  const upPress = keyPress("ArrowUp");
  const downPress = keyPress("ArrowDown");

  useEffect(() => {
    if (upPress) {
      selectFont(nextFont('down'));
    }
  }, [upPress])

  useEffect(() => {
    if (downPress) {
      selectFont(nextFont('up'));
    }
  }, [downPress])

  useEffect(() => {
    if (fontsContext.myFonts.length <= 0) {
      fetch(
        `${URL}fonts_a`
      ).then(res => {
        return res.json();
      }).then(data => {
        fontsContext.addMyFonts(data.content);
        divideFonts(data.content);
      });
    } else {
      divideFonts(fontsContext.myFonts);
    }
  }, []);

  function nextFont(method) {
    let next = method === 'up' ? fontsContext.selectedFont + 1 : fontsContext.selectedFont - 1;
    return next > 114 ? 112 : next < 112 ? 114 : next;
  }

  function divideFonts(fontsList) {
    const fonts = [...fontsList];
    setLargeFont({ ...fonts[0] });
    setSmallFonts([...fonts.splice(1, 2)]);
  }

  function selectFont(event) {
    fontsContext.selectFont(event);
  }

  return (<section>
    <div className={classes.main}>
      <div className={classes.left}  >
        <Card data={largeFont} size="large" onClick={selectFont} />
      </div>
      <div className={classes.right}>
        {smallFonts.map(font => (<Card key={font.id} data={font} size="small" onClick={selectFont} />))}
      </div>
    </div>
  </section>);
}

export default MyFontsPage;