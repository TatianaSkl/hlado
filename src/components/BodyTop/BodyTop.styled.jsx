import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.accent};
`;

export const Item = styled.li`
  width: 228px;
  padding: 0 25px;
  font-size: 13px;
  text-transform: uppercase;
`;
