import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";
export default function Detail(props) {
  const navigate = useNavigate();
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        data.name ? setCharacter(data) : alert("No hay personajes con ese ID");
      })
      .catch((err) => {
        alert("Ups! Algo estuvo mal");
      });
    return () => setCharacter({});
  }, [detailId]);
  return (
    <div className="Character-detail">
        <div className="styles.Character-content">
      <button className="styles.Character-close" onClick={() => navigate(-1)}>Regresar</button>
      </div>
      <div className="Character-information">
        <div className= "Character-information-content">
          <h2>Name: {character.name}</h2>
          <h1>Status: {character.status}</h1>
          <h1>Gender: {character.gender}</h1>
          <h1>Specie: {character.species}</h1>
          <h1>Status: {character.status}</h1>
          <h1>Origin: {character.origin?.name}</h1>
          <h1>Location: {character.location?.name}</h1>
        </div>
        <picture className="Character-avatar">
        <img src={character.image} alt="" />
        </picture>
      </div>
    </div>
  );
}
