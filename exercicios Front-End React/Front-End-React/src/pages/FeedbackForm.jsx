
import { useState } from 'react';

import { Card } from '@primereact/ui/card';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Textarea } from '@primereact/ui/textarea';

const FeedbackForm = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');

    const enviarFormulario = (e) => {

        e.preventDefault();

        // Verificar campos vazios
        if (!nome.trim() || !email.trim() || !comentario.trim()) {
            alert('Preencha todos os campos!');
            return;
        }

        // Verificar formato do email
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            alert('Digite um email válido!');
            return;
        }

        // Exibir dados do formulário
        alert(
            `Feedback enviado com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
        );

        // Limpar campos
        setNome('');
        setEmail('');
        setComentario('');
    };

    return (

        <div className="surface-ground p-4">

            <div className="flex justify-content-center align-items-center"
                 style={{ minHeight: '70vh' }}>

                <div className="w-full" style={{ maxWidth: '550px' }}>

                    <Card.Root>

                        <Card.Body>

                            <Card.Caption>

                                <div className="text-center mb-4">

                                    <i className="pi pi-comments text-5xl text-primary mb-3" />

                                    <Card.Title>
                                        Deixe seu Feedback
                                    </Card.Title>

                                    <Card.Subtitle>
                                        Sua opinião é muito importante para nós!
                                    </Card.Subtitle>

                                </div>

                            </Card.Caption>

                            <Card.Content>

                                <form onSubmit={enviarFormulario}>

                                    <div className="flex flex-column gap-3">

                                        {/* Nome */}
                                        <div className="flex flex-column gap-2">

                                            <label htmlFor="nome" className="font-semibold">
                                                Nome
                                            </label>

                                            <InputText
                                                id="nome"
                                                className="w-full"
                                                value={nome}
                                                onChange={(e) => setNome(e.target.value)}
                                                placeholder="Digite seu nome"
                                                required
                                            />

                                        </div>

                                        {/* Email */}
                                        <div className="flex flex-column gap-2">

                                            <label htmlFor="email" className="font-semibold">
                                                Email
                                            </label>

                                            <InputText
                                                id="email"
                                                type="email"
                                                className="w-full"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Digite seu email"
                                                required
                                            />

                                        </div>

                                        {/* Comentário */}
                                        <div className="flex flex-column gap-2">

                                            <label htmlFor="comentario" className="font-semibold">
                                                Comentário
                                            </label>

                                            <Textarea
                                                id="comentario"
                                                className="w-full"
                                                value={comentario}
                                                onChange={(e) => setComentario(e.target.value)}
                                                placeholder="Digite seu comentário..."
                                                rows={4}
                                                required
                                            />

                                        </div>

                                        {/* Botão */}
                                        <Button
                                            type="submit"
                                            className="w-full"
                                        >
                                            <i className="pi pi-send mr-2" />
                                            Enviar Feedback
                                        </Button>

                                    </div>

                                </form>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

            </div>

        </div>

    );

};

export default FeedbackForm;
