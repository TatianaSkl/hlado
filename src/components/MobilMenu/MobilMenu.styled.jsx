import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  transition: left 0.3s ease;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 220px;
  height: 100vh;
  padding: 75px 10px 20px 10px;
  background-color: ${props => props.theme.colors.white};
  flex-direction: column;
  justify-content: space-between;
`;

export const IconClose = styled(AiOutlineClose)`
  color: ${props => props.theme.colors.accent};
  width: 20px;
  height: 20px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
