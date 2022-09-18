import React, { Fragment } from "react";
//===========================================
import Header from "../header/Header";
import Footer from "../footer/Footer";
//===========================================
interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <div id="modal-root"></div>
      <main style={{ padding: "4rem" }}>{children}</main>
      <Footer />
    </Fragment>
  );
}
