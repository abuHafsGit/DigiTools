import React from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Hero_bottom from './components/Hero_bottom';
import ProductTitle from './components/ProductTitle';
import Step from './components/Step';
import WorkFlow from './components/WorkFlow';
import TransparentCard from './components/TransparentCard';

import { ToastContainer } from 'react-toastify';
const fetchProducts = async () => {
    const response = await fetch('/data.json');
    return response.json();
}
const productsPromise = fetchProducts();

const App = () => {
    const [activeTab, setActiveTab] = React.useState('products');
    const [carts, setCarts] = React.useState([]);
    console.log(carts);
    return (

        <div>
            <Navbar carts={carts} />
            <Hero />
            <Hero_bottom />
            <ProductTitle />
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box  flex justify-center mt-10 items-center">
                <input type="radio" name="my_tabs_1" className={`tab rounded-full ${activeTab === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label="products" defaultChecked onClick={() => setActiveTab('products')} />
                <input type="radio" name="my_tabs_1" className={`tab rounded-full ${activeTab === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : ''}`} aria-label={`Cart (${carts.length})`} onClick={() => setActiveTab('cart')} />
            </div>

            {
                activeTab === 'products' ? <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts} /> : <Cart carts={carts} setCarts={setCarts} />
            }
            <Step />
            <TransparentCard />
            <WorkFlow />
            <Footer />
            <ToastContainer />
        </div>

    );
};

export default App;