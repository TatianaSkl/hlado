import styled from '@emotion/styled';

export const WrapperWelcom = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 75px 0px;
  @media (min-width: 1024px) {
    padding: 60px 0px;
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  @media (min-width: 768px) {
    left: 23.2%;
  }
  @media (min-width: 1024px) {
    left: 42.7%;
  }
  @media (min-width: 1200px) {
    left: 59.3%;
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
