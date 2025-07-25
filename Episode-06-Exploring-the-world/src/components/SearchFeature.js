import { useState } from "react";
const SearchFeature = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText.trim());
    if (searchText.trim().length > 0) {
      setSearchText("");
    }
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          onBlur={handleSearch}
        />
        <button type="button" className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchFeature;
