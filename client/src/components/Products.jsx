import React, { use } from 'react';
import Product from './Product';

const Products = ({ productsPromise, carts, setCarts }) => {
    const products = use(productsPromise);
    console.log(products);
    return (
        <div className=' grid grid-cols-1 gap-4 p-4  lg:w-[80%] mx-auto  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 justify-center '>
            {
                products.map((product) => (
                    <Product key={product.id} product={product} carts={carts} setCarts={setCarts} />
                ))
            }
        </div>
    );
};

export default Products;