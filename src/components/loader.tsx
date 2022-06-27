import React from "react"

import * as Styles from "./loader.module.scss"

const Loader = () => (
  <div className={Styles.loader}>
    <span style={{ "--i": 0, "--s": 1 }}></span>
    <span style={{ "--i": 1, "--s": 1.01 }}></span>
    <span style={{ "--i": 2, "--s": 1.02 }}></span>
    <span style={{ "--i": 3, "--s": 1.03 }}></span>
    <span style={{ "--i": 4, "--s": 1.04 }}></span>
    <span style={{ "--i": 5, "--s": 1.05 }}></span>
    <span style={{ "--i": 6, "--s": 1.06 }}></span>
    <span style={{ "--i": 7, "--s": 1.07 }}></span>
    <span style={{ "--i": 8, "--s": 1.08 }}></span>
  </div>
)

export default Loader
