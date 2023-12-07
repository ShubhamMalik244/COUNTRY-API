import { replaceTemplate } from "../functions/onCardClick";

export default function SecondaryTemplate({ colorThemObj, secondaryData }) {


  return (
    <div className="secondaryTemplate disappear">
      <button
        className={"commonBtnStyle backBtn " + colorThemObj.colorModeV2}
        onClick={replaceTemplate}
      >
        <img src={colorThemObj.arrowIcon} alt="arrowIcon" className="arrowIcon"/>
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
                ? secondaryData.borderCountry.map((v, index) => {
                    return (
                      <button
                        key={index}
                        className={"commonBtnStyle " + colorThemObj.colorModeV2}
                      >
                        {v}
                      </button>
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
