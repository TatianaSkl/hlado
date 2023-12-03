import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavUser = styled.nav`
  @media (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 122px;
    margin: 0 auto;
  }
`;

export const LinkNav = styled(NavLink)`
  padding: 0px 13px;
  /* border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2); */
  font-size: 14px;
  line-height: 46px;
  font-weight: 500;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &.active {
    /* border-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white}; */
  }
  @media (min-width: 768px) {
    /* font-size: 16px;
    line-height: 150%; */
  }
  @media (min-width: 1024px) {
    /* border: 1px solid rgba(239, 237, 232, 0.2);
    border-color: ${props => props.theme.colors.accent}; */
    &:not(:last-child) {
      margin-right: 10px;
    }
    &.active {
      border: none;
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.white};
    }
  }
`;
