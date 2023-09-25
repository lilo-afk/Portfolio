import styled from "styled-components";
import logo from "../assets/logo.png";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 22px;
  height: auto;
`;

const LogoText = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-left: 8px;
`;

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo" />
      <LogoText>LILO</LogoText>
    </LogoContainer>
  );
}
