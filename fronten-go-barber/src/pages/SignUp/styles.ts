import styled, { keyframes } from "styled-components";
import { shade } from 'polished';
import SignUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display:flex;
  align-items:stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  width: 100%;
  max-width: 700px;

`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContent = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
     color:#FF9000;
      display:block;
      text-decoration:none;
      text-align:center;
      transition: color 0.2s;

      display:flex;
      align-items:center;

      svg {
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#FF9000')}
      }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackground}) no-repeat center/cover;
`;
