import { useState, useEffect } from "react";

export default function Cardcontainer({
  colorThemObj,
  apiData,
  inputData,
  handelNewSecondaryData,
  setTemplate,
}) {
  //VERIABLES

  const [cardListData, setCardListData] = useState(apiData);


  //FILTERING THE DATA WITH SEARCH AND FILTER INPUT
  useEffect(() => {
    let filteredData = apiData;

    if (inputData.filterInput) {
      filteredData = apiData.filter((d) => {
        return d.region === inputData.filterInput;
      });
    } else if (inputData.searchInput) {
      filteredData = apiData.filter((d) => {
        return d.name.common.match(new RegExp(inputData.searchInput, "ig"));
      });
    }

    setCardListData(filteredData);
  }, [apiData, inputData]);

  return (
    <div className="cardBox">
      {cardListData.length !== 0
        ? cardListData.map((d) => {
            return (
              <Card
                key={d.cca2}
                d={d}
                apiData={apiData}
                handelNewSecondaryData={handelNewSecondaryData}
                colorThemObj={colorThemObj}
                setTemplate={setTemplate}
              />
            );
          })
        : "No Result Found!"}
    </div>
  );
}

//CARD COMPONENT ***********************
function Card({ d, handelNewSecondaryData, colorThemObj, setTemplate }) {
  return (
    <section
      className="card"
      onClick={() => {
        handelNewSecondaryData(d.cca3);
        setTemplate("secondary");
      }}
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
}
