import styled from "styled-components";

const NavigationLinks = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  font-size: 14px;
  font-weight: 600;

  color: var(--black-color);

  margin-left: 30px;
  text-decoration: none;
`;

export default function Links() {
  return (
    <NavigationLinks>
      <NavLink href="#">Início</NavLink>
      <NavLink href="#">Projetos</NavLink>
    </NavigationLinks>
  );
}
