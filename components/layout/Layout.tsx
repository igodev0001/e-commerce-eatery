import React, { Fragment } from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <div>Footer</div>
    </Fragment>
  );
}
