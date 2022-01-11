import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
import { useFetch } from "../../utils/hooks/useFetch";
import { useParams } from "react-router";
import { path } from "../../utils/path";
import HelloUser from "../../components/helloUser/HelloUser";

function Dashboard() {
  const idUrl = useParams();
  const data = useFetch(path + idUrl.userId);
  console.log(data);

  return (
    <>
      <Header />
      <main>
        <LeftSide />
        <HelloUser nom={data} />
      </main>
    </>
  );
}

export default Dashboard;
