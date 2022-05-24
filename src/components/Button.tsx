import styled from "styled-components";

interface Props {
  background?: string;
  color?: string;
  disabled?: boolean;
}

const Button = styled.button<Props>`
  height: 45px;

  padding: 10px;
  color: ${(p) => (p.color ? `${p.color}` : "#172B4D")};
  background: ${(p) => (p.background ? `${p.background}` : "#D6962A")};
  border-radius: 6px;
  border: none;
  opacity: ${(p) => p.disabled && "0.5"};
  gap: 10px;

  font-size: 20px;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    height: 12px;

    font-size: 10px;
    font-weight: 400;
  }
`;

export default Button;
