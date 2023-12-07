import { useState } from "react";
import onToggelDropdown from "../functions/onToggelDropdown"; //FUNC

export default function SearchAndFilter({
  colorThemObj,
  setFilterInput,
  setSearchInput,
}) {
  const [visibility, setVisibility] = useState("disappear");

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
          onChange={(e) => {setSearchInput(e.target.value); setFilterInput('')}}
          id="search"
          type="text"
          placeholder="Search for a country..."
        />
      </section>

      <section className={"filterSection " + colorThemObj.colorModeV2}>
        <button
          className="upperTilePart"
          onClick={() => onToggelDropdown(visibility, setVisibility)}
        >
          Filter by Region
        </button>

        <div className={"lowerListPart " + visibility}>
          <RegionSelectBtn
            setFilterInput={() => setFilterInput("Africa")}
            setSearchInput={() => setSearchInput("")}
            onToggelDropdown={() => onToggelDropdown(visibility, setVisibility)}
          >
            Africa
          </RegionSelectBtn>
          <RegionSelectBtn
            setFilterInput={() => setFilterInput("Americas")}
            setSearchInput={() => setSearchInput("")}
            onToggelDropdown={() => onToggelDropdown(visibility, setVisibility)}
          >
            Americas
          </RegionSelectBtn>
          <RegionSelectBtn
            setFilterInput={() => setFilterInput("Asia")}
            setSearchInput={() => setSearchInput("")}
            onToggelDropdown={() => onToggelDropdown(visibility, setVisibility)}
          >
            Asia
          </RegionSelectBtn>
          <RegionSelectBtn
            setFilterInput={() => setFilterInput("Europe")}
            setSearchInput={() => setSearchInput("")}
            onToggelDropdown={() => onToggelDropdown(visibility, setVisibility)}
          >
            Europe
          </RegionSelectBtn>
          <RegionSelectBtn
            setFilterInput={() => setFilterInput("Oceania")}
            setSearchInput={() => setSearchInput("")}
            onToggelDropdown={() => onToggelDropdown(visibility, setVisibility)}
          >
            Oceania
          </RegionSelectBtn>
        </div>
      </section>
    </div>
  );
}

function RegionSelectBtn({ children, setFilterInput, onToggelDropdown }) {
  return (
    <button
      onClick={() => {
        setFilterInput();
        onToggelDropdown();
      }}
      className="commonListBtnStyle"
    >
      {children}
    </button>
  );
}
