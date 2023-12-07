import { useState, useEffect } from "react";
import onFetchData from "../functions/onFetchData";
import onFilteringData from "../functions/onFilteringData";
import onCardClick from "../functions/onCardClick";

export default function Cardcontainer({
  colorThemObj,
  setSecondaryData,
  filterInput,
  searchInput,
}) {
  //VERIABLES
  const [apiData, setServerData] = useState([]);
  const [cardListData, setCardListData] = useState(apiData);

  //GETTING THE DATA FROM THE SREVER....
  useEffect(() => {
    onFetchData(setServerData);
  }, []);

  //
  useEffect(() => {
    onFilteringData(apiData, searchInput, filterInput, setCardListData);
  }, [apiData, filterInput, searchInput]);

  return (
    <div className="cardBox">
      {cardListData.length !== 0
        ? cardListData.map((d) => {
            return (
              <section
                key={d.cca2}
                className="card"
                onClick={() => onCardClick(d.cca2, apiData, setSecondaryData)}
              >
                <div className="countryFlagImgContainer">
                  <img src={d.flags.png} alt="flag" className="countryFlagImg" />
                </div>
                <div className={"countryInfo " + colorThemObj.colorModeV2}>
                  <h3>{d.name.common}</h3>
                  <p>
                    <span>Population: </span>
                    {d.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {d.region}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {d.capital}
                  </p>
                </div>
              </section>
            );
          })
        : "No Result Found!"}
    </div>
  );
}
