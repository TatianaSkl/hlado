import { useNavigate } from 'react-router-dom';
import { Container } from 'components';
import {
  Btn,
  ItemContact,
  ItemSocial,
  LinkContact,
  LinkSocial,
  ListSocial,
  Logo,
  Wrapper,
  WrapperFooter,
} from './Footer.styled';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaSkype,
  FaYoutube,
  FaTelegramPlane,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

export const Footer = () => {
  const navigate = useNavigate();

  const handleGo = () => {
    navigate('/');
  };

  const handleCompany = () => {
    navigate('/company');
  };

  const handleeQuipment = () => {
    navigate('/equipment');
  };

  const handleServices = () => {
    navigate('/services');
  };
  const handleProjects = () => {
    navigate('/projects');
  };
  const handleNews = () => {
    navigate('/news');
  };
  const handleContacts = () => {
    navigate('/contacts');
  };
  const handleRequirements = () => {
    navigate('/requirements');
  };

  return (
    <WrapperFooter>
      <Container>
        <Wrapper>
          <Logo to="/">Хладотехніка</Logo>
          <div>
            <ListSocial>
              <ItemSocial>
                <LinkSocial href="/" target="_blank" rel="noopener noreferrer nofollow">
                  <FaFacebookF />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="/" target="_blank" rel="noopener noreferrer nofollow">
                  <FaLinkedinIn />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="/" target="_blank" rel="noopener noreferrer nofollow">
                  <FaInstagram />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="/" target="_blank" rel="noopener noreferrer nofollow">
                  <FaSkype />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="/" target="_blank" rel="noopener noreferrer nofollow">
                  <FaYoutube />
                </LinkSocial>
              </ItemSocial>
              <ItemSocial>
                <LinkSocial href="/" target="_blank" rel="noopener noreferrer nofollow">
                  <FaTelegramPlane />
                </LinkSocial>
              </ItemSocial>
            </ListSocial>
          </div>
          <div>
            <ul>
              <ItemContact>
                <LinkContact href="tel:+380975375457">
                  <BsFillTelephoneFill />
                  +38 097 537 54 57
                </LinkContact>
              </ItemContact>
              <ItemContact>
                <LinkContact href="mailto:hlado99@ukr.net">
                  <IoMdMail />
                  hlado99@ukr.net
                </LinkContact>
              </ItemContact>
              <li>
                <LinkContact
                  href="https://maps.app.goo.gl/C7FJAKT7sTfG6ccC7"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaMapMarkerAlt />
                  Україна, м. Київ, 02161 <br />
                  вул.Братиславська, б.52, офіс 630-631
                </LinkContact>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Btn onClick={handleGo}>Головна</Btn>
              </li>
              <li>
                <Btn onClick={handleCompany}>Про компанію</Btn>
              </li>
              <li>
                <Btn onClick={handleeQuipment}>Обладнання</Btn>
              </li>
              <li>
                <Btn onClick={handleServices}>Послуги</Btn>
              </li>
              <li>
                <Btn onClick={handleProjects}>Проекти</Btn>
              </li>
              <li>
                <Btn onClick={handleNews}>Новини</Btn>
              </li>
              <li>
                <Btn onClick={handleContacts}>Контакти</Btn>
              </li>
              <li>
                <Btn onClick={handleRequirements}>Вимоги</Btn>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </WrapperFooter>
  );
};
