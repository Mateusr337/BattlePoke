import styled from "styled-components";

export const Container = styled.div`
  width: 200px;

  padding: 15px;
  border-radius: 10px;
  border: 1px solid #000000;
  background: #172b4d;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 95px;
  left: 30px;

  @media (max-width: 600px) {
    top: 60px;
  }
`;
