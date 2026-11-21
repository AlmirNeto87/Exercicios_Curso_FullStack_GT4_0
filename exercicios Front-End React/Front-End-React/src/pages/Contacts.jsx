
import { Card } from '@primereact/ui/card';

const Contact = () => {

    return (

        <div className="surface-ground p-4">

            <div className="text-center mb-5">

                <h1 className="text-4xl font-bold text-900 mb-2">
                    Entre em Contato
                </h1>

                <p className="text-600 text-lg">
                    Estamos à disposição para atender você!
                </p>

            </div>

            <div className="grid">

                {/* Telefones */}
                <div className="col-12 md:col-4">

                    <Card.Root className="h-full">

                        <Card.Body>

                            <Card.Content>

                                <div className="text-center">

                                    <i className="pi pi-phone text-4xl text-primary mb-3" />

                                    <h2 className="text-xl font-bold">
                                        Telefones
                                    </h2>

                                    <p className="text-600 mt-3">
                                        (85) 3333-4444
                                    </p>

                                    <p className="text-600 mt-2">
                                        (85) 99999-8888
                                    </p>

                                </div>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

                {/* Emails */}
                <div className="col-12 md:col-4">

                    <Card.Root className="h-full">

                        <Card.Body>

                            <Card.Content>

                                <div className="text-center">

                                    <i className="pi pi-envelope text-4xl text-primary mb-3" />

                                    <h2 className="text-xl font-bold">
                                        E-mails
                                    </h2>

                                    <p className="text-600 mt-3">
                                        contato@minhaloja.com
                                    </p>

                                    <p className="text-600 mt-2">
                                        suporte@minhaloja.com
                                    </p>

                                </div>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

                {/* Endereço */}
                <div className="col-12 md:col-4">

                    <Card.Root className="h-full">

                        <Card.Body>

                            <Card.Content>

                                <div className="text-center">

                                    <i className="pi pi-map-marker text-4xl text-primary mb-3" />

                                    <h2 className="text-xl font-bold">
                                        Endereço
                                    </h2>

                                    <p className="text-600 mt-3">
                                        Avenida Central, 123
                                    </p>

                                    <p className="text-600 mt-2">
                                        Fortaleza - CE
                                    </p>

                                    <p className="text-600 mt-2">
                                        CEP: 60000-000
                                    </p>

                                </div>

                            </Card.Content>

                        </Card.Body>

                    </Card.Root>

                </div>

            </div>

            <div className="text-center mt-5">

                <p className="text-600">
                    Nosso atendimento funciona de segunda a sexta,
                    das 08h às 18h.
                </p>

            </div>

        </div>

    );
};

export default Contact;
