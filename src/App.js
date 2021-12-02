import { useEffect, useContext } from 'react';

import Layout from './components/layout/Layout';
import MyFonts from './pages/MyFonts';
import BuyFonts from './pages/BuyFonts';
import FontsContext from './store/fonts-context';
import { URL } from './utils/constants/constants';

function App() {
  const fontsContext = useContext(FontsContext);

  useEffect(() => {
    if (fontsContext.tabs.length <= 0) {
      fetch(`${URL}tabs`)
        .then(response => {
          return response.json();
        }).then((tabs) => {
          fontsContext.addTabs(tabs.filter(tab => tab.content_endpoint));
        });
    }
  }, []);
  return (<Layout>
    {fontsContext.selectedTab === 101 ? <MyFonts /> : <BuyFonts />}
  </Layout>);
}

export default App
