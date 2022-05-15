import { ProjectCard } from "./components/ProjectCard";
import "./app.scss";
import { useEffect, useState } from "react";
import { api } from "./services/api";

export type projectProps = {
  pronac: string;
  city: string;
  uf: string;
  resume: string;
  approvedValue: number;
  caughtValue: number;
  name: string;
};

function App() {
  const [projects, setProjects] = useState<projectProps[]>([
    {
      pronac: "",
      city: "",
      uf: "",
      resume: "",
      name: "",
      approvedValue: 0,
      caughtValue: 0,
    },
  ]);
  const [scroll, setScroll] = useState<HTMLElement | null>();

  useEffect(() => {
    setScroll(document.getElementById("scroll-box"));
  }, [scroll]);

  async function handleRightButton() {
    if (scroll) {
      scroll.scrollLeft += 100;
    }
  }

  async function handleLeftButton() {
    if (scroll) {
      scroll.scrollLeft -= 100;
    }
  }

  const testeProject = {
    pronac: "",
    city: "",
    uf: "",
    resume: "",
    name: "",
    approvedValue: 0,
    caughtValue: 0,
  };

  useEffect(() => {
    async function getProjects() {
      await api
        .get("/projetos/?limit=10")
        .then((res) => {
          const parsedProjects = res.data._embedded.projetos.map(
            (project: any) => {
              return {
                pronac: project.PRONAC,
                city: project.municipio,
                uf: project.UF,
                resume: project.resumo,
                name: project.nome,
                approvedValue: project.valor_aprovado,
                caughtValue: project.valor_captado,
              };
            }
          );
          setProjects(parsedProjects);
        })
        .catch((err) => console.log(err));
    }

    getProjects();
  }, [scroll]);

  

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Projetos do poponente</h1>

        <div className="showbox">
          <ul id="scroll-box">
            {/* {projects.map((project: projectProps) => {
              return (
                <li key={project.pronac}>
                  <ProjectCard project={project} />
                </li>
              );
            })} */}
            <li>
              <ProjectCard project={testeProject} />
            </li>
            <li>
              <ProjectCard project={testeProject} />
            </li>
            <li>
              <ProjectCard project={testeProject} />
            </li>
            <li>
              <ProjectCard project={testeProject} />
            </li>
            <li>
              <ProjectCard project={testeProject} />
            </li>
            <li>
              <ProjectCard project={testeProject} />
            </li>
            <li>
              <ProjectCard project={testeProject} />
            </li>
          </ul>
          <span className="nav-buttons">       
            <button className="scroll-button" onClick={handleLeftButton}>
              {"<"}
            </button>
            <button className="scroll-button" onClick={handleRightButton}>
              {">"}
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
