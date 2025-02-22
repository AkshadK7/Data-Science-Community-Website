import React from "react";
import { Card } from "react-bootstrap";
import "../Projects/Projects.css";
import logo1 from "../Projects/logocopy.png";
import logo2 from "../Projects/git.png";
import img1 from "../Projects/dsc-projectcover.png";
import projectsLogo from "../Projects/project-page.svg";
import { useState, useEffect } from "react";

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const fetchData = () => {
    return fetch("https://dsc-admin.herokuapp.com/api/v1/project/")
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data.data[0]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getProjects = () => {
    let projectCards = [];
    for (let projects of projectData) {
      projectCards.push(
        <div>
          <div className="card-container">
            <Card className="Card">
              <Card.Body className="Lower">
                <Card.Title className="title">{projects.title}</Card.Title>
                <div className="upper">
                  <Card.Img
                    className="project-img"
                    variant="top"
                    src={projects.img}
                  />
                </div>
                <p>{projects.description}</p>
                <div className="logos">
                  <img className="ico" src={logo1} alt="" />
                  <a href={projects.link} target="_blank">
                    <img className="ico" src={logo2} id="git" alt="" />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }

    return projectCards;
  };
  return (
    <div>
      <div className="maincont">
        <div className="upperbd">
          <h1 data-aos="zoom-in-up" style={{ marginTop: "80px" }}  className="head">Projects</h1>
          <p >
            We apply our coding skills to a wide range of datasets to solve
            real-world problems. Here are some inspirational ideas and their
            implementations from our brilliant community members. Check out these projects below!
          </p>
        </div>
        <div className="sidebd">
          <img 
            src={projectsLogo}
            alt=""
          />
        </div>
      </div>
      <div className="cardsPlacement">{getProjects()}</div>
    </div>
  );
}
export default Projects;
