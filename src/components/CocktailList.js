import React, { Children } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No hay cockteles en la busqueda deseada</h2>;
  }

  console.log(cocktails);
  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          const { id } = item;
          return <Cocktail key={id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
