import React from "react";
import Spotify from "spotify-web-api-js";

const spotify = new Spotify();

export default function Player() {
  spotify.setAccessToken(localStorage.getItem('spotifyToken'));

  (async () => {
    const artists = await spotify.getMyCurrentPlaybackState();
    console.log(artists);
  })();

  return (
    <div>
      <h1>Player Innit Brother</h1>
    </div>
  );
}
