import Router from "next/router";
import { MainLayout } from "../../layout/MainLayout";

export default function About() {

  const clickGoToHome=()=>{
    Router.push('/index')
  }  

  return (
    <MainLayout title={"About"}>
      <h1>About</h1>
      <button onClick={clickGoToHome}>Go to home</button>
    </MainLayout>
  );
}
