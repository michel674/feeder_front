import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import Header from './Header';
import Navbar from './Navbar';

import { GlobalStyled } from './components/reset.styled';
import { AppWrapperStyled } from './components/app-wrapper.styled';

const App = () => {
  const pathname = window.location.pathname;

  return (
    <BrowserRouter>
      <GlobalStyled />
      <Header />
      <AppWrapperStyled>
        <AppRoutes />
      </AppWrapperStyled>

      <Navbar />
    </BrowserRouter>
  );
};

export default App;
