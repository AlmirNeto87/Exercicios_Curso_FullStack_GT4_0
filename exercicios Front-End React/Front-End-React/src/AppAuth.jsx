//Versao do PrimeReact 11.0.0 


import 'primeicons/primeicons.css';                         // Pacote de ícones
import 'primeflex/primeflex.css';                           // Utilitários do PrimeFlex
import AppRoute from './routes/AppRoutes.jsx';
import { AuthContext } from './contexts/AuthContext.jsx';



const App = () => {
   
    return (  
       <>
       <AuthContext>
            <AppRoute />
       </AuthContext>
       </> 
    );
}
 
export default App;
