import { useEffect, useState } from "react";
import Context from "./CreateContext";
import apiFetch, { suggestionBreeds } from "../apiFetch";
import filteringBreed from "../apiFetch/filteringBreedsFromSuggestion";

const GlobalStates = (props) => {
  const [data, setdata] = useState({});
  const [inputVal, setInputVal] = useState("");
  const [suggestion, setSuggestion] = useState({});
  const [likedDog , setLikedDog]=useState([]);
  

  // likedDog&&console.log(likedDog)

  useEffect(() => {
    suggestionBreeds("https://dog.ceo/api/breeds/list/all")
      .then((data) => setSuggestion(filteringBreed(data.message)))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (inputVal.trim() !== "") {
      apiFetch(
        `https://dog.ceo/api/breed/${inputVal.toLowerCase()}/images/random/10`
      )
        .then((responseData) => {
          setdata(responseData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [inputVal]);

//   console.log(suggestion);

  return (
    <Context.Provider value={{ data, setInputVal , suggestion , likedDog , setLikedDog}}>
      {props.children}
    </Context.Provider>
  );
};

export default GlobalStates;
