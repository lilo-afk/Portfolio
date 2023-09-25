import styled from "styled-components";
import { GrGithub } from "react-icons/gr";
import { FiArrowUpRight } from "react-icons/fi";
import Dubairro from "../assets/DubairroPreview.png";
import Shorts from "../assets/ShortsSummaryPreview.png";
import Construction from "../assets/Construction.png";

const ProjectContainer = styled.div`
  padding: 3% 10%;
  color: var(--black-color);

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 5% 10%;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: start;
`;

const ListProjects = styled.div`
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  padding: 20px;
  border-radius: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundColor || "var(--white-color)"};
  text-align: center;
`;

const ProjectTitleCard = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProjectImage = styled.img`
  margin-top: 14px;
  max-width: 100%;
  width: 280px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  justify-content: end;
  gap: 12px;
`;

const GithubButton = styled.button`
  font-size: 18px;
  line-height: 14px;

  color: var(--white-color);
  background-color: var(--black-color);

  padding: 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

const LinkButton = styled.button`
  font-size: 18px;
  line-height: 14px;

  background-color: var(--white-color);
  color: var(--black-color);

  padding: 10px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

export default function Projects() {
  const projects = [
    {
      title: "Dubairro",
      githubLink: "https://github.com/lilo-afk/Dubairro",
      projectLink: "https://projetodubairro.000webhostapp.com/index.php",
      imageSrc: Dubairro,
      backgroundColor: "#fd7375",
    },
    {
      title: "Shorts Summary",
      githubLink: "https://github.com/lilo-afk/NLW-IA",
      projectLink: "#",
      imageSrc: Shorts,
      backgroundColor: "#bf8afe",
    },
    {
      title: "Em breve...",
      githubLink: "#",
      projectLink: "#",
      imageSrc: Construction,
      backgroundColor: "#e1f3ff",
    },
    {
      title: "Em breve...",
      githubLink: "#",
      projectLink: "#",
      imageSrc: Construction,
      backgroundColor: "#e1f3ff",
    },
  ];

  return (
    <ProjectContainer>
      <ProjectTitle>Projetos</ProjectTitle>
      <ListProjects>
        {projects.map((project, index) => (
          <ProjectCard key={index} backgroundColor={project.backgroundColor}>
            <ProjectTitleCard>{project.title}</ProjectTitleCard>
            <ProjectImage
              src={project.imageSrc}
              alt={`Imagem do ${project.title}`}
            />
            <ButtonContainer>
              <GithubButton
                onClick={() => window.open(project.githubLink, "_blank")}
              >
                <GrGithub />
              </GithubButton>
              <LinkButton
                onClick={() => window.open(project.projectLink, "_blank")}
              >
                <FiArrowUpRight />
              </LinkButton>
            </ButtonContainer>
          </ProjectCard>
        ))}
      </ListProjects>
    </ProjectContainer>
  );
}
