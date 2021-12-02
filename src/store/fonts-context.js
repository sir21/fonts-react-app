import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FontsContext = createContext({
  tabs: getTabsFromLocal(),
  myFonts: getMyFontsFromLocal(),
  selectedTab: getSelectedTabFromLocal(),
  selectedFont: getSelectedFontFromLocal(),
  buyFontsText: getBuyFontsTextFromLocal(),
  addTabs: () => { },
  addMyFonts: () => { },
  selectTab: () => { },
  selectFont: () => { },
  settingBuyFontsText: () => { }
});

function getTabsFromLocal() {
  const str = localStorage.getItem('tabs');
  return str ? JSON.parse(str) : [];
}

function getMyFontsFromLocal() {
  const str = localStorage.getItem('myFonts');
  return str ? JSON.parse(str) : [];
}

function getSelectedTabFromLocal() {
  const str = localStorage.getItem('selectedTab');
  return str ? JSON.parse(str) : 'fonts_a';
}

function getSelectedFontFromLocal() {
  const str = localStorage.getItem('selectedFont');
  return str ? JSON.parse(str) : '';
}

function getBuyFontsTextFromLocal() {
  const str = localStorage.getItem('buyFontsText');
  return str ? JSON.parse(str) : '';
}

export function FontsContextProvider(props) {
  const [tabs, setTabs] = useState(getTabsFromLocal());
  const [myFonts, setMyFonts] = useState(getMyFontsFromLocal());
  const [selectedTab, setSelectedTab] = useState(getSelectedTabFromLocal());
  const [selectedFont, setSelectedFont] = useState(getSelectedFontFromLocal());
  const [buyFontsText, setBuyFontsText] = useState(getBuyFontsTextFromLocal());

  useEffect(() => {
    localStorage.setItem('tabs', JSON.stringify(tabs));
    localStorage.setItem('myFonts', JSON.stringify(myFonts));
    localStorage.setItem('selectedTab', JSON.stringify(selectedTab));
    localStorage.setItem('selectedFont', JSON.stringify(selectedFont));
    localStorage.setItem('buyFontsText', JSON.stringify(buyFontsText));
  }, [tabs, myFonts, selectedTab, selectedFont, buyFontsText]);

  function addTabs(newTabs) {
    setTabs(newTabs);
  }

  function addMyFonts(fonts) {
    setMyFonts(fonts);
  }

  function selectTab(tab) {
    setSelectedTab(tab);
  }

  function selectFont(font) {
    setSelectedFont(font);
  }

  function settingBuyFontsText(text) {
    setBuyFontsText(text)
  }

  const context = {
    tabs: tabs,
    myFonts: myFonts,
    selectedTab: selectedTab,
    selectedFont: selectedFont,
    buyFontsText: buyFontsText,
    addTabs: addTabs,
    addMyFonts: addMyFonts,
    selectTab: selectTab,
    selectFont: selectFont,
    settingBuyFontsText: settingBuyFontsText
  };

  return <FontsContext.Provider value={context}>
    {props.children}
  </FontsContext.Provider>
}

FontsContextProvider.propTypes = {
  children: PropTypes.object
}

export default FontsContext;