import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";
// set the url

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// create context to apply into the index latter
const AppContext = React.createContext();

// create the appProvider
// ================================
const AppProvider = ({ children }) => {
  // set the working parameters.

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a"); // why!!!! checl later .. essetial have something right now
  const [cocktails, setCocktails] = useState([]);

  // const fetchDrinks =  useCallback(  async () => {
  //   const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  //   setLoading(true);
  //   try {
  //     const { data } = await axios(`${url}${searchTerm}`);
  //     // const response = await fetch(`${url}${searchTerm}`);
  //     const { drinks } = data;

  //     if (drinks) {
  //       const newDrinks = drinks.map((item) => {
  //         console.log(item);
  //         const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
  //           item;
  //         //  return an object
  //         return {
  //           id: idDrink,
  //           name: strDrink,
  //           image: strDrinkThumb,
  //           info: strAlcoholic,
  //           glass: strGlass,
  //         };
  //       });
  //       setCocktails(newDrinks);
  //     } else {
  //       setCocktails([]);
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setLoading(false);
  // }),[searchTerm];

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  // ==========================
  return (
    //  REMEMBER ALWAYS TO SET THE DOBLE CURLYS!!!!.-----
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

// create the gloal hook. or costum hook.  and export.

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
