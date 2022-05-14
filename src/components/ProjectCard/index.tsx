import "./index.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { projectProps } from "../../App";

interface ProjectCardProps {
  project: projectProps;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="container">
        <header>{project.pronac}</header>
        <span className="project-details">
          <h1>{project.name}</h1>
          <p className="city">
            {project.city} . {project.uf}
          </p>
          <p className="description">{project.resume}</p>
        </span>
        <span className="project-budget">
          <h2>
            Aprovado
            <strong>
              {project.approvedValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </h2>
          <h2>
            Captado
            <strong>
              {project.caughtValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </h2>
        </span>
        <div className="footer">
          <button className="add-button">ADICIONAR</button>
          <button
            className={isClicked ? "active" : "love-button"}
            onClick={() => setIsClicked(!isClicked)}
          >
            <AiOutlineHeart />
          </button>
        </div>
      </div>
    </>
  );
}
