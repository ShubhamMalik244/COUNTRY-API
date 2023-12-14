import { useState } from "react";

export default function SearchAndFilter({
  colorThemObj,
  inputData,
  setInputData,
}) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  function handelDropdown(dropdownVisibilityValue) {
    setDropdownVisibility(dropdownVisibilityValue);
  }

  return (
    <div className="searchAndFilterContainer">
      <section className={"searchSection " + colorThemObj.colorModeV3}>
        <label htmlFor="search">
          <img
            className="searchIcon"
            src={colorThemObj.searchIcon}
            alt="searchIcon"
          />
        </label>
        <input
          autoComplete="off"
          onChange={(e) => {
            setInputData({
              filterInput: "",
              searchInput: e.target.value,
            });
          }}
          id="search"
          type="text"
          placeholder="Search for a country..."
          value={inputData.searchInput}
        />
      </section>

      <section className={"filterSection " + colorThemObj.colorModeV2}>
        <button
          className="upperTilePart"
          onClick={() => handelDropdown(!dropdownVisibility && true)}
        >
          <span>Filter by Region</span>
          <img
            src={colorThemObj.arrowHeadIcon}
            className="arrowHead"
            alt="arrowHead"
          />
        </button>

        {dropdownVisibility && (
          <div className={"lowerListPart " + colorThemObj.colorModeV2}>
            <RegionSelectBtn
              setInputData={setInputData}
              handelDropdown={handelDropdown}
            >
              Africa
            </RegionSelectBtn>
            <RegionSelectBtn
              setInputData={setInputData}
              handelDropdown={handelDropdown}
            >
              Americas
            </RegionSelectBtn>
            <RegionSelectBtn
              setInputData={setInputData}
              handelDropdown={handelDropdown}
            >
              Asia
            </RegionSelectBtn>
            <RegionSelectBtn
              setInputData={setInputData}
              handelDropdown={handelDropdown}
            >
              Europe
            </RegionSelectBtn>
            <RegionSelectBtn
              setInputData={setInputData}
              handelDropdown={handelDropdown}
            >
              Oceania
            </RegionSelectBtn>
          </div>
        )}
      </section>
    </div>
  );
}

function RegionSelectBtn({ children, setInputData, handelDropdown }) {
  return (
    <button
      onClick={() => {
        setInputData({
          filterInput: children,
          searchInput: "",
        });
        handelDropdown(false);
      }}
      className="commonListBtnStyle"
    >
      {children}
    </button>
  );
}
