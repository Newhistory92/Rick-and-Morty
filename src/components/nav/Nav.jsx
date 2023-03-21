import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { IconName } from "react-icons/fa"
const NavLinkMe = ({ to, children, ...props }) => {
  return (
    <NavLink
      {...props}
      to={to}
      className={({ isActive }) => (isActive ? styles.active : styles.disable)}
    >
      {children}
    </NavLink>
  );
};
export default function Nav(props) {
 
  const handleLogOut = () => {
    props.logOut();
  };
  return (
    <div className={styles.container}>
        <div>
        <img className={styles.logoContainer}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif"
        alt="Not found"
      />
      </div>
      
      <div className= {styles.menuItemLink}> 
        
      <NavLinkMe  to="/home">Home</NavLinkMe>
    
      <div className= {styles.link}>
      <NavLinkMe  to="/about">About</NavLinkMe>
      </div>
      
      <SearchBar onSearch={(characterID) => props.onSearch(characterID)} />
      <div className= {styles.buttonContainer}>
      <button className= {styles.button} onClick={handleLogOut}>LogOut</button>
      </div>
      </div>
    </div>
    
  );
}
