import React from 'react';

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

                    <ul>
                        {products.map(product => (
                            <li key={product.title}>
                                <p>{product.title}</p>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <p>---------------</p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
        
    }
}