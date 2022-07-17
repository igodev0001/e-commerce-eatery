import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const {
    container,
    wrapper,
    top,
    bottom,
    social_media,
    seperator,
    legal_terms,
  } = styles;
  return (
    <footer className={container}>
      <div className={wrapper}>
        <nav className={top}>
          <ul>
            <li>
              <div>Title</div>
              <div>
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
              </div>
            </li>
            <li>
              <div>Title</div>
              <div>
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
              </div>
            </li>
            <li>
              <div>Title</div>
              <div>
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
              </div>
            </li>
            <li>
              <div>Title</div>
              <div>
                <p>A</p>
                <p>B</p>
                <p>C</p>
                <p>D</p>
              </div>
            </li>
          </ul>
        </nav>
        <div className={bottom}>
          <div className={social_media}>
            <div>
              <p>icon1</p>
              <p>icon2</p>
              <p>icon3</p>
            </div>
            <div>
              <p>app store</p>
              <p>google play</p>
            </div>
          </div>
          <div className={seperator}>
            <hr />
          </div>
          <div className={legal_terms}>
            <div>
              <p>link1</p>
              <p>link2</p>
              <p>link3</p>
              <p>link4</p>
            </div>
            <div>copy right</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
