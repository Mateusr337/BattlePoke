import styled from "styled-components";

export const Input = styled.input`
  height: 55px;
  background: #ffffff;
  color: #111;
  border-radius: 6px;
  margin-bottom: 13px;
  padding-left: 12px;
  border: none;

  font-size: 20px;
  font-weight: bold;
  font-family: "Montserrat";

  &::placeholder {
    color: #9f9f9f;
    font-family: "Montserrat";
    font-style: italic;
  }

  &:disabled {
    background: #f2f2f2;
  }
`;
