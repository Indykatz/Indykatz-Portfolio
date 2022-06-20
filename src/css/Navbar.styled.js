import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #2a5a97;
  padding: 10px;
`;

export const NavbarItems = styled.div`
  font-size: 16px;
  margin-right: 16px;
  color: white;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
