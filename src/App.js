import Nav from "./components/Navbar";
import SearchAndFilter from "./components/Search&filter";
import Cardcontainer from "./components/Cardcontainer";
import SecondaryTemplate from "./components/SecondaryTemplate";
import { useEffect, useState } from "react";

export default function App() {
  //FUNCTIONAL PART OF THE COMPONETN***************************************
  const [apiData, setApiData] = useState([]);
  const [colorThemObj, setColorThemObj] = useState({
    navIcon: "icons/lightMode.png",
    navText: "LightMode",
    searchIcon: "icons/searchWhite.png",
    colorModeV1: "darkModeV1",
    colorModeV2: "darkModeV2",
    colorModeV3: "darkModeV2",
    arrowIcon: "icons/arrowWhite.png",
    arrowHeadIcon: "icons/arrowHeadWhite.png",
  });
  const [inputData, setInputData] = useState({
    filterInput: "",
    searchInput: "",
  });
  const [secondaryData, setSecondaryData] = useState({});
  const [template, setTemplate] = useState("primary");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((result1) => {
      result1.json().then((result2) => {
        setApiData(result2);
      });
    });
  }, []);

  function handelColorThemChange() {
    const Light = {
      navIcon: "icons/darkMode.png",
      navText: "DarkMode",
      searchIcon: "icons/searchGrey.png",
      colorModeV1: "lightModeV1",
      colorModeV2: "lightModeV2",
      colorModeV3: "lightModeV3",
      arrowIcon: "icons/arrowBlack.png",
      arrowHeadIcon: "icons/arrowHeadBlack.png",
    };

    const Dark = {
      navIcon: "icons/lightMode.png",
      navText: "LightMode",
      searchIcon: "icons/searchWhite.png",
      colorModeV1: "darkModeV1",
      colorModeV2: "darkModeV2",
      colorModeV3: "darkModeV2",
      arrowIcon: "icons/arrowWhite.png",
      arrowHeadIcon: "icons/arrowHeadWhite.png",
    };

    colorThemObj.navText === "LightMode"
      ? setColorThemObj(Light)
      : setColorThemObj(Dark);
  }

  function handelNewSecondaryData(id) {
    let newdata = apiData.find((d) => {
      return d.cca3 === id;
    });

    console.log(newdata);

    let newSecondaryData = {
      flagSrc: newdata.flags.png,
      countryName: newdata.name.common,
      nativName: Object.values(newdata.name.nativeName)[
        Object.values(newdata.name.nativeName).length - 1
      ].common,
      population: newdata.population,
      region: newdata.region,
      subRegion: newdata.subregion,
      capital: newdata.capital[0],
      domain: newdata.tld[0],
      currency: Object.values(newdata.currencies)
        .map((v) => {
          return v.name;
        })
        .join(", "),
      language: Object.values(newdata.languages).join(", "),
      borderCountry: newdata.borders,
    };

    //PUTTING NEW OBJ OUT
    setSecondaryData(newSecondaryData);
  }

  //ELEMENT PART OF THE COMPONET ***********************************************
  return (
    <div className={"windowContainer " + colorThemObj.colorModeV1}>
      <main className="page">
        <Nav
          colorThemObj={colorThemObj}
          handelColorThemChange={handelColorThemChange}
        />

        {template === "primary" ? (
          <div className="primaryTemplate">
            <SearchAndFilter
              colorThemObj={colorThemObj}
              inputData={inputData}
              setInputData={setInputData}
            />
            <Cardcontainer
              colorThemObj={colorThemObj}
              apiData={apiData}
              inputData={inputData}
              handelNewSecondaryData={handelNewSecondaryData}
              setTemplate={setTemplate}
            />
          </div>
        ) : (
          <SecondaryTemplate
            colorThemObj={colorThemObj}
            secondaryData={secondaryData}
            handelNewSecondaryData={handelNewSecondaryData}
            setTemplate={setTemplate}
          />
        )}
      </main>
    </div>
  );
}
