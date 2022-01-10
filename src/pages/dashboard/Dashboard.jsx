import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
// import { useFetch } from "../../utils/hooks/useFetch";

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
