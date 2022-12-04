import styled, { Keyframes } from 'styled-components';

interface TempProps {
  $lodaingScale?: Keyframes;
}

export const ProgressBarValue = styled.div<TempProps>`
  animation: ${(props) => props.$lodaingScale} 1.5s normal forwards;
  display: flex;
  justify-content: end;
  align-items: center;
  align-content: center;
  padding-right: 15px;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 24px;
  background: var(--greenProgress);
  height: 24px;
  color: white;
`;
