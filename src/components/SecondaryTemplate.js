import onCreateNewSecondaryData from "../functions/onCreateNewSecondaryData";

export default function SecondaryTemplate({
  colorThemObj,
  secondaryData,
  setSecondaryData,
  setTemplate,
}) {
  return (
    <div className="secondaryTemplate">
      <button
        className={"commonBtnStyle backBtn " + colorThemObj.colorModeV2}
        onClick={() => setTemplate("primary")}
      >
        <img
          src={colorThemObj.arrowIcon}
          alt="arrowIcon"
          className="arrowIcon"
        />
        Back
      </button>

      <div className="countryInfoContainer">
        <section className="flagContainer">
          <img src={secondaryData.flagSrc} alt="flag pic" className="flag" />
        </section>

        <section className={"infoContainer " + colorThemObj.colorModeV1}>
          <h2 className="countryName">{secondaryData.countryName}</h2>
          <div className="otherInfo">
            <div className="col1">
              <Info info={"Nativ Name: "} value={secondaryData.nativName} />
              <Info info={"Population: "} value={secondaryData.population} />
              <Info info={"Regionn: "} value={secondaryData.region} />
              <Info info={"Sub Region: "} value={secondaryData.subRegion} />
              <Info info={"Capital: "} value={secondaryData.capital} />
            </div>
            <div className="col2">
              <Info info={"Top Level Domain: "} value={secondaryData.domain} />
              <Info info={"Currencies: "} value={secondaryData.currency} />
              <Info info={"Languages: "} value={secondaryData.language} />
            </div>
          </div>
          <div className="boderCountryContainer">
            <h2 className="boderCountryName">Border Countries:</h2>
            <div className="btnContainer">
              {secondaryData.borderCountry
                ? secondaryData.borderCountry.map((countryName, index) => {
                    return (
                      <BorderCountryBtn
                        key={index}
                        colorThemObj={colorThemObj}
                        countryName={countryName}
                        secondaryData={secondaryData}
                        setSecondaryData={setSecondaryData}
                      />
                    );
                  })
                : "No Borders Attached!"}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

//INFO COMPONENT
function Info({ info, value }) {
  return (
    <p className="infoKey">
      {info} <span className="infoValue">{value}</span>
    </p>
  );
}

//BORDER-COUNTRY-BUTTON COMPONENT
function BorderCountryBtn({
  colorThemObj,
  countryName,
  secondaryData,
  setSecondaryData,
}) {
  return (
    <button
      className={"commonBtnStyle " + colorThemObj.colorModeV2}
      onClick={() =>
        onCreateNewSecondaryData(
          countryName,
          secondaryData.apiData,
          setSecondaryData
        )
      }
    >
      {countryName}
    </button>
  );
}
