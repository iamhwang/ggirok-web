import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';

import Home from './screens/Home';
import Login from './screens/Login';
import Error from './screens/Error';

import { inLoggedInVar, darkModeVar } from './apollo'
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';



export default function App() {
  const isLoggedIn = useReactiveVar(inLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme= {darkMode ? darkTheme :lightTheme }>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={isLoggedIn ? <Home /> : <Login /> } />
          <Route path="*" element={ <Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
