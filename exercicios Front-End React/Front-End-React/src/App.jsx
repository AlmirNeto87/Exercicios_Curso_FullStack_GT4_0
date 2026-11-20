import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import PageLayout from './layouts/PageLayout';
import NotFound from './pages/NotFound'; 
import Home  from  './pages/Home';


const App = () => (

    
    <>
        <BrowserRouter>
            
            <Routes> 
                {/* Rota Pública */}
                <Route path="/" element={<PageLayout />} > 
                    <Route index element={<Home />} />
                    
                    <Route path="*" element={<NotFound />} />
                </Route>
      
                    {/* Se não achar nenhuma rota ou não estiver logado, cai aqui */}

            </Routes>
            
        </BrowserRouter> 
    </>

); 

export default App;
