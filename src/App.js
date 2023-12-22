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
  const [AutoScroll, setAutoScroll] = useState(false);
  const [scrollAmt, setScrollAmt] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((result1) => {
      result1.json().then((result2) => {
        setApiData(result2);
      });
    });
  }, []);

  useEffect(() => {
    template === "secondary" && window.scrollTo(0, 0);
  }, [template]);

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

  function handelNewSecondaryData(commonName) {
    let newdata = apiData.find((d) => {
      return d.name.common === commonName;
    });

    console.log(newdata);

    let newSecondaryData = {
      flagSrc: newdata.flags.png && newdata.flags.png,
      countryName: newdata.name.common && newdata.name.common,
      nativName:
        newdata.name.nativeName &&
        Object.values(newdata.name.nativeName)[
          Object.values(newdata.name.nativeName).length - 1
        ].common,
      population: newdata.population && newdata.population,
      region: newdata.region && newdata.region,
      subRegion: newdata.subregion && newdata.subregion,
      capital: newdata.capital && newdata.capital[0],
      domain: newdata.tld && newdata.tld[0],
      currency:
        newdata.currencies &&
        Object.values(newdata.currencies)
          .map((v) => {
            return v.name;
          })
          .join(", "),
      language:
        newdata.languages && Object.values(newdata.languages).join(", "),
      borderCountry:
        newdata.borders &&
        newdata.borders.map((v) => {
          return apiData.find((d) => {
            return d.cca3 === v;
          }).name.common;
        }),
    };

    //PUTTING NEW OBJ OUT
    setSecondaryData(newSecondaryData);
  }

  function handelInputData(data) {
    setInputData(data);
  }

  function handelTemplate(data) {
    if (template === "primary") {
      setScrollAmt(window.scrollY);
    }
    if (template === "secondary") {
      setTimeout(() => window.scrollBy(0, scrollAmt), 0);
    }
    setTemplate(data);
  }

  window.onscroll = (e) => {
    window.scrollY >= 590 ? setAutoScroll(true) : setAutoScroll(false);
  };

  //ELEMENT PART OF THE COMPONET ***********************************************
  return (
    <div id="Navbar" className={"windowContainer " + colorThemObj.colorModeV1}>
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
              handelInputData={handelInputData}
            />

            <Cardcontainer
              colorThemObj={colorThemObj}
              apiData={apiData}
              inputData={inputData}
              handelNewSecondaryData={handelNewSecondaryData}
              handelTemplate={handelTemplate}
            />
            {AutoScroll && (
              <a
                href="#Navbar"
                className={"autoScrollUp " + colorThemObj.colorModeV2}
              >
                <img src={colorThemObj.arrowIcon} alt="upward arrow" />
              </a>
            )}
          </div>
        ) : (
          <SecondaryTemplate
            colorThemObj={colorThemObj}
            secondaryData={secondaryData}
            handelNewSecondaryData={handelNewSecondaryData}
            handelTemplate={handelTemplate}
          />
        )}
      </main>
    </div>
  );
}
