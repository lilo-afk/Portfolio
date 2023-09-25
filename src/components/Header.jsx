import styled from "styled-components";
import Logo from "./logo";
import Links from "./links";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3% 10%;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 5% 10%;
  }
`;

export default function Header() {
  return (
    <TagHeader>
      <Logo></Logo>
      <Links></Links>
    </TagHeader>
  );
}
