import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "75px",
        height: "75px",
        margin: "auto",
        display: "block",
      }}
      className="mt-5"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
