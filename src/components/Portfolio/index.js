import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src=""
            alt="Title"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">The Fight Club</MDBCardTitle>
            <MDBCardText>
              Repo Description
            </MDBCardText>
            <MDBBtn
              href="github"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src=""
            alt="Budget"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo Description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src=""
            alt="Fitness"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo Description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://user-images.githubusercontent.com/64516562/97784659-c541c200-1b65-11eb-98ee-26da26acf883.PNG"
            alt="Team Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src=""
            alt="Weather"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src=""
            alt=""
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src=""
            alt="Planner"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            src=""
            alt="Password"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "205px" }}
            src=""
            alt="Summerlin Labs"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Title</MDBCardTitle>
            <MDBCardText>
              Repo Description
            </MDBCardText>
            <MDBBtn
              href=""
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;