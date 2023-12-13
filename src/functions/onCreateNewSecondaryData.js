export default function onCreateNewSecondaryData(id, apiData, setSecondaryData) {
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
      apiData: apiData,
    };
  
    //PUTTING NEW OBJ OUT
    setSecondaryData(newSecondaryData);
  }
  