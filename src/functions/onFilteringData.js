export default function onFilteringData(
  apiData,
  searchInput,
  filterInput,
  setCardListData
) {
  let filteredData = apiData;

  //IF WE FILTER THE DATA BY REGION-FILTERER
  if (filterInput) {
    filteredData = apiData.filter((d) => {
      return d.region === filterInput;
    });
  }
  //IF WE FILTER THE DATA BY SEARCHING  //ATTENTION! MAKE SEARCH BETTER
  else if (searchInput) {
    filteredData = apiData.filter((d) => {
      return d.name.common.match(new RegExp(searchInput, "ig"));
    });
  }

  setCardListData(filteredData);
}
