import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";

import styled from "styled-components";
// import { Button, Card } from "react-bootstrap";

import "./kits_style.css";

export const KitDetails = () => {
  const { kitId } = useParams();
  // console.log(kidId)
  const KIT_API_URL = `http://localhost:8080/kit/${kitId}`;

  const [kitDetail, setDetail] = useState([]);

  useEffect(() => {
    fetch(KIT_API_URL)
      .then((res) => res.json())
      .then((json) => setDetail(json));
  }, [KIT_API_URL]);
  console.log(kitDetail);

  return (
    <div className="kits-continer">
      <h2>Kit Details Page</h2>
      <article className="kit-card" key={kitDetail._id}>
        <h3>{kitDetail.name}</h3>
        <h4>Innehåll i lådan:</h4>
        <h4>{kitDetail.content}</h4>
        <h4>Antal kalorier/dag: {kitDetail.nutrition_cal}</h4>
        <h4>För antal personer: {kitDetail.for_persons}</h4>
        <h4>För antal dagar: {kitDetail.for_days}</h4>
        <h4>Pris: {kitDetail.average_cost},-</h4>
        <a
          href="https://criseq.se/produkt-kategori/beredskapslada-krislada/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button>Köp här via Crisec</button>
        </a>
        <Button
          href="https://criseq.se/produkt-kategori/beredskapslada-krislada/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Köp här via Crisec
        </Button>
        <img
          src="https://criseq.se/wp-content/uploads/2020/05/crisec-5.png"
          alt="Logo"
          width="200"
        ></img>
        <ButtonBack />
        <Button variant="outline-primary">Primary</Button>
        <Button href="https://criseq.se/produkt-kategori/beredskapslada-krislada/"></Button>{" "}
        <Button type="submit">Button</Button>{" "}
      </article>
    </div>
  );
};
// styled-components:
// Kit Card component here

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
