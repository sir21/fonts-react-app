import { useEffect, useState, useContext } from 'react';

import classes from './BuyFonts.module.css';
import { URL } from '../utils/constants/constants';
import FontsContext from '../store/fonts-context';

function BuyFontsPage() {
  const fontsContext = useContext(FontsContext);
  const [text, setText] = useState('');

  useEffect(() => {
    if (fontsContext.buyFontsText === '') {
      fetch(`${URL}fonts_b`)
        .then(response => {
          return response.json();
        }).then(data => {
          setText(data.content);
          fontsContext.settingBuyFontsText(data.content);
        });
    } else {
      setText(fontsContext.buyFontsText);
    }
  }, []);

  return (<section className={classes.text}>
    <p>{text}</p>
  </section>);
}

export default BuyFontsPage;