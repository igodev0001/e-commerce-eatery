import React, { Fragment } from "react";
//===========================================
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./Layout.module.scss";
//===========================================
interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <div id="modal-root"></div>
      <main className={styles.main}>{children}</main>
      <Footer />
    </Fragment>
  );
}
