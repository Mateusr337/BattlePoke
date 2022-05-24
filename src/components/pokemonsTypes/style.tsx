import styled from "styled-components";
import { ImageProps } from "../../interfaces/imageInterface";

export const Img = styled.div<ImageProps>`
  width: 25px;
  height: 25px;

  background: url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-size: center center;

  @media (max-width: 600px) {
    width: 10px;
    height: 10px;
  }
`;
