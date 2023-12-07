export default function onCardClick(
  id,
  serverData,
  setSecondaryData,
  colorThemObj
) {
  //REPLACING TEMPLATES
  replaceTemplate();

  //CREATING A NEW SECONDARY DATA OBJ
  let newdata = serverData.find((d) => {
    return d.cca2 === id;
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
    currency: Object.values(newdata.currencies).map((v) => { return v.name}).join(', '),
    language: Object.values(newdata.languages).join(", "),
    borderCountry: newdata.borders,
  };

  //PUTTING NEW OBJ OUT
  setSecondaryData(newSecondaryData);
}

export function replaceTemplate() {
  let primaryTemplate = document.querySelector(".primaryTemplate");
  let secondaryTemplate = document.querySelector(".secondaryTemplate");

  primaryTemplate.classList.toggle("disappear");
  secondaryTemplate.classList.toggle("disappear");
}
