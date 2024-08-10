import React from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Card(props) {
  return (
    <BootstrapCard
      style={{
        width: "30rem",
        backgroundColor: "skyblue",
        color: "white",
        border: "solid",
        borderRadius: "10px",
        display: "inline-flex",
        margin: "5px",
        alignItems: "center",
      }}
    >
      <BootstrapCard.Img
        variant="top"
        src={props.url}
        style={{
          height: 200,
          width: 200,
          margin: "10px",
          borderRadius: "150px",
        }}
      />
      <div>
        <BootstrapCard.Body>
          <BootstrapCard.Title>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
          </BootstrapCard.Title>
          <BootstrapCard.Text>{props.Text}</BootstrapCard.Text>

          <Button
            style={{
              display: "inline-flex",
              borderRadius: "10px",

              backgroundColor: "orange",
              width: "100%",
              height: "20px",
            }}
            variant="primary"
          >
            Wanna Buy it Now, {props.userName}?
          </Button>
        </BootstrapCard.Body>
      </div>
    </BootstrapCard>
  );
}

export default Card;
