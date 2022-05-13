import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
// import Home from './pages/HomePage';
import Wallet from './pages/wallet';
import LoginRegistrationPage from './pages/LoginRegistrationPage';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import Create from './pages/create';
import Contact from './pages/contact';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';
import Footer from './menu/footer';
import MarketingPage from './pages/MarketingPage';
import ProfilePage from './pages/ProfilePage';
import PartnerOrderPage from './pages/PartnerOrderPage';

import { createGlobalStyle } from 'styled-components';
import LoginRegister from './components/LoginRegister';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
      <Header/>
      <PosedRouter> 
      <ScrollTop path="/">
        <LoginRegistrationPage path="/" >
          <Redirect to="/login" />
        </LoginRegistrationPage>
        {/* <Home path="/home" />
        <Home exact path="/" >
          <Redirect to="/home" />
        </Home> */}
        <LoginRegistrationPage path="/" />
        <MarketingPage path="/marketing" />
        <ProfilePage path="/profile" />
        <PartnerOrderPage path="partnerorder" />
        {/* <Wallet path="/wallet" />
        <Rangking path="/rangking" />
        <Price path="/price" />
        <Works path="/works" />
        <News path="/news" />
        <Create path="/create" />
        <Contact path="/contact" />
        <ElegantIcons path="/elegantIcons" />
        <EtlineIcons path="/etlineIcons" />
        <FontAwesomeIcons path="/fontAwesomeIcons" />
        <Accordion path="/accordion" />
        <Alerts path="/alerts" />
        <Progressbar path="/progressbar" />
        <Tabs path="/tabs" /> */}
      </ScrollTop>
      </PosedRouter>

    <ScrollToTopBtn />
       <Footer />
    
    
  </div>
);
export default app;