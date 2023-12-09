import { BackgroundSlideshow, BodyTop, Container } from 'components';
import { Text, Title, Wrapper, WrapperWelcom } from './Home.styled';

export default function Home() {
  return (
    <>
      <BodyTop />
      <WrapperWelcom>
        <Wrapper>
          <BackgroundSlideshow />
        </Wrapper>
        <Container>
          <Title>ТехнологІЇ холоду</Title>
          <Text>
            Холодильне обладнання - проектування, постачання, монтаж та налагодження "під ключ"
          </Text>
        </Container>
      </WrapperWelcom>
    </>
  );
}
