import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from '@primereact/ui/inputtext';
import { InputPassword } from '@primereact/ui/inputpassword';
import { IconField } from '@primereact/ui/iconfield';
import { Eye, EyeSlash } from '@primeicons/react';
import { Button } from '@primereact/ui/button';
import { Label } from '@primereact/ui/label';
import 'primeflex/primeflex.css';
import { Context } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const  [mostrarSenha, setMostrarSenha] = useState(false);
    const {register, handleSubmit} =useForm();

    const {setLogado} =useContext(Context);
    const navigate = useNavigate();    
    function logar(dados){
        // somente para debug console.log(dados);
        if(dados.email == "teste123@email.com" && dados.password =="123456"){
            setLogado(true);
            navigate('/');

        };
    };
    
    return (
        // 1. Centralização vertical e horizontal na tela
        <div className="flex justify-content-center align-items-center min-h-screen p-3">
            
            {/* 2. Container do formulário com espaçamento, bordas arredondadas e fundo adaptável */}
            <form onSubmit={handleSubmit(logar)} className=" surface-100 p-5 border-round shadow-2 w-full max-w-25rem flex flex-column gap-3">
                
                {/* 3. Título destacado */}
                <h3 className="text-2xl font-bold m-0 text-center text-900"  >Login</h3>
                
                {/* 4. Campo de Email */}
                <div className="flex flex-column gap-2">
                    <Label htmlFor="email" className="font-medium text-800">Email:</Label>
                    {/* A classe 'w-full' garante que o input ocupe toda a largura disponível */}
                    <InputText 
                        id="email" 
                        type="email" 
                        placeholder="email@example.com" 
                        className="w-full" 
                        {...register('email', {required: true})}
                    />
                </div>
                
                {/* 5. Campo de Senha */}
                <div className="flex flex-column gap-2">
                    <Label htmlFor="password" className="font-medium text-800">Password:</Label>
                    
                    {/* IconField.Root deve ocupar toda a largura */}
                    <IconField.Root className="w-full">
                        {/* Adicionado toggleMask para o PrimeReact controlar o ícone de olho automaticamente se desejado,
                            mas mantendo o comportamento visual atual e adicionando a classe w-full no input do password */}
                        <InputPassword 
                            type={mostrarSenha ? 'text' : 'password'}
                            id="password" 
                            variant="filled" 
                            placeholder="******" 
                            className="w-full" 
                            toggleMask
                            {...register('password', {required: true})} 
                        />
                        <IconField.Inset className="cursor-pointer" onClick={() => setMostrarSenha(!mostrarSenha)}>
                           {mostrarSenha ? <Eye className="size-4!" /> : <EyeSlash className="size-4!" />}
                        </IconField.Inset>
                    </IconField.Root>
                </div>

                {/* 6. Botão de envio ocupando toda a largura */}
                <Button type="submit" className="w-full mt-2">Submit</Button>
            </form>
        </div>
    );
};

export default Login;
