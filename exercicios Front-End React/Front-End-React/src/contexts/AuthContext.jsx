/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext()

export const AuthContext =({context, children}) =>{

       // 🟢 Inicializa o estado buscando direto do localStorage. 
    // Se existir a string 'true', ele começa como true, senão false.
    const [logado, setLogado] = useState(() => {
        const armazenado = localStorage.getItem('usuario_logado');
        return armazenado === 'true';
    });

    // 🟢 Toda vez que o estado 'logado' mudar, atualiza o localStorage automaticamente
    useEffect(() => {
        localStorage.setItem('usuario_logado', logado);
    }, [logado]);
    
    return (
        <>
            <Context.Provider value={{logado,setLogado}}>
                {children}
            </Context.Provider>
        
        </>
    );


};