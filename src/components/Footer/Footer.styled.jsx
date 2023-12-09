import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const WrapperFooter = styled.footer`
  background-color: ${props => props.theme.colors.accent};
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-size: 24px;
  font-weight: 800;
  /* &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
    border-radius: 12px;
  } */
`;

export const ListSocial = styled.ul`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  flex-wrap: wrap;
  width: 145px;
  gap: 10px;
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
  margin-bottom: 10px;
`;

export const LinkContact = styled.a`
  color: ${props => props.theme.colors.white};
  & svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.white};
  }
`;

export const Btn = styled.button`
  margin-bottom: 2px;
  color: ${props => props.theme.colors.white};
`;
