import styled from "styled-components";
import Button from "./Buttons";
import Photo from "../assets/Murilo.png";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 10%;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftContainer = styled.div`
  text-align: start;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Text = styled.p`
  font-size: 16px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 44px;
  }
`;

const Title = styled.h1`
  font-size: 28px; /* Reduza o tamanho da fonte para telas menores */
  font-weight: 600;
  margin-top: 20px; /* Reduza a margem para telas menores */

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-top: 44px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    height: 450px;
  }
`;

export default function HeaderSection() {
  return (
    <SectionContainer>
      <LeftContainer>
        <Title>
          Oi! Eu sou o Murilo <br />
          tenho 18 anos e sou um <br />
          Desenvolvedor Full-Stack.
        </Title>
        <Text>
          Quero contribuir para um mundo mais <strong>tech</strong> com meu
          conhecimento em <br />
          programação!
        </Text>
        <Button></Button>
      </LeftContainer>
      <Image src={Photo}></Image>
    </SectionContainer>
  );
}
