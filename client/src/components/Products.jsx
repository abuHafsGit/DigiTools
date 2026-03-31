import React, { use } from 'react';
import Product from './Product';

const Products = ({ productsPromise, carts, setCarts }) => {
    const products = use(productsPromise);
    console.log(products);
    return (
        <div className=' grid grid-cols-3 gap-4 p-4  w-[80%] mx-auto '>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} carts={carts} setCarts={setCarts} />
                ))
            }
        </div>
    );
};

export default Products;