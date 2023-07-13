import React from "react";
import Card from "react-bootstrap/Card";
import * as CONSTANTS from "../../config/constants";

const CardComponent = (props: Card) => {
  const { dog } = props;
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={CONSTANTS.IMG_BASE_BATH + dog.reference_image_id + ".jpg"}
        />
        <Card.Body>
          <Card.Title>{dog.name}</Card.Title>
          <Card.Text>
            <div className="card-body-content">
              <span className="card-body-title">Origin</span>
              <span className="card-body-value">
                {dog.origin ? dog.origin : "Universal"}
              </span>
            </div>
            <div className="card-body-content">
              <span className="card-body-title">life_span</span>
              <span className="card-body-value">{dog.life_span}</span>
            </div>
            <div className="card-body-content">
              <span className="card-body-title">Height</span>
              <span className="card-body-value">{dog.height.imperial}</span>
            </div>
            <div className="card-body-content">
              <span className="card-body-title">Temperament</span>
              <span className="card-body-value">{dog.temperament}</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComponent;
