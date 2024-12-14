import { useState } from "react";
import "../../style/search.css";


const SearchBooks: React.FC<{ onChangeCallback: Function }> = ({
  onChangeCallback,
}) => {


  const [search, setSearch] = useState<string>("");

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    setSearch(inputValue);

    // if the component receives a callback, call it,
    // and pass the input value as an argument
    onChangeCallback(inputValue);
  };

  return (
    <div className="searchStyle">
      <div className="modelSearch">
        <form className="search-box">
          <input
            value={search}
            type="text"
            placeholder="Type to Search..."
            id="search"
            onChange={handleChange}
          />
        </form>
      </div>

      <p>*You Can Search Title book or Author</p>
    </div>
  );
};

export default SearchBooks;