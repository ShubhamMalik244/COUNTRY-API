import Nav from "./components/Navbar";
import SearchAndFilter from "./components/Search&filter";
import Cardcontainer from "./components/Cardcontainer";
import SecondaryTemplate from "./components/SecondaryTemplate";

import { useState } from "react";

export default function App() {
  //FUNCTIONAL PART OF THE COMPONETN***************************************
  const [colorThemObj, setColorThemObj] = useState({
    navIcon: "icons/lightMode.png",
    navText: "LightMode",
    searchIcon: "icons/searchWhite.png",
    colorModeV1: "darkModeV1",
    colorModeV2: "darkModeV2",
    colorModeV3: "darkModeV2",
  });
  const [filterInput, setFilterInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [secondaryData, setSecondaryData] = useState({
    flagSrc: "pupet img",
    countryName: "pupet data",
    nativName: "pupet data",
    population: "pupet data",
    region: "pupet data",
    subRegion: "pupet data",
    capital: "pupet data",
    domain: "pupet data",
    currency: "pupet data",
    language: "pupet data",
  });

  //ELEMENT PART OF THE COMPONET ***********************************************
  return (
    <div className={"windowContainer " + colorThemObj.colorModeV1}>
      <main className="page">
        <Nav colorThemObj={colorThemObj} setColorThemObj={setColorThemObj} />

        <div className="primaryTemplate">
          <SearchAndFilter
            colorThemObj={colorThemObj}
            setFilterInput={setFilterInput}
            setSearchInput={setSearchInput}
          />
          <Cardcontainer
            colorThemObj={colorThemObj}
            setSecondaryData={setSecondaryData}
            filterInput={filterInput}
            searchInput={searchInput}
          />
        </div>

        <SecondaryTemplate
          colorThemObj={colorThemObj}
          secondaryData={secondaryData}
        />
      </main>
    </div>
  );
}
