import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import VisaPage from './pages/VisaPage';
import InsurancePage from './pages/InsurancePage';
import DomesticPage from './pages/DomesticPage';
import InternationalPage from './pages/InternationalPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import FlightsPage from './pages/FlightsPage';
import HotelsPage from './pages/HotelsPage';
import FAQPage from './pages/FAQPage';
import OurServicesPage from './pages/OurServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
        <Route index element={< HomePage />}/>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/visa' element={<VisaPage />} />
        <Route path='/insurance' element={<InsurancePage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/domestic' element={<DomesticPage />} />
        <Route path='/international' element={<InternationalPage />} />
        <Route path='/flights' element={<FlightsPage />} />
        <Route path='/hotels' element={<HotelsPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/testimonials' element={<TestimonialsPage />} />
        <Route path='/ourservices' element={<OurServicesPage />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router = {router} />;
};

export default App;
