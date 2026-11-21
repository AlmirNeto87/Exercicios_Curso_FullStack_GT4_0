
import { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    background-color: #f1f5f9;
`;

const ContactForm = styled.div`
    width: 100%;
    max-width: 450px;
    background-color: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h1`
    color: #334155;
    text-align: center;
    margin-bottom: 10px;
`;

const ContactDescription = styled.p`
    color: #64748b;
    text-align: center;
    margin-bottom: 25px;
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;

    label {
        color: #334155;
        font-weight: bold;
        margin-bottom: 8px;
    }

    input, textarea {
        padding: 12px;
        border: 1px solid #cbd5e1;
        border-radius: 6px;
        font-size: 15px;
        outline: none;

        &:focus {
            border-color: #2563eb;
        }
    }

    textarea {
        min-height: 100px;
        resize: vertical;
    }
`;

const ContactButton = styled.button`
    width: 100%;
    padding: 13px;
    background-color: #4f6c91;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #354d6c;
    }
`;

const Contact = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarMensagem = () => {

        if (!nome || !email || !mensagem) {
            alert('Preencha todos os campos!');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            alert('Digite um email válido!');
            return;
        }

        alert(`Mensagem enviada com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

        setNome('');
        setEmail('');
        setMensagem('');
    };

    return (
        <ContactContainer>

            <ContactForm>

                <ContactTitle>
                    Entre em Contato
                </ContactTitle>

                <ContactDescription>
                    Envie sua mensagem. Será um prazer conversar!
                </ContactDescription>

                <Field>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Field>

                <Field>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>

                <Field>
                    <label>Mensagem</label>
                    <textarea
                        placeholder="Digite sua mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                </Field>

                <ContactButton onClick={enviarMensagem}>
                    Enviar Mensagem
                </ContactButton>

            </ContactForm>

        </ContactContainer>
    );
};

export default Contact;
