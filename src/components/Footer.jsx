import styled from "styled-components";

const FooterText = styled.p`
  font-size: 12px;
  color: var(--black-color);
  opacity: 85%;
  text-align: center;
  padding: 22px;
`;

export default function Footer() {
  return <FooterText>Desenvolvido por @Murilo Martins Alves</FooterText>;
}
