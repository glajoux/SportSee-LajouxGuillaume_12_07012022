import React from "react";
import Header from "../../components/header/Header";
import HomeCard from "../../components/homeCard/HomeCard";

/**
 * React component displaying Home page
 * @returns {ReactElement}
 */
function Home() {
  return (
    <div>
      <Header />
      <HomeCard />
    </div>
  );
}

export default Home;
