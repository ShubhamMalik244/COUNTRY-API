import { useState } from "react";
import onToggelDropdown from "../functions/onToggelDropdown";

export default function SearchAndFilter({
  colorThemObj,
  setFilterInput,
  setSearchInput,
  searchInput,
}) {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

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
            setSearchInput(e.target.value);
            setFilterInput("");
          }}
          id="search"
          type="text"
          placeholder="Search for a country..."
          value={searchInput}
        />
      </section>

      <section className={"filterSection " + colorThemObj.colorModeV2}>
        <button
          className="upperTilePart"
          onClick={() => onToggelDropdown(true, setDropdownVisibility)}
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
              setFilterInput={setFilterInput}
              setSearchInput={setSearchInput}
              onToggelDropdown={onToggelDropdown}
              setDropdownVisibility={setDropdownVisibility}
            >
              Africa
            </RegionSelectBtn>
            <RegionSelectBtn
              setFilterInput={setFilterInput}
              setSearchInput={setSearchInput}
              onToggelDropdown={onToggelDropdown}
              setDropdownVisibility={setDropdownVisibility}
            >
              Americas
            </RegionSelectBtn>
            <RegionSelectBtn
              setFilterInput={setFilterInput}
              setSearchInput={setSearchInput}
              onToggelDropdown={onToggelDropdown}
              setDropdownVisibility={setDropdownVisibility}
            >
              Asia
            </RegionSelectBtn>
            <RegionSelectBtn
              setFilterInput={setFilterInput}
              setSearchInput={setSearchInput}
              onToggelDropdown={onToggelDropdown}
              setDropdownVisibility={setDropdownVisibility}
            >
              Europe
            </RegionSelectBtn>
            <RegionSelectBtn
              setFilterInput={setFilterInput}
              setSearchInput={setSearchInput}
              onToggelDropdown={onToggelDropdown}
              setDropdownVisibility={setDropdownVisibility}
            >
              Oceania
            </RegionSelectBtn>
          </div>
        )}
      </section>
    </div>
  );
}

function RegionSelectBtn({
  children,
  setFilterInput,
  setSearchInput,
  onToggelDropdown,
  setDropdownVisibility
}) {
  return (
    <button
      onClick={() => {
        setFilterInput(children);
        setSearchInput("");
        onToggelDropdown(false, setDropdownVisibility);
      }}
      className="commonListBtnStyle"
    >
      {children}
    </button>
  );
}
