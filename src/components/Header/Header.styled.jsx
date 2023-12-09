import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';

export const HeaderStyled = styled.header`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */

  /* border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  border-color: ${props => props.theme.colors.accent}; */
  @media (min-width: 768px) {
    padding-top: 19px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const WrapperDes = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const IconMenu = styled(HiMenuAlt1)`
  width: 30px;
  height: 30px;
  color: ${props => props.theme.colors.accent};
  @media (min-width: 768px) {
    width: 50px;
    height: 30px;
  }
`;

export const ButtonMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 14px;
  @media (min-width: 768px) {
    margin-left: 16px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const WrapperLogo = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colors.accent};
  font-size: 24px;
  font-weight: 800;
  /* &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
    border-radius: 12px;
  } */
`;
