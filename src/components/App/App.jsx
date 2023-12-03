import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components';

const HomePage = lazy(() => import('pages/Home/Home'));
const CompanyPage = lazy(() => import('pages/Company/Company'));
const EquipmentPage = lazy(() => import('pages/Equipment/Equipment'));
const ServicesPage = lazy(() => import('pages/Services/Services'));
const ProjectsPage = lazy(() => import('pages/Projects/Projects'));
const NewsPage = lazy(() => import('pages/News/News'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));
const RequirementsPage = lazy(() => import('pages/Requirements/Requirements'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="equipment" element={<EquipmentPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="requirements" element={<RequirementsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
