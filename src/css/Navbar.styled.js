import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #2a5a97;
`;

export const NavbarItems = styled.div`
  font-size: 20px;
  margin: 10px;
  margin-right: 20px;
  color: white;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
