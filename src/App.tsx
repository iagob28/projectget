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
  }, []);

  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Projetos do poponente</h1>

        <div className="showbox">
          <ul>
            {projects.map((project: projectProps) => {
              return (
                <li key={project.pronac}>
                  <ProjectCard project={project} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
