import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 80px 20px 130px;
  gap: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-y: scroll;

  @media (max-width: 600px) {
    padding: 55px 10px 100px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  gap: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
