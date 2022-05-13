import "./index.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

export function ProjectCard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="container">
        <header>ROUANET</header>
        <span className="project-details">
          <h1>Projeto teste</h1>
          <p className="city">São Paulo . SP</p>
          <p className="description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </span>
        <span className="project-budget">
          <h2>
            Aprovado <strong>R$ 100.000,00</strong>
          </h2>
          <h2>
            Captado <strong>R$ 500.000,00</strong>
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
