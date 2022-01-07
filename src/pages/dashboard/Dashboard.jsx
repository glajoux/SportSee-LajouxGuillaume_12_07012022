import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";

function Dashboard(props) {
  return (
    <>
      <Header />
      <main>
        <LeftSide />
      </main>
    </>
  );
}

export default Dashboard;
