import React from 'react';

const Product = ({ product, carts, setCarts }) => {
    const [isSubcribed, setIsSubcribed] = React.useState(false);

    const handleSubscribe = () => {
        setIsSubcribed(true);
        setCarts([...carts, product]);
    }
    console.log(isSubcribed);
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-sm">

                <div className="card-body">
                    <div className=' flex justify-between '>
                        <img src={product.img} alt="" /> 
                        <span className="badge badge-xs badge-warning">{product.tag}</span>

                    </div>
                    <div>
                        <h2 className="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                        <div>
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-green-500">✓ {feature}</span>
                                </div>
                            ))}

                        </div>

                        <div className="mt-6">
                            <button onClick={() => handleSubscribe()} className="btn btn-primary btn-block" >{isSubcribed ? 'Subscribed' : 'Subscribe'} </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;