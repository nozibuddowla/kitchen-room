import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCard';
import CookingCard from './Cards/CookingCard';
import { Flip, Slide, toast} from 'react-toastify';
import ServeCard from './Cards/ServeCard';

const OrderContainer = ({promise}) => {
    const orders = use(promise);

    const [cookingItems, setCookingItems] = useState([]);

    const [readyItems, setReadyItems] = useState([]);

    const handleOrder = (order) => {
        const isExistCooking = cookingItems.find(item => item.id === order.id);

        if(isExistCooking) {
            toast.warn("Already Cooking!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Slide,
                });
            return;
        }
        
        const newCookingItems = [...cookingItems, order];

        setCookingItems(newCookingItems);
    }

    const handleCooking = (order) => {
        const newReadyItems = [...readyItems, order];
        setReadyItems(newReadyItems);

        const remainCookingItems = cookingItems.filter(item => item.id !== order.id);
        
        setCookingItems(remainCookingItems);

        toast.success(` ${order.order_title} is ready to serve!`, {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Flip,
                })
    }
    
    
    return (
        <div>
            <States totalOrder={orders.length} totalCooking={cookingItems.length} totalReadyItems={readyItems.length} />

            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
                <div className="lg:col-span-7">
                    <h3 className='font-bold text-4xl'>Current Orders</h3>
                    <div className='space-y-5'>
                        {
                            orders.map(item => <OrderCard key={item.id} order={item} handleOrder={handleOrder}  />)
                        }
                    </div>
                </div>

                <div className="lg:col-span-5 space-y-5">
                    <h3 className='font-bold text-4xl'>Cooking</h3>
                    <div className="shadow p-10 space-y-5">
                        {
                        cookingItems.map((order, orderId) => <CookingCard key={orderId} order={order} handleCooking={handleCooking} setCookingItems={setCookingItems} /> )
                        }

                    </div>

                    <h3 className='font-bold text-4xl'>Ready to Serve</h3>
                    <div className="shadow p-10 space-y-5">
                        {
                            readyItems.map((readyItem, readyItemId) => <ServeCard key={readyItemId} order={readyItem} > </ServeCard>)
                        }
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OrderContainer;