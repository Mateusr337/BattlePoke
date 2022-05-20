import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 40px 30px 120px;
  gap: 20px;

  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  width: 100%;

  gap: 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  width: 120px;
  height: 120px;

  border-radius: 50%;
  background: #ff9741;
  border: 8px solid #172b4d;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 5;

  overflow: hidden;
`;
