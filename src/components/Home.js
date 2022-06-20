import React from "react";

import HomeHero from "./HomeHero/home-hero.js";
import Grid from "./grid/grid.js";
import Video from "./video/video.js";
import Used from "./used/used.js";
import Create from "./account/createAccount.js";

function Home() {
  return (
    <div>
      <HomeHero />
      <Grid />
      <Video />
      <Used />
      <Create />
    </div>
  );
}

export default Home;
