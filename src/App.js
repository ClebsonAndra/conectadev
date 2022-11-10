import { ThemeProvider } from '@mui/material';
import './App.css';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import theme from './theme/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>   
          <Route path="/sign-in" element={<SignIn/>}/>  
          <Route path="*" element={<h1>Não encontrado</h1>}/>   
        </Routes>
      </BrowserRouter>
      
      
    </ThemeProvider>
    
  );
}

export default App;
