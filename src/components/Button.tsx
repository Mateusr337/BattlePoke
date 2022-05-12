import styled from "styled-components";

interface Props {
  background?: string;
  color?: string;
}

const Button = styled.button<Props>`
  height: 45px;

  padding: 10px;
  color: ${(p) => (p.color ? `${p.color}` : "#ffffff")};
  background: ${(p) => (p.background ? `${p.background}` : "#d6962a")};
  border-radius: 6px;
  border: none;

  font-size: 20px;
  font-weight: 800;
  font-family: "Montserrat";

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Button;
