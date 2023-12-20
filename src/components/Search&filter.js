import { useState } from "react";

export default function SearchAndFilter({
  colorThemObj,
  inputData,
  handelInputData,
}) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  

  function handelDropdown(dropdownVisibilityValue) {
    setDropdownVisibility(dropdownVisibilityValue);
  }

  return (
    <div className={"searchAndFilterContainer " + colorThemObj.colorModeV1}>
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
            handelInputData({
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
              handelInputData={handelInputData}
              handelDropdown={handelDropdown}
            >
              Africa
            </RegionSelectBtn>
            <RegionSelectBtn
              handelInputData={handelInputData}
              handelDropdown={handelDropdown}
            >
              Americas
            </RegionSelectBtn>
            <RegionSelectBtn
              handelInputData={handelInputData}
              handelDropdown={handelDropdown}
            >
              Asia
            </RegionSelectBtn>
            <RegionSelectBtn
              handelInputData={handelInputData}
              handelDropdown={handelDropdown}
            >
              Europe
            </RegionSelectBtn>
            <RegionSelectBtn
              handelInputData={handelInputData}
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

function RegionSelectBtn({ children, handelInputData, handelDropdown }) {
  return (
    <button
      onClick={() => {
        handelInputData({
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
