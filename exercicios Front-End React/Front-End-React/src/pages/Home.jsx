
import { useNavigate } from 'react-router-dom';

import { Button } from '@primereact/ui/button';
import { Card } from '@primereact/ui/card';

const Home = () => {

    const navigate = useNavigate();

    return (

        <div className="surface-ground p-4">

            <div className="flex flex-column align-items-center justify-content-center text-center"
                 style={{ minHeight: '70vh' }}>

                {/* Ícone principal */}
                <i className="pi pi-desktop text-6xl text-primary mb-4" />

                {/* Título */}
                <h1 className="text-4xl font-bold text-900 mb-3">
                    Bem-vindo à nossa aplicação!
                </h1>

                {/* Descrição */}
                <p className="text-600 text-lg line-height-3 mb-5"
                   style={{ maxWidth: '650px' }}>

                    Este é um espaço dedicado aos meus exercícios
                    de Front-End com React.

                    Aqui estou colocando em prática meus conhecimentos
                    sobre componentes, navegação, gerenciamento de estados,
                    consumo de APIs e desenvolvimento de interfaces.

                </p>

                {/* Card de apresentação */}
                <div className="grid justify-content-center w-full">

                    <div className="col-12 md:col-10 lg:col-8">

                        <Card.Root>

                            <Card.Body>

                                <Card.Content>

                                    <h2 className="text-2xl font-bold text-900 mb-3">
                                        Explore nosso projeto!
                                    </h2>

                                    <p className="text-600 mb-4">
                                        Conheça nossa loja virtual ou deixe
                                        sua opinião através do formulário
                                        de feedback.
                                    </p>

                                    {/* Botões */}
                                    <div className="flex flex-column sm:flex-row justify-content-center gap-3">

                                        <Button
                                            onClick={() => navigate('/loja')}
                                        >
                                            <i className="pi pi-shopping-bag mr-2" />
                                            Conhecer a Loja
                                        </Button>

                                        <Button
                                            onClick={() => navigate('/feedbackform')}
                                            severity="secondary"
                                            outlined
                                        >
                                            <i className="pi pi-comment mr-2" />
                                            Enviar Feedback
                                        </Button>

                                    </div>

                                </Card.Content>

                            </Card.Body>

                        </Card.Root>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Home;
