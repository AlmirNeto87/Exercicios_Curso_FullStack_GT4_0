
import { Card } from '@primereact/ui/card';

const About = () => {

    return (

        <div className="surface-ground p-4">

            {/* Título */}
            <div className="text-center mb-5">

                <h1 className="text-4xl font-bold text-900 mb-2">
                    Sobre Nós
                </h1>

                <p className="text-600 text-lg">
                    Conheça um pouco sobre nosso projeto!
                </p>

            </div>

            {/* Apresentação */}
            <div className="grid justify-content-center mb-4">

                <div className="col-12 md:col-10 lg:col-8">

                    <Card.Root>

                        <Card.Body>

                            <Card.Content>

                                <div className="text-center p-3">

                                    <i className="pi pi-desktop text-5xl text-primary mb-4" />

                                    <h2 className="text-2xl font-bold mb-3">
                                        Nosso Projeto
                                    </h2>

                                    <p className="text-600 line-height-3">
                                        Este projeto foi desenvolvido utilizando
                                        React, com o objetivo de praticar e
                                        aprimorar conhecimentos importantes
                                        do desenvolvimento Front-End.

                                        Estamos colocando em prática conceitos
                                        como componentes, estados, navegação
                                        entre páginas, consumo de APIs e
                                        estilização de interfaces.
                                    </p>

                                </div>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

            </div>

            {/* Tecnologias */}
            <h2 className="text-center text-2xl font-bold mb-4">
                Tecnologias utilizadas
            </h2>

            <div className="grid">

                <div className="col-12 md:col-4">

                    <Card.Root className="h-full">

                        <Card.Body>

                            <Card.Content>

                                <div className="text-center">

                                    <i className="pi pi-code text-4xl text-primary mb-3" />

                                    <h3 className="text-xl font-bold mb-2">
                                        React
                                    </h3>

                                    <p className="text-600">
                                        Biblioteca utilizada para construir
                                        interfaces através de componentes
                                        reutilizáveis.
                                    </p>

                                </div>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

                <div className="col-12 md:col-4">

                    <Card.Root className="h-full">

                        <Card.Body>

                            <Card.Content>

                                <div className="text-center">

                                    <i className="pi pi-palette text-4xl text-primary mb-3" />

                                    <h3 className="text-xl font-bold mb-2">
                                        PrimeReact
                                    </h3>

                                    <p className="text-600">
                                        Biblioteca de componentes utilizada
                                        para criar interfaces modernas
                                        e interativas.
                                    </p>

                                </div>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

                <div className="col-12 md:col-4">

                    <Card.Root className="h-full">

                        <Card.Body>

                            <Card.Content>

                                <div className="text-center">

                                    <i className="pi pi-server text-4xl text-primary mb-3" />

                                    <h3 className="text-xl font-bold mb-2">
                                        Axios
                                    </h3>

                                    <p className="text-600">
                                        Biblioteca utilizada para realizar
                                        requisições HTTP e consumir
                                        APIs externas.
                                    </p>

                                </div>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

            </div>

            {/* Objetivo */}
            <div className="text-center mt-5 p-3">

                <i className="pi pi-graduation-cap text-4xl text-primary mb-3" />

                <h2 className="text-2xl font-bold mb-3">
                    Nosso Objetivo
                </h2>

                <p className="text-600 line-height-3">
                    Continuar aprendendo, desenvolvendo novas funcionalidades
                    e evoluindo nossas habilidades no desenvolvimento
                    Front-End com React.
                </p>

            </div>

        </div>

    );
};

export default About;
