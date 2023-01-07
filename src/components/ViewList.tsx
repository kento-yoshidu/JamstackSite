import React from "react"

import Styles from "../styles/viewList.module.css"

import {
  HomeOutline,
  SettingsOutline,
  GlobeOutline,
  DocumentTextOutline
} from "react-ionicons"

const ViewList = () => {

  return (
    <ul className={Styles.viewList}>
      <li
        className={`${Styles.viewListItem} ${Styles.active}`}
      >
        <a href="#">
          <HomeOutline
            height="30px"
            width="30px"
          />
        </a>
      </li>

      <li
        data-li="view2"
        className={Styles.viewListItem}
      >
        <a href="#view2">
          <SettingsOutline
            height="30px"
            width="30px"
          />
        </a>
      </li>

      <li
        data-li="view3"
        className={Styles.viewListItem}
      >
        <a href="#view3">
          <GlobeOutline
            height="30px"
            width="30px"
          />
        </a>
      </li>

    <li
      data-li="view4"
      className={Styles.viewListItem}
    >
      <a href="#view4">
        <DocumentTextOutline
          height="30px"
          width="30px"
        />
      </a>
    </li>
    </ul>
  )
}

export default ViewList
