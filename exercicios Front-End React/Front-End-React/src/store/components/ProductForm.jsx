
import { useState } from 'react';

import { Card } from '@primereact/ui/card';
import { Button } from '@primereact/ui/button';
import { InputText } from '@primereact/ui/inputtext';
import { Textarea } from '@primereact/ui/textarea';

const ProductForm = ({ onAddProduct }) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const adicionarProduto = (e) => {
        e.preventDefault();

        if (!title || !price || !description || !image) {
            alert('Preencha todos os campos!');
            return;
        }

        if (!Number.isFinite(Number(price)) || Number(price) <= 0) {
            alert('Digite um preço válido!');
            return;
        }

        const novoProduto = {
            id: Date.now(),
            title,
            price: Number(price),
            description,
            image,
            category: 'Novo produto'
        };

        onAddProduct(novoProduto);

        setTitle('');
        setPrice('');
        setDescription('');
        setImage('');

        alert('Produto adicionado com sucesso!');
    };

    return (
        <Card.Root className="mb-4">
            <Card.Body>

                <Card.Caption>
                    <Card.Title>
                        Cadastrar novo produto
                    </Card.Title>
                </Card.Caption>

                <Card.Content>

                    <form onSubmit={adicionarProduto}>
                        <div className="flex flex-column gap-3">

                            <div className="flex flex-column gap-2">
                                <label htmlFor="title">Nome do produto</label>

                                <InputText
                                    id="title"
                                    className="w-full"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Nome do produto"
                                    required
                                />
                            </div>

                            <div className="flex flex-column gap-2">
                                <label htmlFor="price">Preço</label>

                                <InputText
                                    id="price"
                                    className="w-full"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Ex: 99.90"
                                    min="0.01"
                                    step="0.01"
                                    required
                                />
                            </div>

                            <div className="flex flex-column gap-2">
                                <label htmlFor="image">URL da imagem</label>

                                <InputText
                                    id="image"
                                    className="w-full"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="https://..."
                                    required
                                />
                            </div>

                            <div className="flex flex-column gap-2">
                                <label htmlFor="description">Descrição</label>

                                <Textarea
                                    id="description"
                                    className="w-full"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    placeholder="Descrição do produto"
                                    required
                                />
                            </div>

                            <Button type="submit">
                                <i className="pi pi-plus mr-2" />
                                Adicionar produto
                            </Button>

                        </div>
                    </form>

                </Card.Content>
            </Card.Body>
        </Card.Root>
    );
};

export default ProductForm;
