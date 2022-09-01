import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  // Create Ref
  const searchValue = React.useRef("");

  // create Focus with USeefecct

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const SearchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const HandleSubmit = (e) => {
    console.log("Hola ");
    e.preventDefault();
  };

  // React.useEffect(() => {
  //   console.log("Hola ");
  // }, [HandleSubmit]);
  return (
    <section className="section search">
      {/* check why onSubmit if not working in my m1, is still refreshing comoponente  */}
      <form className="search-form" onSubmit={HandleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Buscar Cocktail Favorito </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={SearchCocktail}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
