import React from "react";
import { UseGlobalContext } from "../Context/Context";

const SearchForm = () => {
  const { setSearchTerm } = UseGlobalContext();
  const handleSubmit = (event) => {
    console.log("clicked");
    event.preventDefault();
    const searchValue = event.target.elements.search.value;

    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="search of images"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
