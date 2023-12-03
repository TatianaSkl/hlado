import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    padding: 0 15px;
    width: 768px;
  }
  @media (min-width: 1024px) {
    padding: 0 15px;
    width: 1024px;
  }
  @media (min-width: 1200px) {
    padding: 0 15px;
    width: 1170px;
  }
`;
