
import { useState } from 'react';

import { Card } from '@primereact/ui/card';
import { Button } from '@primereact/ui/button';

const ProductCard = ({ product }) => {

    const [mostrarDescricao, setMostrarDescricao] = useState(false);

    return (

        <Card.Root className="h-full">

            <Card.Body>

                {/* Imagem do produto */}
                <Card.Header>

                    <div
                        className="flex justify-content-center align-items-center p-3"
                        style={{ height: '190px' }}
                    >

                        <img
                            src={product.image}
                            alt={product.title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '160px',
                                objectFit: 'contain'
                            }}
                        />

                    </div>

                </Card.Header>

                <Card.Content>

                    {/* Nome */}
                    <Card.Title>
                        <div
                            className="text-lg font-bold"
                            style={{
                                minHeight: '52px',
                                lineHeight: '1.4'
                            }}
                        >
                            {product.title}
                        </div>
                    </Card.Title>

                    {/* Categoria */}
                    <div className="mb-2">

                        <span className="text-sm text-500">
                            {product.category}
                        </span>

                    </div>

                    {/* Preço */}
                    <div className="mb-3">

                        <span className="text-2xl font-bold text-primary">
                            $ {Number(product.price).toFixed(2)}
                        </span>

                    </div>

                    {/* Descrição */}
                    <div className="mb-3">

                        {mostrarDescricao && (
                            <p
                                className="text-600 text-sm"
                                style={{
                                    lineHeight: '1.5',
                                    overflowWrap: 'anywhere'
                                }}
                            >
                                {product.description}
                            </p>
                        )}

                        <Button
                            type="button"
                            severity="secondary"
                            text
                            size="small"
                            onClick={() => setMostrarDescricao(!mostrarDescricao)}
                        >

                            <i className={`pi ${mostrarDescricao ? 'pi-chevron-up' : 'pi-chevron-down'} mr-2`} />

                            {mostrarDescricao ? 'Ocultar descrição' : 'Ver descrição'}

                        </Button>

                    </div>

                </Card.Content>

            </Card.Body>

        </Card.Root>

    );

};

export default ProductCard;
