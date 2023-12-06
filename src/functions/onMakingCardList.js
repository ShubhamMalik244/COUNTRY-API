import onCardClick from "./onCardClick";
export default function onMakingCardList(
  colorThemObj,
  setSecondaryData,
  serverData,
  searchInput,
  filterInput,
  setCardList
) {
  let filteredData = serverData;
  let nextCardList;

  //IF WE FILTER THE DATA BY REGION-FILTERER
  if (filterInput) {
    filteredData = serverData.filter((d) => {
      return d.region === filterInput;
    });
  }
  //IF WE FILTER THE DATA BY SEARCHING
  else if (searchInput) {
    filteredData = serverData.filter((d) => {
      return d.name.common.match(new RegExp(searchInput, "ig"));
    });
  }

  //IF BUILDING THE LIST
  nextCardList = buildCardElementList(
    filteredData,
    colorThemObj,
    serverData,
    setSecondaryData
  );
  setCardList(nextCardList);
}

function buildCardElementList(
  filteredData,
  colorThemObj,
  serverData,
  setSecondaryData
) {
  return filteredData.map((d) => {
    return (
      <Card
        id={d.cca2}
        serverData={serverData}
        setSecondaryData={setSecondaryData}
        colorThemObj={colorThemObj}
        key={d.cca2}
        name={d.name.common}
        popu={d.population}
        reg={d.region}
        cap={d.capital}
        flag={d.flags.png}
      />
    );
  });
}

function Card(props) {
  return (
    <section className="card" onClick={() => onCardClick(props.id, props.serverData, props.setSecondaryData)}>
      <div className="countryFlagImgContainer">
        <img src={props.flag} alt="flag" className="countryFlagImg" />
      </div>
      <div className={"countryInfo " + props.colorThemObj.colorModeV2}>
        <h3>{props.name}</h3>
        <p>
          <span>Population: </span>
          {props.popu}
        </p>
        <p>
          <span>Region: </span>
          {props.reg}
        </p>
        <p>
          <span>Capital: </span>
          {props.cap}
        </p>
      </div>
    </section>
  );
}
