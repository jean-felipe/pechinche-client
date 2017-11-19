import React from 'react';

import ProductItem from './Product-item';

export default class ProductsList extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        products: []
    };

    componentDidMount() {
        fetch("http://localhost:3000/api/v1/products")
        .then(res => res.json())
        .then(result => 
            this.setState({
                isLoaded: true,
                products: result
            })
        )
        .catch(error => 
            this.setState({
                isLoaded: true,
                error
            })
        );
    }

    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading... </div>
        } else {
            return (
                <div>
                    <h1>Lista de Produtos</h1>
                    <div className="products-list">
                        {products.map(product => (
                            <div className="card product-item" key={product.title}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <p className="card-text">{product.description}</p>
                                    <a href="#" className="btn btn-primary">Comprar {product.price}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        
    }
}