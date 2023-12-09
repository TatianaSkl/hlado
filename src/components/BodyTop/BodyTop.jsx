import { Container } from 'components';
import { Item, ItemBorder, List, WrapperDes } from './BodyTop.styled';

export const BodyTop = () => {
  return (
    <WrapperDes>
      <Container>
        <List>
          <Item>ЦЕНТРИ ОБРОБКИ ДАНИХ</Item>
          <ItemBorder>ПЕРОРОБНІ ПІДПРИЄМСТВА АПК</ItemBorder>
          <ItemBorder>ЛОГІСТИЧНІ СКЛАДИ І КОМПЛЕКСИ</ItemBorder>
          <ItemBorder>ПІДПРИЄМСТВА ОПТОВО-РІЗНИЧНОЇ ТОРГІВЛІ</ItemBorder>
          <ItemBorder>Підприємства фармацевтичної галузі</ItemBorder>
        </List>
      </Container>
    </WrapperDes>
  );
};
