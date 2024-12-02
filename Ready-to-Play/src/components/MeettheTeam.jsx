import React from "react";
import "./contact.css";

const TeamCard = ({ name, title, imageSrc, linkedin, github, email }) => {
  return (
    <div className="col">
      <div className="card h-100 text-center">
        <div className="card-body">
          <div className="mb-3">
            <img
              src={imageSrc}
              alt={`${name}'s Profile`}
              className="rounded-circle"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{title}</p>
          <div className="d-flex justify-content-center">
            <a href={linkedin} className="me-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={github} className="me-2" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href={`mailto:${email}`}>
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetTheTeam = () => {
  const team = [
    {
      name: "Name1",
      title: "Full Stack Developer",
      imageSrc: "https://via.placeholder.com/100",
      linkedin: "#",
      github: "#",
      email: "name1@example.com",
    },
    {
      name: "Name2",
      title: "Front-End Developer // UI Designer",
      imageSrc: "https://via.placeholder.com/100",
      linkedin: "#",
      github: "#",
      email: "name2@example.com",
    },
    {
      name: "Name3",
      title: "Full Stack // ML Developer",
      imageSrc: "https://via.placeholder.com/100",
      linkedin: "#",
      github: "#",
      email: "name3@example.com",
    },
    {
      name: "Name4",
      title: "Python Developer // UI Designer",
      imageSrc: "https://via.placeholder.com/100",
      linkedin: "#",
      github: "#",
      email: "name4@example.com",
    },
    {
      name: "Name5",
      title: "Python Developer // UI Designer",
      imageSrc: "https://via.placeholder.com/100",
      linkedin: "#",
      github: "#",
      email: "name5@example.com",
    },
    {
      name: "Name6",
      title: "Python Developer // UI Designer",
      imageSrc: "https://via.placeholder.com/100",
      linkedin: "#",
      github: "#",
      email: "name6@example.com",
    },
  ];

  return (
    <div className="contact-page">
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet the Team</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {team.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MeetTheTeam;
