import React from "react"
import styles from "./About.module.css"

export default function About(props) {
    return (
      <div className={styles.header}>

        <h1>Bienvenidos a mi primer Proyecto</h1>
        <p>
          En este Proyecto utilice los conocmientos de Henry
        </p>
        <img
          src="https://i.gifer.com/origin/1f/1f13acacb44865800f43b0395d73e147.gif"
          alt="Not found"
        />
        <h3> En proceso...</h3>
      </div>
    );
}