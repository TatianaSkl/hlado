import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavUser = styled.nav`
  @media (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    width: 150px;
    border-top: 2px solid rgba(239, 237, 232, 0.3);
    border-bottom: 2px solid rgba(239, 237, 232, 0.3);
    border-color: ${props => props.theme.colors.black};
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media (min-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const LinkNav = styled(NavLink)`
  position: relative;
  padding: 0px 13px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors.accent};
  &.active {
    color: ${props => props.theme.colors.black};
  }
  @media (max-width: 1023px) {
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.black};
      font-weight: 800;
    }
  }
  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
