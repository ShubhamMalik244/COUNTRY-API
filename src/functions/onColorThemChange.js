export default function onColorThemChange(themMode, setThemMode) {

  const Light = {
    navIcon: "icons/darkMode.png",
    navText: "DarkMode",
    searchIcon: "icons/searchGrey.png",
    colorModeV1: "lightModeV1",
    colorModeV2: "lightModeV2",
    colorModeV3: "lightModeV3",
  };

  const Dark = {
    navIcon: "icons/lightMode.png",
    navText: "LightMode",
    searchIcon: "icons/searchWhite.png",
    colorModeV1: "darkModeV1",
    colorModeV2: "darkModeV2",
    colorModeV3: "darkModeV2",
  };
   
  (themMode.navText === 'LightMode')? setThemMode(Light) : setThemMode(Dark);
  
}
