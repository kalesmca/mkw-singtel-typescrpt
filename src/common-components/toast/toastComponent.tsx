import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { useSelector, useDispatch } from "react-redux";
import { updateToast } from "../../redux/actions/dashboard";
import ToastContainer from "react-bootstrap/ToastContainer";

function ToastComponent() {
  const dispatch = useDispatch();
  const appConfigState = useSelector((state: any) => state.appConfig);

  const closeToast = () => {
    dispatch(updateToast(false, ""));
  };
  return (
    <Row>
      <Col xs={6}>
        <ToastContainer
          className="p-3"
          position={"middle-center"}
          style={{ zIndex: 1 }}
        >
          <Toast
            onClose={() => closeToast()}
            show={appConfigState.showToast}
            delay={3000}
            autohide
            bg="danger"
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{appConfigState.toastMsg}</Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default ToastComponent;
