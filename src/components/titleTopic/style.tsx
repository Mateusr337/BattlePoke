import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  color: #d6962a;
  gap: 15px;
  font-family: "Bungee Inline";
  font-weight: 900;
  font-size: 26px;

  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 14px;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

export const Title = styled.div`
  color: #ffffff;
  background: #d6962a;
  padding: 10px;
  border-radius: 5px;
`;
