import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Footer } from "../layouts";
import "../index.scss";
import { Actions, Cards, Header } from "../components";

const IndexPage = () => {
  return (
    <>
      <title>Hello world!</title>
      <Header />
      <main>
        <Actions />
        <Cards/>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default IndexPage;
