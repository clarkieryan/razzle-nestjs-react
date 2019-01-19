import React, { useContext } from "react";

import { Grid, FlexCol } from "pivotal-ui/react/flex-grids";
import SpotifyLogin from "react-spotify-login";
import Link from "react-router-dom/Link";

import { AuthContext } from "../../helpers/auth";

import "./Home.css";

export default () => {
  const { updateToken } = useContext(AuthContext);
  return (
    <Grid className="grid-show" justifyContent="center">
      <FlexCol alignment="middle">
        <SpotifyLogin
          clientId="0b61b532f3314805a26ffb85461f1c19"
          redirectUri="http://localhost:3000"
          scope="user-modify-playback-state,user-read-currently-playing,user-read-playback-state"
          onSuccess={({access_token}) => {
            console.log(access_token);
            updateToken(access_token);
          }}
        />
      </FlexCol>
      <FlexCol>
        <Link to="/player">Player</Link>
      </FlexCol>
    </Grid>
  );
};
