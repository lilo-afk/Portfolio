import styled from "styled-components";

const AboutText = styled.p`
  font-size: 16px;
  font-weight: 100;
  color: var(--white-color);
  background-color: var(--black-color);
  padding: 6% 11%;

  @media screen and (max-width: 768px) {
    margin-top: 44px;
    font-size: 16px;
    padding: 5% 10%;
  }
`;

export default function About() {
  return (
    <AboutText>
      “No final de 2019, conheci a área da programação e comecei a estudar
      desenvolvimento web...Em 2020, eu entrei para o curso técnico de
      Desenvolvimento de Sistemas , oferecido pela Etec de Carapicuíba, onde
      participei de diversos projetos interdisciplinares realizados em equipe,
      ênfase para trabalhos com objetivos sustentáveis, em que foram entregues
      sites, como: Vansymp, um blog sobre o impacto de impressões 3D na saúde e
      bem-estar e meu TCC chamado Dubairro, que se tratava de uma aplicação web
      de geolocalização de comércios locais e bate-papo entre moradores, feita
      com HTML, CSS, JS, PHP e MySQL em 2022. Atualmente, estou estudando
      Análise e Desenvolvimento de Sistemas, na Fatec, onde venho programando
      com Flutter/Dart, Java, Javascript e Python.“
    </AboutText>
  );
}
