import { Outlet } from 'react-router-dom'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
console.log("teste");

const PageLayout = () => (
    <>
     <div> 
        <Header /> 
        <main> {/* As visões dinâmicas (Home, Produtos, etc.) serão injetadas aqui: */} 
             <Outlet /> 
        </main> 
        <Footer /> 
    </div> 
    </>
); 
export default PageLayout;
