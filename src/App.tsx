import React from "react";
import { Store } from "./Store";
import { async } from "q";

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const fetchDataAction = async () => {
    const url =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(url);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </React.Fragment>
  );
}
