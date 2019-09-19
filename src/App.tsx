import React from "react";
import { Store } from "./Store";
import { IAction, IEpisode, IEpisodeProps } from "./interfaces";
import { Link } from "@reach/router";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves"> Favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
    </React.Fragment>
  );
}
