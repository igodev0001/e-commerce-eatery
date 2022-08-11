import React, { Fragment } from "react";
//===========================================
import Header from "../header/Header";
import Footer from "../footer/Footer";
//===========================================
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
