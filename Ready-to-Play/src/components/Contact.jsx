import React from "react";
import './contact.css';

const TeamCard = ({ name, title, imageSrc, linkedin, github, email }) => {
  return (
    <div className="card text-center" style={{ width: "18rem", margin: "1rem" }}>
      <img
        src={imageSrc}
        className="card-img-top rounded-circle mx-auto mt-3"
        alt={name}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{title}</p>
        <div className="d-flex justify-content-center gap-3">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
          </a>
          <a href={`mailto:${email}`}>
            <i className="bi bi-envelope-fill" style={{ fontSize: "1.5rem" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const team = [
    {
      name: "Name1",
      title: "Full Stack Developer",
      imageSrc: "https://via.placeholder.com/100", // Replace with actual URL
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "abid@example.com",
    },
    {
      name: "Name2",
      title: "Front-End Developer // UI Designer",
      imageSrc: "https://via.placeholder.com/100", // Replace with actual URL
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "wahid@example.com",
    },
    {
      name: "Name3",
      title: "Full Stack / ML Developer",
      imageSrc: "https://via.placeholder.com/100", // Replace with actual URL
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "ayush@example.com",
    },
    {
      name: "Name4",
      title: "Python Developer // UI-Designer",
      imageSrc: "https://via.placeholder.com/100", // Replace with actual URL
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "omm@example.com",
    },
    {
      name: "Omm Devgoswami",
      title: "Python Developer // UI-Designer // Full-stack",
      imageSrc: "https://res.cloudinary.com/deuwunijk/image/upload/v1729536372/Logo_zlyq8q.png", // Replace with actual URL
      linkedin: "https://www.linkedin.com/in/omm-devgoswami-86a561214/",
      github: "https://github.com/OmmDevgoswami",
      email: "teamuniverse.omm@gmail.com"
    },
    {
      name: "Name6",
      title: "Python Developer // UI-Designer",
      imageSrc: "https://via.placeholder.com/100", // Replace with actual URL
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "omm@example.com",
    },
  ];

  return (
    <div className="contact-page">
      <div className="container text-center">
        <h1 className="my-5">Catch Us Up On !!!</h1>
        <div className="row justify-content-center">
          {team.map((member, index) => (
            <div className="col-md-3" key={index}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
