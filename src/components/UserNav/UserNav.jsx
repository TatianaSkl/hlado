import { LinkNav, NavUser } from './UserNav.styled';

export const UserNav = () => {
  return (
    <NavUser>
      <LinkNav to="/">Головна</LinkNav>
      <LinkNav to="/company">Про компанію</LinkNav>
      <LinkNav to="/equipment">Обладнання</LinkNav>
      <LinkNav to="/services">Послуги</LinkNav>
      <LinkNav to="/projects">Проекти</LinkNav>
      <LinkNav to="/news">Новини</LinkNav>
      <LinkNav to="/contacts">Контакти</LinkNav>
      <LinkNav to="/requirements">Вимоги</LinkNav>
    </NavUser>
  );
};
