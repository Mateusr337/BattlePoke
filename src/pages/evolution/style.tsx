import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 30px 40px 90px;

  display: flex;
  flex-direction: column;
`;

export const Evolving = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ArrowContainer = styled.div`
  width: 200px;
  height: 20px;

  position: relative;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0;

  animation: anima 1s linear infinite;

  @keyframes anima {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }
`;
