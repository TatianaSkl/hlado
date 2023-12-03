import styled from '@emotion/styled';

export const WrapperWelcom = styled.div`
  margin: 0 auto;
  /* max-width: 1600px; */
  height: 400px;
  padding: 100px 0px;
  @media (min-width: 1024px) {
    padding: 200px 0px;
    height: 600px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 32px;
  color: ${props => props.theme.colors.accent};
  @media (min-width: 768px) {
    width: 369px;
    font-size: 48px;
  }
  @media (min-width: 1024px) {
    width: 570px;
    font-size: 68px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1;
  margin-top: 20px;
  @media (min-width: 768px) {
    font-size: 22px;
    width: 370px;
    margin-top: 50px;
  }
`;
