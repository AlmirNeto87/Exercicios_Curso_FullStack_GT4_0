
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'primeicons/primeicons.css';                         // Pacote de ícones
import 'primeflex/primeflex.css';    
import PageLayout from '../layouts/PageLayout';
import Login from '../pages/Login';
// import { useContext } from 'react';
// import { Context } from '../contexts/AuthContext';

const NotFound = lazy(() => import('../pages/NotFound'));
const Home = lazy(() => import('../pages/Home'));
const FeedbackForm = lazy(() => import('../pages/FeedbackForm'));
const Contact = lazy(() => import('../pages/Contacts'));
const About = lazy(() => import('../pages/About'));

const AppRoute = () => {

    // const {logado} = useContext(Context)
    return (
        <>
            <BrowserRouter>

                <Routes>

                    {/* Rota Pública */}
                    <Route path="/" element={<PageLayout />}>

                        <Route index element={
                            <Suspense fallback={<p>Carregando página...</p>}>
                                <Home />
                            </Suspense>
                        } />

                        <Route path="login" element={
                            <Suspense fallback={<p>Carregando página...</p>}>
                                <Login />
                            </Suspense>
                        } />

                        {/* {logado && (
                            <Route>
                                <Route path="/feedbackform" element={<FeedbackForm />} />
                            </Route>
                        )} */}


                        <Route path="feedbackform" element={
                            <Suspense fallback={<p>Carregando página...</p>}>
                                <FeedbackForm />
                            </Suspense>
                        } />

                        <Route path="contatos" element={
                            <Suspense fallback={<p>Carregando página...</p>}>
                                <Contact />
                            </Suspense>
                        } />

                        <Route path="sobre" element={
                            <Suspense fallback={<p>Carregando página...</p>}>
                                <About />
                            </Suspense>
                        } />

                        <Route path="*" element={
                            <Suspense fallback={<p>Carregando página...</p>}>
                                <NotFound />
                            </Suspense>
                        } />

                    </Route>

                </Routes>

            </BrowserRouter>
        </>
    );
};

export default AppRoute;
