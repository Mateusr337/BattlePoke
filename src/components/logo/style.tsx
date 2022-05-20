import styled from "styled-components";

interface Props {
  fontSize?: string;
}

export const Container = styled.div`
  align-items: center;
  gap: 5px;
  display: flex;
`;

export const Text = styled.span<Props>`
  font-family: "Bungee Inline";
  font-size: 60px;

  font-weight: 800;
  color: #d6962a;
`;
