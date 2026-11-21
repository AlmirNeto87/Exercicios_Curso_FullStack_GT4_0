
import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Buscando produtos na API
    useEffect(() => {

        const buscarProdutos = async () => {

            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products'
                );

                setProducts(response.data);

            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setError('Não foi possível carregar os produtos.');

            } finally {
                setLoading(false);
            }
        };

        buscarProdutos();

    }, []);

    // Adicionando produto à lista
    const adicionarProduto = (novoProduto) => {

        setProducts((produtosAtuais) => [
            novoProduto,
            ...produtosAtuais
        ]);

    };

    if (loading) {
        return <p className="text-center p-4">Carregando produtos...</p>;
    }

    if (error) {
        return <p className="text-center p-4 text-red-500">{error}</p>;
    }

    return (
        <div className="p-3">

            <h1 className="text-center mb-4">
                Nossa Loja Virtual
            </h1>

            {/* Formulário de cadastro */}
            <ProductForm onAddProduct={adicionarProduto} />

            <h2 className="mb-4">
                Produtos disponíveis
            </h2>

            {/* Listagem dos produtos */}
            <div className="grid">

                {products.map((product) => (

                    <div
                    key={product.id}
                    className="col-12 sm:col-6 lg:col-4 xl:col-3"
                    >

                    <ProductCard product={product} />

                    </div>

                ))}

            </div>

        </div>
    );
};

export default ProductList;
