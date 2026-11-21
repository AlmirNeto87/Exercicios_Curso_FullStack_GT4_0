
import { useState } from 'react';
import '../Css/FeedbackForm.css';

const FeedbackForm = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');

    const enviarFormulario = () => {

        // Verificar campos vazios
        if (!nome || !email || !comentario) {
            alert('Preencha todos os campos!');
            return;
        }

        // Verificar formato do email
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            alert('Digite um email válido!');
            return;
        }

        // Enviar dados
        alert(
            `Feedback enviado com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
        );

        // Limpar campos
        setNome('');
        setEmail('');
        setComentario('');
    };

    return (
        <div className="container">

            <div className="formulario">

                <h1>Deixe seu Feedback</h1>

                <p>Sua opinião é muito importante para nós!</p>

                <div className="campo">
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label>Comentário</label>
                    <textarea
                        placeholder="Digite seu comentário..."
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    />
                </div>

                <button onClick={enviarFormulario}>
                    Enviar Feedback
                </button>

            </div>

        </div>
    );
};

export default FeedbackForm;
