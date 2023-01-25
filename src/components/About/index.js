import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src=""
            class=""
            alt="Brandon Jimenez"
          />
          <p style={{ fontSize: "27px" }}>
            About
          </p>
          <p style={{ fontSize: "27px" }}>
            Description
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;