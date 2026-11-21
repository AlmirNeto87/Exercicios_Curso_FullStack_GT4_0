import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import PageLayout from './layouts/PageLayout';
import NotFound from './pages/NotFound'; 
import Home  from  './pages/Home';
import FeedbackForm from './pages/FeedbackForm';


const App = () => (

    
    <>
        <BrowserRouter>
            
            <Routes> 
                {/* Rota Pública */}
                <Route path="/" element={<PageLayout />} > 
                    <Route index element={<Home />} />
                    <Route path="/feedbackform" element={<FeedbackForm />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
      
                    {/* Se não achar nenhuma rota ou não estiver logado, cai aqui */}

            </Routes>
            
        </BrowserRouter> 
    </>

); 

export default App;
