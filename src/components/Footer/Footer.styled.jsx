import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WrapperFooter = styled.footer`
  background-color: ${props => props.theme.colors.accent};
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const WrapperLogo = styled.div`
  margin-bottom: 32px;
  text-align: center;
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  border-color: ${props => props.theme.colors.white};
  padding-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

export const Logo = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  font-weight: 800;
  padding-bottom: 24px;
  /* &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
    border-radius: 12px;
  } */
`;

export const ListSocial = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 145px;
  gap: 10px;
`;

export const ListContact = styled.ul`
  margin-top: 18px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const ItemSocial = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 50%;
  border-color: ${props => props.theme.colors.white};
`;

export const LinkSocial = styled.a`
  & svg {
    padding-top: 3px;
    width: 22px;
    height: 22px;
    fill: ${props => props.theme.colors.white};
  }
`;

export const ItemContact = styled.li`
  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const LinkContact = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: 300;
  & svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.white};
  }
`;

export const Btn = styled.button`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-bottom: 2px;
  }
`;
