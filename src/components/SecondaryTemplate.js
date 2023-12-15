export default function SecondaryTemplate({
  colorThemObj,
  secondaryData,
  handelNewSecondaryData,
  handelTemplate,
}) {
  return (
    <div className="secondaryTemplate">
      <button
        className={"commonBtnStyle backBtn " + colorThemObj.colorModeV2}
        onClick={() => handelTemplate("primary")}
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
              <Info info={"Nativ Name: "} value={secondaryData.nativName || 'not found'} />
              <Info info={"Population: "} value={secondaryData.population || 'not found'} />
              <Info info={"Regionn: "} value={secondaryData.region || 'not found'} />
              <Info info={"Sub Region: "} value={secondaryData.subRegion || 'not found'} />
              <Info info={"Capital: "} value={secondaryData.capital || 'not found'} />
            </div>
            <div className="col2">
              <Info info={"Top Level Domain: "} value={secondaryData.domain || 'not found'} />
              <Info info={"Currencies: "} value={secondaryData.currency || 'not found'} />
              <Info info={"Languages: "} value={secondaryData.language || 'not found'} />
            </div>
          </div>
          <div className="boderCountryContainer">
            <h2 className="boderCountryName">Border Countries:</h2>
            <div className="btnContainer">
              {secondaryData.borderCountry
                ? secondaryData.borderCountry.map((commonName, index) => {
                    return (
                      <BorderCountryBtn
                        key={index}
                        colorThemObj={colorThemObj}
                        countryCca3={commonName}
                        secondaryData={secondaryData}
                        handelNewSecondaryData={handelNewSecondaryData}
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


function Info({ info, value }) {
  return (
    <p className="infoKey">
      {info} <span className="infoValue">{value}</span>
    </p>
  );
}


function BorderCountryBtn({
  colorThemObj,
  countryCca3,
  handelNewSecondaryData,
}) {
  return (
    <button
      className={"commonBtnStyle " + colorThemObj.colorModeV2}
      onClick={() =>
        handelNewSecondaryData(
          countryCca3
        )
      }
    >
      {countryCca3}
    </button>
  );
}
