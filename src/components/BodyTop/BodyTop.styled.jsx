import styled from '@emotion/styled';

export const WrapperDes = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
`;

export const Item = styled.li`
  width: 228px;
  padding: 18px 25px;
  font-size: 13px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
`;

export const ItemBorder = styled.li`
  width: 228px;
  padding: 18px 25px;
  font-size: 13px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  border-left: 1px solid rgba(239, 237, 232, 0.3);
  border-color: ${props => props.theme.colors.white};
`;
