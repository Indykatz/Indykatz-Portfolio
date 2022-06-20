import styled from "styled-components";

export const TheApp = styled.div`
  text-align: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  /* padding: 10px; */
  text-align: center;
  min-height: 500px;
`;

export const Description = styled.div`
  background-color: #2a5a97;
  padding: 20px;
  width: 100%;
  color: white;
  font-size: 30px;
  text-align: left;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const EachBox = styled.div`
  height: auto;
  width: 250px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  border-radius: 6px;
  font-weight: bold;
  font-size: large;
  border: 1px solid #f49446;
  color: #2a5a97;
  text-justify: inter-word;
`;
