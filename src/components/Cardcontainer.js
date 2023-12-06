import { useState, useEffect } from "react";
import onFetchData from "../functions/onFetchData";
import onMakingCardList from "../functions/onMakingCardList";

export default function Cardcontainer({
  colorThemObj,
  setSecondaryData,
  filterInput,
  searchInput,
}) {
  const [serverData, setServerData] = useState([]);
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    onFetchData(setServerData);
  }, []);

  useEffect(() => {
    onMakingCardList(
      colorThemObj,
      setSecondaryData,
      serverData,
      searchInput,
      filterInput,
      setCardList
    );
  }, [colorThemObj, serverData, filterInput, searchInput]);

  return (
    <div className="cardBox">
      {cardList.length !== 0 ? cardList : "No Result Found!"}
    </div>
  );
}
